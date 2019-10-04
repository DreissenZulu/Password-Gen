// Ignore this I'm doing something with this later
// var pastryPrefix = ["Strawberry", "Apple", "Banana", "Blueberry", "Raspberry", "Chocolate Chip",
//     "Cinnamon", "Walnut", "Peacan", "Almond", "Raisin", "Cream Cheese", "Whole Wheat", "Coconut",
//     "Inflatable", "Rubber", "Explosive", "Microwaved", "Inedible", "Petrified", "Ancient", "Chonky",
//     "Half-Eaten", "Illegal"];

// var pastryPart1 = [];

// Define all possible character types as string arrays
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChar = "0123456789";
var specChar = `!"#$%&'()*+,-./:;<=>?@[\]^_{|}~` + "`";

// Define getPass as the text in the read-only text box
var getPass = document.querySelector("#password");

// Slider update function. Displays the value of the slider in the slider label
function updateLength() {
    document.querySelector("#rangeValue").innerHTML = "Password Length: " + document.querySelector("#formControlRange").value;
}

// Set the default value of the range, and also show the default value
document.querySelector("#formControlRange").value = 12;
updateLength();

// onchange updates the HTML when the slider is released. oninput updates as it's held down. Apparently oninput doesn't work on older versions of IE so I used both
document.querySelector("#formControlRange").onchange = updateLength;
document.querySelector("#formControlRange").oninput = updateLength;

// The main event of this page. Generates a password based on parameters set once the Generate button is pressed
document.querySelector("#generate").onclick = function makePassword() {
    // Empty the allChars array
    var allChars = "";
    // Gets the length of the password from the slider
    var passLength = document.querySelector("#formControlRange").value;
    // Empty the previous password, if it exists
    var newPass = "";

    // Check the options selected by the user, and apply the appropriate characters
    if (document.querySelector("#chooseLower").checked) {
        allChars += alphaLower;
    } if (document.querySelector("#chooseUpper").checked) {
        allChars += alphaUpper;
    } if (document.querySelector("#chooseNums").checked) {
        allChars += numChar;
    } if (document.querySelector("#chooseSymb").checked) {
        allChars += specChar;
    }

    // The old version of the conditional below which removed the alert box from the DOM completely.
    // if (allChars == "") {
    //     if (document.querySelector("#alertBox") == undefined) {
    //         alertUser();
    //     }
    //     return;
    // } else if (document.querySelector("#alertBox") != undefined){
    //     document.querySelector("#alertBox").remove();
    // }

    // If no options are selected, show the alert box and end the function.
    if (allChars == "") {
        document.querySelector(".alert-danger").style = "display:block;"
        return;
    }

    // newPass is written randomly one character at a time for the length desired, based on the array of desired characters allChars
    for (var i = 0; i < passLength; i++) {
        newPass = newPass + allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Sends the value of newPass to the textbox for copying
    getPass.innerHTML = newPass;
}

// Create a Bootstrap div with a warning message. Unnecessary since we're hiding the box now.
// function alertUser() {
//     var formEl = document.querySelector("#passOptions").parentElement;
//     var newEl = document.createElement("div");
//     newEl.classList.add("alert", "alert-danger");
//     newEl.innerHTML = "You need at least one character type!";
//     newEl.setAttribute("id", "alertBox");
//     formEl.append(newEl);
// }

// When the Copy button is clicked, sends the password in the text box to the clipboard
function copyClip() {
    getPass.select();
    getPass.setSelectionRange(0, document.querySelector("#formControlRange").value);
    document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copyClip);

// Hides the alert box...
function hideAlert() {
    document.querySelector(".alert-danger").style = "display:none;"
}

// ...Whenever the user picks one of the password options
document.querySelector("#chooseLower").addEventListener("click", hideAlert);
document.querySelector("#chooseUpper").addEventListener("click", hideAlert);
document.querySelector("#chooseNums").addEventListener("click", hideAlert);
document.querySelector("#chooseSymb").addEventListener("click", hideAlert);