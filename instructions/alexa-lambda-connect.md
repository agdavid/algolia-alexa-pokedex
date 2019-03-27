## Connecting the Alexa Skill to the Lambda Function

1.  **Return to the [Alexa Developer Console](https://developer.amazon.com/alexa/console/ask) and select your skill from the list.** You may still have a browser tab open if you started at the beginning of this tutorial.

2.  While on the **Build** tab, select the **Endpoint** tab on the left side navigation panel.

3.  You should see the Alexa Skill ID as "Your Skill ID". **Copy the Amazon Skill ID value for this Skill** by clicking the Copy to Clipboard command; we will use this Amazon Skill ID in the Lambda Management Console.

4.  **Go back to the [Lambda console](https://console.aws.amazon.com/lambda/home)** and on the left hand navigation panel, select **Functions**, and then select your Lambda function.

5.  In the lefthand menu Add triggers, **select "Alexa Skills Kit"**.

6.  Paste your Skill's ID into the textbox provided for **Skill ID** under Configure triggers.

7.  Click the **Add** button at the bottom of the screen, then the **Save** button at the top right of your screen.

8.  You should see the Amazon Resource Name (ARN) for this function in the top right corner of the page.  (You may need to scroll back up.) **Copy the ARN value for this Lambda function** by clicking the small copy button; we will use this ARN in the Alexa Developer Console.

9.  **Go back to the [Alexa Developer Console](https://developer.amazon.com/alexa/console/ask) and select your skill from the list.** You may still have a browser tab open if you started at the beginning of this tutorial.

10.  While on the **Build** tab, select the **Endpoint** tab on the left side navigation panel.

11.  **Select the "AWS Lambda ARN" option for your endpoint.** You have the ability to host your code anywhere that you would like, but for the purposes of simplicity and frugality, we are using AWS Lambda.

12.  Paste your Lambda's ARN (Amazon Resource Name) into the textbox provided for **Default Region**.

13. Click the **Save Endpoints** button at the top of the main panel.

If your interaction model builds successfully, proceed to the next step. If not, you should see an error. Try to resolve the errors before moving on to testing.

[GO TO Step 6 - Testing](./alexa-test.md)