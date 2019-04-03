## Connecting the Alexa Skill to the Lambda Function

1.  **Return to the [Alexa Developer Console](https://developer.amazon.com/alexa/console/ask) and select your skill from the list.** You may still have a browser tab open if you started at the beginning of this tutorial.

2.  **Select the "AWS Lambda ARN" option for your endpoint.** You have the ability to host your code anywhere that you would like, but for the purposes of simplicity and frugality, we are using AWS Lambda.

3.  You should see the Alexa Skill ID as "Your Skill ID". **Copy the Amazon Skill ID value for this Skill** by clicking the Copy to Clipboard command; we will use this Amazon Skill ID in the Lambda Management Console.

4.  **Go back to the [Lambda console](https://console.aws.amazon.com/lambda/home)** and on the left hand navigation panel, select **Functions**, and then select your Lambda function.

5.  In the lefthand menu Add triggers, **select "Alexa Skills Kit"**.

6.  Paste your Skill's ID into the textbox provided for **Skill ID** under Configure triggers.

7.  Click the **Add** button at the bottom of the screen, then the **Save** button at the top right of your screen.

8. Click the **Functions** link in the upper right hand corner, then **select your Lambda function** again. It's a helpful way to get a needed view.

9. Scroll down to **Environment variables**. Return to the Algolia Dashboard, navigate to the lefthand side of the screen and Select the **API keys** Link to find the Application ID and Search API Key. Set the following values:
```
ALGOLIA_APP_ID=YOUR_APP_ID
ALGOLIA_SEARCH_API_KEY=YOUR_SEARCH_API_KEY
ALGOLIA_INDEX_NAME=YOUR_INDEX_NAME_OF_YOUR_CHOICE
``` 

10. Click the **Save** button at the top right of your screen.

11.  You should see the Amazon Resource Name (ARN) for this function in the top right corner of the page.  (You may need to scroll back up.) **Copy the ARN value for this Lambda function** by clicking the small copy button; we will use this ARN in the Alexa Developer Console.

12.  **Go back to the [Alexa Developer Console](https://developer.amazon.com/alexa/console/ask) and select your skill from the list.** You may still have a browser tab open if you started at the beginning of this tutorial.

13.  While on the **Build** tab, select the **Endpoint** tab on the left side navigation panel.

14.  Paste your Lambda's ARN into the textbox provided for **Default Region**.

15. Click the **Save Endpoints** button at the top of the main panel.

If your interaction model builds successfully, proceed to the next step. If not, you should see an error. Try to resolve the errors before moving on to testing.

[GO TO Step 6 - Testing](./alexa-test.md)