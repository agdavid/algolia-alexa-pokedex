# Create the Lambda Function Using AWS

## Initialize the Lambda Function

1.  **Go to http://aws.amazon.com and sign in to the console.** If you don't already have an account, you will need to create one.  [If you don't have an AWS account, check out this quick walkthrough for setting it up](https://alexa.design/create-aws-account).

2.  **Click "Services" at the top of the screen, and type "Lambda" in the search box.**  You can also find Lambda in the list of services.  It is in the "Compute" section.

3.  **Check your AWS region.** AWS Lambda only works with the Alexa Skills Kit in these regions: US East (N. Virginia), US West (Oregon), Asia Pacific (Tokyo)  and EU (Ireland).  Make sure you choose the region closest to your customers.

4.  **Click the orange "Create function" button.** It should be near the top right of your screen.  (If you don't see this button, it is because you haven't created a Lambda function before.  Click the blue "Get Started" button near the center of your screen.)

5.  There are three boxes labeled "Author from scratch", "Blueprints" and "Serverless Application Repository". **Select the radio button in the box titled  "Author from scratch"**.

6. In Basic information, **set your "Function name"** such as "PokemonLookup" and **set your "Runtime"** to Node.js

7. In Permissions, **in your "Execution role" select "Create a new role from AWS policy templates"**, then **set your "Role name"** such as "LambdaAlexa", and **in "Policy templates" select "Simple microservice permissions"**

8.  **Click the orange "Create function" button.** 

🎉  Congratulations! Your Lambda function has been successfully created. In the next step, we'll push code from the command line upto the Lambda function.

[GO TO Step 4 - Push AWS Lambda Function](./lambda-push.md)


