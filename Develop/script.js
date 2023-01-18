// Assignment code here
// user clicks generate password button
  // addEventListener to button
// prompt for user information regarding password preferences
  // prompt for password length
  // confirm character types to include
  // if statement for # of falses
// generate / display password
  // make an array of possible choices for each character type
  // if character type should be included (true), add to array
  // for loop to randomly select from acceptable characters array (loop password length times)
  // display password on page

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("What is your desired password length?");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a password length between 8 and 128 characters.");
    return writePassword();
  }
  // console.log(passwordLength);
  var lowerConfirm = confirm("Include lower case letters?");
  var upperConfirm = confirm("Include upper case letters?");
  var numberConfirm = confirm("Include numbers?");
  var specialConfirm = confirm("Include special characters?");
  // console.log(lowerConfirm);
  // console.log(upperConfirm);
  // console.log(numberConfirm);
  // console.log(specialConfirm);
  if (!lowerConfirm && !upperConfirm && !numberConfirm && !specialConfirm) {
    alert("Please choose at least one character type.");
    return writePassword();
  }
  var characters = [];
  if (lowerConfirm) {
    characters.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
  }
  if (upperConfirm) {
    characters.push('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
  }
  if (numberConfirm) {
    characters.push('1', '2', '3', '4', '5', '6', '7', '8', '9', '0');
  }
  if (specialConfirm) {
    characters.push('!', '@', '#', '$', '%', '^', '&', '*', '(', ')');
  }
  var password = '';
  for (let i = 0; i < passwordLength; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
