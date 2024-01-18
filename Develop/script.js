// Assignment code here

//adding the different numbers, letter and special characters that can be used for password approval

var lowerCaseAlphaOptions = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseAlphaOptions = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','S','Y','Z'];
var specialSetOptions = ['?','<','!','@','#','$','^','&','*','(',')','-','+','='];
var numbersOptions = ['0','1','2','3','4','5','6','7','8','9'];
var selectedArray =[];
var passwordLength = 8

//added math floor to keep numbers away from zero https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
function generatePassword() {
  var password = ""
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random()*(selectedArray.length));
    password = password + selectedArray[randomIndex]
  }
  return password;

}

//prompts for password criteria
function prompts() {

  selectedArray= [];

  passwordlength = parseInt(prompt("password needs to be between 8 - 128 characters"));

  // if statement from MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
//alerting if the password is long enough
  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Password is required to be between 8 - 128 characters");
    return null
  }

  if (confirm("DO you need lower case letters?")) {
    selectedArray = selectedArray.concat(lowerCaseAlphaOptions);
  }

  if (confirm("DO you need capitalized letters?")) {
    selectedArray = selectedArray.concat(upperCaseAlphaOptions);
  }

  if (confirm("DO you need numbers?")) {
    selectedArray = selectedArray.concat(numbersOptions);
  }

  if (confirm("DO you need special characters?")) {
    selectedArray = selectedArray.concat(specialSetOptions);
  }
  return true
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var getprompts = prompts();

  if (getprompts) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
