# Unit 03 JavaScript Homework: Password Generator
Generates a password based on user-defined parameters.

## Description
A password generator that creates a random password between 8 to 128 characters in length and can consist of a combination of any of the following:
1. Lower Case Letters
2. Upper Case Letters
3. Numbers
4. Special Characters
All of the properties can be user defined and are immediately applied when the Generate button is pressed. When the Copy to Clipboard button is pressed, the password is copied to the user's clipboard.
The generator uses a responsive design and is accessible on any viewport.

## Challenges
This assignment was a good chance to continue practicing using the Bootstrap framework. A good chunk of this assignment was focused on creating a page that looked as good as it functioned. The checkboxes had an unusual alignment issue that I needed to correct, which was fixed with some padding. I wanted to copy most of the formatting from the example screenshot provided, and the result was a very close recreation

The real challenge came from writing the JavaScript code. I thought about what I wanted to achieve in pseudocode to begin. My objective was laid out in a few steps:

1. Define arrays for each character type
2. Make another array based on what the user wants for their password
3. Create a loop that stops when the desired password length is achieved
4. Randomize the new array every loop so it picks a random character
5. Only run the loop if at least one character type is selected
6. Print the password for the user to see
7. Allow the user to copy the password

I started by building the base form of the password generator after I defined my arrays. This version did not accept any user inputs, and was made to test of the loop itself actually worked. Once finished, I then implemented the user inputs. By defining individual if statements I could add onto my array with any combination of characters I needed. This conditional terminates the function prematurely if no parameters are selected, warning the user in HTML. Finally, I passed the password created by the loop to the innerHTML of the text box where the user could see it.

For my generator, I wanted to completely eliminate the use of alerts and prompts, because they suck and I hate them. To do this, I created HTML elements for the parameters on the document itself. The character options were checkboxes and the password length was a slider. I found out that the checkboxes can return a boolean value based on the checked value, which suited my array construction if statements perfectly.

I found out that the base slider does not show the current value selected, which can be hard for the user to use. To fix this, I defined a new function to update the innerHTML of the title to include the current value of the slider. I found online that I could update this in real time by using the oninput method and the onchange method was also included for browser compatibility.