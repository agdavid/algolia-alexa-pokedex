# algolia-alexa-state-capitals
Algolia powered Alexa skill to teach you and quiz you on US State capitals

**Note:** I am attempting to create this project using ["README Driven Development"](http://tom.preston-werner.com/2010/08/23/readme-driven-development.html) as noted by [Dustin Coates](https://twitter.com/dcoates?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor), and, in turn, recommended to him, by [Vincent Voyer](https://twitter.com/vvoyer) in the post ["Perspectives on Building the Algolia Alexa Adapter"](https://www.talkingtocomputers.com/building-algolia-search-alexa-adapter).

## A small diversion...Developer Setup
If you don't already use Node, get setup the right way:
### Install Node.js "the right way"
There are many ways to get Node.js on your system (brew, setup files...) but the best way to do it is via nvm.

* Remove any system-wide Node.js installation: https://stackoverflow.com/questions/11177954/how-do-i-completely-uninstall-node-js-and-reinstall-from-beginning-mac-os-x
* Install nvm: https://github.com/creationix/nvm#install-script
* Open a new terminal to ensure nvm is installed: `nvm --version`

### Install Yarn "the right way"
* Remove any installation of Yarn: https://stackoverflow.com/questions/42334978/how-do-i-uninstall-yarn
* Install Yarn following this: https://yarnpkg.com/en/docs/install#alternatives-stable

Cheers to [Vincent Voyer](https://twitter.com/vvoyer) for the above method


# Create the Algolia Index

1. Login to your Algolia account or Sign-up for an account [here](https://www.algolia.com/users/sign_up) if you don't have one already (Note: You can get a free [Community](https://www.algolia.com/pricing/) plan)
2. Copy the `.env.defaults` file and name it `.env` for your configuration variables 
```
cp .env.defaults .env
```
3. Navigate to the "API Keys" tab in your Algolia Dashboard to find the Application ID and Admin API Key, then in your `.env` file set the following values:
```
ALGOLIA_APP_ID=YOUR_APP_ID
ALGOLIA_ADMIN_API_KEY=YOUR_ADMIN_API_KEY
ALGOLIA_INDEX_NAME=YOUR_INDEX_NAME_OF_YOUR_CHOICE
``` 
4. Install the node modules:
```
yarn
```
5. The file `upload.js` has a script that will push the data from `state-capitals.json` into an Algolia index. Run the script with:
```
yarn upload
```
If interested, you can read more about the [Algolia Javascript API Client](https://www.algolia.com/doc/api-client/getting-started/install/javascript/), [indexing](https://www.algolia.com/doc/api-client/methods/indexing/), and [settings](https://www.algolia.com/doc/api-client/methods/settings/) for search relevance.

6. Navigate to "Indices" in your Algolia Dashboard and select your index from the dropdown. You should see records with a data structure matching the objects in `state-capitals.json`

🎉 Congratulations! You've indexed with Algolia

Cheers to [Jason Sooter](https://twitter.com/functionalstoic) for some great examples in JSON chunking