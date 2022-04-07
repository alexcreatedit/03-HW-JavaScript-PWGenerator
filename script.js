// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays created for characters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var Special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var passwordLength;
var characters = [];
var passwordBlank = [];

// function created to give generatedpassword criteria

function generatePassword() {

  // 1. alert the user for the password criteria

  window.alert("Please select criteria to include");

  // a. password length between 8 - 128
  // b. lowercase, uppercase, numbers, Special Characters 

  passwordLength = prompt("Please choose number of characters. 8-128");
  if (!passwordLength) {
    alert("Required value");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128");
    console.log("Password length " + passwordLength);

  } else {
    getUserInputs()
  
  }

  // 2. validate the user input.
  // 3. generate password from input.
  // 4. display password. 
  }
function getUserInputs() {
  var password = "";
  var confirmlowerCase = confirm("Include Lowercase?");
  var confirmupperCase = confirm("Include Uppercase?");
  var confirmNumbers = confirm("Include Numbers?");
  var confirmSpecial = confirm("Include Special Characters?");
  window.alert("Are you sure you want to include these characters?");

  if (!confirmlowerCase && !confirmupperCase && !confirmNumbers && !confirmSpecial) {
    alert("Required at least one value");
  }

  else {
    if (confirmlowerCase) {
      characters = characters.concat(lowerCase);
    }
    if (confirmupperCase) {
      characters = characters.concat(upperCase);
    }
    if (confirmNumbers) {
      characters = characters.concat(Numbers);
    }
    if (confirmSpecial) {
      characters = characters.concat(Special);
    }
  }
  console.log(characters);
  console.log(confirmlowerCase);
  console.log(confirmupperCase);
  console.log(confirmNumbers);
  console.log(confirmSpecial);

  for (var i = 0; i < passwordLength; i++) {
    var allChoices = characters[Math.floor(Math.random() * characters.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  var password = passwordBlank.join("");
  console.log("Your Pasword is: " + password);
  console.log(password)
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
