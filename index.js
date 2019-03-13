const dotenvExtended = require('dotenv-extended');
const dotenvParseVariables = require('dotenv-parse-variables');
const algoliasearch = require('algoliasearch');
const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
const ALGOLIA_API_KEY = process.env.ALGOLIA_SEARCH_API_KEY;
const ALGOLIA_INDEX_NAME = process.env.ALGOLIA_INDEX_NAME;
const algolia = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
const index = algolia.initIndex(ALGOLIA_INDEX_NAME);

// load .env variables
dotenvParseVariables(
  dotenvExtended.load({
    // assign variables to process.env object for accessibility
    assignToProcessEnv: true,
    // displays "missing .env file", no need in production, where we use real env variables
    silent: process.env.APP_ENV === 'production',
    errorOnMissing: true,
    // also use process.env to fill variables in, only in production
    includeProcessEnv: process.env.APP_ENV === 'production',
  })
);

let intentHandlers = {};

exports.handler = function (event, context) {
  try {
    
      if (!event.session.attributes) {
          event.session.attributes = {};
      }

      if (event.request.type === 'LaunchRequest') {
          onLaunch(event.request, event.session, new Response(context,event.session));
      } else if (event.request.type === 'IntentRequest') {
          var response =  new Response(context,event.session);
          if (event.request.intent.name in intentHandlers) {
            intentHandlers[event.request.intent.name](event.request, event.session, response, getSlots(event.request));
          } else {
            response.speechText = 'Unknown intent';
            response.shouldEndSession = true;
            response.done();
          }
      } else if (event.request.type === 'SessionEndedRequest') {
          context.succeed();
      }
  } catch (e) {
      context.fail('Exception: ' + getError(e));
  }
};

function getSlots(req) {
  let slots = {}
  for(var key in req.intent.slots) {
    if(req.intent.slots[key].value !== undefined) {
      slots[key] = req.intent.slots[key].value;
    }
  }
  return slots;
}

var Response = function (context,session) {
  this.speechText = '';
  this.shouldEndSession = true;
  this.ssmlEn = true;
  this._context = context;
  this._session = session;

  this.done = function(options) {

    if(options && options.speechText) {
      this.speechText = options.speechText;
    }

    if(options && options.repromptText) {
      this.repromptText = options.repromptText;
    }

    if(options && options.ssmlEn) {
      this.ssmlEn = options.ssmlEn;
    }

    if(options && options.shouldEndSession) {
      this.shouldEndSession = options.shouldEndSession;
    }

    this._context.succeed(buildAlexaResponse(this));
  }

  this.fail = function(msg) {
    this._context.fail(msg);
  }

};

function createSpeechObject(text,ssmlEn) {
  if(ssmlEn) {
    return {
      type: 'SSML',
      ssml: '<speak>'+text+'</speak>'
    }
  } else {
    return {
      type: 'PlainText',
      text: text
    }
  }
}

function buildAlexaResponse(response) {
  var alexaResponse = {
    version: '1.0',
    response: {
      outputSpeech: createSpeechObject(response.speechText,response.ssmlEn),
      shouldEndSession: response.shouldEndSession
    }
  };

  if(response.repromptText) {
    alexaResponse.response.reprompt = {
      outputSpeech: createSpeechObject(response.repromptText,response.ssmlEn)
    };
  }

  if(response.cardTitle) {
    alexaResponse.response.card = {
      type: 'Simple',
      title: response.cardTitle
    };

    if(response.imageUrl) {
      alexaResponse.response.card.type = 'Standard';
      alexaResponse.response.card.text = response.cardContent;
      alexaResponse.response.card.image = {
        smallImageUrl: response.imageUrl,
        largeImageUrl: response.imageUrl
      };
    } else {
      alexaResponse.response.card.content = response.cardContent;
    }
  }

  if (!response.shouldEndSession && response._session && response._session.attributes) {
    alexaResponse.sessionAttributes = response._session.attributes;
  }
  return alexaResponse;
}

function getError(err) {
  var msg='';
  if (typeof err === 'object') {
    if (err.message) {
      msg = ': Message : ' + err.message;
    }
    if (err.stack) {
      msg += '\nStacktrace:';
      msg += '\n====================\n';
      msg += err.stack;
    }
  } else {
    msg = err;
    msg += ' - This error is not object';
  }
  return msg;
}

function onLaunch(launchRequest, session, response) {
  response.speechText = 'Hi, welcome to the Pokemon Lookup. You can ask me to find a pokemon. Which pokemon would you like to find?';
  response.repromptText = 'For example, you can say find Jigglypuff.';
  response.shouldEndSession = false;
  response.done();
}

intentHandlers['GetPokemonInfo'] = async function(request,session,response,slots) {

  if(slots.PokemonName === undefined) {
    response.speechText = 'Looks like you forgot to mention a pokemon. Which pokemon would you like to find? ';
    response.repromptText = 'For example, you can say find Jigglypuff. ';
    response.shouldEndSession = false;
    response.done();
    return;
  } else {

    response.cardTitle = `Pokemon Lookup results for: ${slots.PokemonName}`;
    response.cardContent = '';

    const results = await index.search({
      query: slots.PokemonName,
      hitsPerPage: 1
    });

    if (results.hits.length) {
      let pokemon = results.hits[0];
      response.speechText = `You\'ve requested ${slots.PokemonName}! `;
      response.speechText += `Gotta catch \'em all and you caught \'em. ${pokemon.name.english} is of type ${pokemon.type.join(', ')}. `;
      response.speechText += `HP of ${pokemon.base.hitPoint}, attack of ${pokemon.base.attack}, and defense of ${pokemon.base.defense}`;
      response.cardContent += response.speechText;
      response.shouldEndSession = true;
      response.done();
    } else {
      response.speechText = `You\'ve requested ${slots.PokemonName}! `;
      response.speechText += `Didn\'t catch \'em`;
      response.cardContent += response.speechText;
      response.shouldEndSession = true;
      response.done();
    }
  }
}

intentHandlers['AMAZON.StopIntent'] = function(request,session,response,slots) {
  response.speechText  = `Good Bye. `;
  response.shouldEndSession = true;
  response.done();
};

intentHandlers['AMAZON.CancelIntent'] =  intentHandlers['AMAZON.StopIntent'];

intentHandlers['AMAZON.HelpIntent'] = function(request,session,response,slots) {
  response.speechText = 'You can ask me to find a pokemon. Which pokemon would you like to find?';
  response.repromptText = 'For example, you can say find Jigglypuff.';
  response.shouldEndSession = false;
  response.done();
}