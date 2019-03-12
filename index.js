const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
      const speechText = 'Welcome to Teach Me U.S. State Capitals!';
      speechText += 'You can name a state to get it\`s capital.';
      speechText += 'For example you can say, what\'s the capital of Maryland.';
  
    const repromptText = 'Which state\'s capital would you like to hear?';
    repromptText += 'For example you can say, what\'s the capital of Maryland.';
      return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(repromptText)
        .withSimpleCard('Teach Me U.S. State Capitals', speechText)
        .getResponse();
    }
  };

  const FactRequestIntentHandler = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'FactRequestIntent';
    },
    handle(handlerInput) {
      const speechText = 'You\'ve requested a state!';
  
      return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard('Teach Me U.S. State Capitals', speechText)
        .getResponse();
    },
  };

  const HelpIntentHandler = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
      const speechText = 'You can name a state to get it\`s capital.';
      speechText += 'For example you can say, what\'s the capital of Maryland.';
  
      const repromptText = 'Which state\'s capital would you like to hear?';
      repromptText += 'For example you can say, what\'s the capital of Maryland.';
      return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(repromptText)
        .withSimpleCard('Teach Me U.S. State Capitals', speechText)
        .getResponse();
    },
  };
  
  const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
          || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
      const speechText = 'Thanks for learning with me. Goodbye!';
  
      return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard('Teach Me U.S. State Capitals', speechText)
        .getResponse();
    },
  };
  
  const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
      console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);
  
      return handlerInput.responseBuilder.getResponse();
    },
  };
  
  const ErrorHandler = {
    canHandle() {
      return true;
    },
    handle(handlerInput, error) {
      console.log(`Error handled: ${error.message}`);
  
      return handlerInput.responseBuilder
        .speak('Sorry, I can\'t understand the command. Please say again.')
        .reprompt('Sorry, I can\'t understand the command. Please say again.')
        .getResponse();
    },
  };
  
  const skillBuilder = Alexa.SkillBuilders.custom();
  
  exports.handler = skillBuilder
    .addRequestHandlers(
      LaunchRequestHandler,
      FactRequestIntentHandler,
      HelpIntentHandler,
      CancelAndStopIntentHandler,
      SessionEndedRequestHandler
    )
    .addErrorHandlers(ErrorHandler)
    .lambda();