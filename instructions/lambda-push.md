
# Push Your Lambda Function

1. **Install the AWS CLI** on macOS by following **[this AWS guide](https://docs.aws.amazon.com/cli/latest/userguide/install-macos.html#awscli-install-osx-pip)**

2.  **Go to http://aws.amazon.com and sign in to the console.** 

3.  **Click "Services" at the top of the screen, and type "IAM" in the search box.**  You can also find IAM in the list of services.  It is in the "Security, Identity, & Compliance" section.

4. On the left hand navigation panel, select **Users**, and **click the blue "Add user" button.**

5. Give your new IAM user a **User Name** such as "alexaskill"

6. For Access type **select the radio button for "Programmatic access"**.

7.  **Click the blue "Next: Permissions" button.**

8.  There are three boxes labeled "Add user to group", "Copy permissions from existing user" and "Attach existing policies directly". **Select "Attach existing policies directly"** then **search and select "AWSLambdaFullAccess"**. 

9.  Then click through a few screens. **Click the blue "Next: Tags" button and then "Next: Review" button and then "Create user" button.**

10. Configure the AWS console user:
```bash
$ aws configure
```

11. When prompted, **copy-and-paste the "Access key ID" and the "Secret access key" from the AWS console**. Then **leave the region as default and JSON as default output**.

12. Open the file [`publish.sh`](../publish.sh) and make sure that in **line 3 you replace "PokemonLookup" with the name of your Lambda function**. This uploads your `index.js` file and `node_modules` througha zip file to the named Lambda function.

13. **Return to the [Lambda console](https://console.aws.amazon.com/lambda/hom)** and on the left hand navigation panel, select **Functions**, and you should see the **"Last modified"** column of your function updated recently.

🎉 Congratulations! You've pushed a Lambda function from the CLI

In our next step of this guide, we will pull everything together by testing your Alexa skill.

[GO TO Step 5 - Testing](./alexa-test
.md)

