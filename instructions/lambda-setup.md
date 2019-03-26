# Create the Lambda Function Using AWS

1.  **Go to http://aws.amazon.com and sign in to the console.** If you don't already have an account, you will need to create one.  [If you don't have an AWS account, check out this quick walkthrough for setting it up](https://alexa.design/create-aws-account).

2.  **Click "Services" at the top of the screen, and type "Lambda" in the search box.**  You can also find Lambda in the list of services.  It is in the "Compute" section.

3.  **Check your AWS region.** AWS Lambda only works with the Alexa Skills Kit in these regions: US East (N. Virginia), US West (Oregon), Asia Pacific (Tokyo)  and EU (Ireland).  Make sure you choose the region closest to your customers.

4.  **Click the orange "Create function" button.** It should be near the top right of your screen.  (If you don't see this button, it is because you haven't created a Lambda function before.  Click the blue "Get Started" button near the center of your screen.)

5.  There are three boxes labeled "Author from scratch", "Blueprints" and "Serverless Application Repository". **Select the radio button in the box titled  "Author from scratch"**.

6. In Basic information, **set your "Function name"** such as "PokemonLookup" and **set your "Runtime"** to Node.js

7. In Permissions, **in your "Execution role" select "Create a new role from AWS policy templates"**, then **set your "Role name"** such as "LambdaAlexa", and **in "Policy templates" select "Simple microservice permissions"**

8.  **Click the orange "Create function" button.** 

9. In the lefthand menu Add triggers, **select "Alexa Skills Kit"**.

10. You should see the Amazon Resource Name (ARN) for this function in the top right corner of the page.  (You may need to scroll back up.) **Copy the ARN value for this Lambda function** by clicking the small copy button; we will use this ARN in the Alexa Developer Console.

11. **Go back to the [Amazon Developer Portal](https://developer.amazon.com/alexa/console/ask) and select your skill from the list.** You may still have a browser tab open if you started at the beginning of this tutorial.

12. While on the **Build** tab, select the **Endpoint** tab on the left side navigation panel.

13.  **Select the "AWS Lambda ARN" option for your endpoint.** You have the ability to host your code anywhere that you would like, but for the purposes of simplicity and frugality, we are using AWS Lambda.

14.  Paste your Lambda's ARN (Amazon Resource Name) into the textbox provided for **Default Region**.

15. Click the **Save Endpoints** button at the top of the main panel.

16. Still on the Endpoint tab, you should see the Alexa Skill ID as "Your Skill ID". **Copy the Amazon Skill ID value for this Skill** by clicking the Copy to Clipboard command; we will use this Amazon Skill ID in the Lambda Management Console.

17. **Go back to the [Lambda Management Console](https://console.aws.amazon.com/lambda/home) and select your function from the list.** You may still have a browser tab open if you started at the beginning of this tutorial.

18. Paste your Skill's ID into the textbox provided for **Skill ID** under Configure triggers.

19. Click the **Add** button at the bottom of the screen, then the **Save** button at the top right of your screen.

[GO TO Step 4 - Push AWS Lambda Function](./lambda-push.md)


