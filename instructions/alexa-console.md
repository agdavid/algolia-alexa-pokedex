# Create the Alexa Skill Interaction Model

1.  **Go to the [Amazon Developer Portal](http://developer.amazon.com/alexa).  In the top-right corner of the screen, click the "Sign In" button.**
(If you don't already have an account, you will be able to create a new one for free.)

2.  Once you have signed in, move your mouse over the **Your Alexa Consoles** text at the top of the screen and Select the **Skills** Link.

3.  From the **Alexa Skills Console** select the **Create Skill** button near the top-right of the list of your Alexa Skills.

4. Give your new skill a **Name**, such as "Pokemon Lookup" This is the name that your users will refer to.

5. Keep the **Custom** model selected, keep the **Provision your own** hosting method selected, and select the **Create Skill** button at the top right.

6. Keep the **Start from scratch** template selected, and select the **Choose** button at the top right.

7. On the left hand navigation panel, select the **JSON Editor** tab under **Interaction Model**. In the textfield provided, replace any existing code with the code provided in the [Interaction Model](../speechAssets/interactionModel.json).  Click **Save Model**.

8. If you want to change the skill invocation name, select the **Invocation** tab. Enter a **Skill Invocation Name**. This is the name that your users will need to say to start your skill. For example, if "pokemon lookup", your users will need to say "Alexa, open pokemon lookup."  Click **Save Model**.

9. Click **Build Model**.

	**Note:** You should notice that **Intents** and **Slot Types** will auto populate based on the JSON Interaction Model that you have now applied to your skill. Feel free to explore the changes here, to learn about **Intents**, **Slots**, and **Utterances** open the Alexa [technical documentation in a new tab](https://developer.amazon.com/docs/custom-skills/create-intents-utterances-and-slots.html).

10. **Optional:** Select an intent by expanding the **Intents** from the left side navigation panel. Add some more sample utterances for your newly generated intents. Think of all the different ways that a user could request to make a specific intent happen. A few examples are provided. Be sure to click **Save Model** and **Build Model** after you're done making changes here.

11. If your interaction model builds successfully, proceed to the next step. If not, you should see an error. Try to resolve the errors.

In our next step of this guide, we will be creating our Lambda function in the AWS developer console, but keep this browser tab open, because we will be returning here again.

[GO TO Step 3 - AWS Lambda Function](./lambda-function.md)