
# Create the Algolia Index

1. From the command line, install the node modules:
```
yarn
```

2. From the command line, copy the `.env.defaults` file and name it `.env` for your configuration variables: 
```
cp .env.defaults .env
```

3. **Go to the [Algolia homepage](https://www.algolia.com/). In the top-right corner of the screen, click the "Login" button.** (If you don't already have an account, you can **create a new one for free [here].(https://www.algolia.com/users/sign_up)**)


4. Once you have signed into the Algolia Dashboard, navigate to the lefthand side of the screen and Select the **API Keys** Link to find the Application ID and Admin API Key. Set the following values in your `.env` file:
```
ALGOLIA_APP_ID=YOUR_APP_ID
ALGOLIA_ADMIN_API_KEY=YOUR_ADMIN_API_KEY
ALGOLIA_INDEX_NAME=YOUR_INDEX_NAME_OF_YOUR_CHOICE
``` 

5. The folder [`utils/upload`](../utils/upload/src/index.js) has a script that will push the JSON data from [`pokedex.json`](../utils/upload/src/pokedex.json) into an Algolia index. From the command line, run the script with:
```
yarn upload
```

6. Back in the Algolia Dashboard, navigate to the lefthand side of the screen and Select the **Indices** Link then from the top of the screen Select the **Indices** Link again. Locate your named index from the dropdown. You should see records with a data structure that matches `pokedex.json` like:

```
{
  "id": 39,
  "name": {
    "english": "Jigglypuff",
    "japanese": "プリン",
    "chinese": "胖丁"
  },
  "type": [
    "Normal",
    "Fairy"
  ],
  "base": {
    "hitPoint": 115,
    "attack": 45,
    "defense": 20,
    "specialAttack": 45,
    "specialDefense": 25,
    "speed": 20
  },
  "objectID": "78159741"
}
```

🎉 Congratulations! You've indexed with Algolia

Cheers to [Jason Sooter](https://twitter.com/functionalstoic) for some great examples in JSON chunking

In our next step of this guide, we will build our interaction model in the **Amazon Developer Portal**, that is the voice components that enable a user to invoke our Alexa skill (the LaunchRequest) and detect our request (the IntentRequest)

[GO TO Step 2 - Alexa Interaction Model](./alexa-console.md)