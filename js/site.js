//get starting values from the screen
//Controller Function
function getUserString() {
    //Get the user's input

    let userString = document.getElementById("userString").value
    //Reverse the user's input - separate function

    let revString = reverseString(userString);

    //Compare original input and reversed input - separate function
    let palindrome = compareStrings(userString, revString);

    //Output Result - separate function
    displayData(palindrome)

}

function reverseString(userString) {
    //This is Rewind
    let firstLetter = userString.length - 1
    let lastLetter = 0

    let revString = ""

    for (let i = firstLetter; i >= lastLetter; i--) {

        revString = revString + userString[i]
    }

    return revString
};

function compareStrings(userString, revString) {
    //This is the work part
    //A != a
    //Normalize the case
    //Extra credit - "A man, a plan, a canal; Panama" - is a palindrome when the spaces and special character are removed
    //RegEx is used for this - Google is your friend (regular expression. use a generator)

    let normalUserString = userString.toLowerCase();
    let normalRevString = revString.toLowercase();

    let returnedUserIn = "You entered " + userString;
    let returnedRevString = "The reverse " + revString;
    let Winner = "That's a palindrome!";
    let Loser = "Great effort - try again!";

    if (normalUserString === normalRevString) {
        return palindrome = returnedUserIn, returnedRevString, Winner;
    } else if (normalUserString !== normalRevString) {
        return palindrome = returnedUserIn, returnedRevString, Loser;
    }
};

function displaydata(palindrome) {
    //We want to output three things
    //1. The original input
    //2. The reversed input
    //3. was it a palindrome

    let output = document.getElementById("Results");

    output.innerHTML = palindrome;

}