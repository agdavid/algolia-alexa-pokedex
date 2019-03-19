
# Create the Algolia Index

In this section you will utilize the [Algolia JavaScript API client](https://www.algolia.com/doc/api-client/getting-started/install/javascript/) to push JSON data to a searchable Algolia index.

1. Login to your Algolia account or Sign-up for an account [here](https://www.algolia.com/users/sign_up) if you don't have one already (Note: You can get a free [Community](https://www.algolia.com/pricing/) plan)

2. Copy the `.env.defaults` file and name it `.env` for your configuration variables: 
```
cp .env.defaults .env
```

3. Navigate to the **"API Keys"** tab in your Algolia Dashboard to find the Application ID and Admin API Key, then in your `.env` file set the following values:
```
ALGOLIA_APP_ID=YOUR_APP_ID
ALGOLIA_ADMIN_API_KEY=YOUR_ADMIN_API_KEY
ALGOLIA_INDEX_NAME=YOUR_INDEX_NAME_OF_YOUR_CHOICE
``` 

4. Install the node modules:
```
yarn
```

5. The folder [`utils/upload`](../utils/upload/src/index.js) has a script that will push the data from [`pokedex.json`](../utils/upload/src/pokedex.json) into an Algolia index. Run the script with:
```
yarn upload
```

6. Navigate to **"Indices"** in your Algolia Dashboard and select your named index from the dropdown. You should see records with a data structure that matches `pokedex.json` like:

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

[➡️ Step 2 - Alexa Developer Console](./alexa-console.md)