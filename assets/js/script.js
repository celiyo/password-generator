// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

// Function to prompt user for password options
function getPasswordOptions() {
  var inputPasswordLength;
  while (true) {
    inputPasswordLength = prompt('Enter the password length.');
    if (inputPasswordLength === null) {
      return;
    }
    if (inputPasswordLength >= 10 && inputPasswordLength <= 64) {
      break;
    }
    alert("The password's length must be between 10 and 64 characters long.");
  }

  var inputPasswordLowercase;
  var inputPasswordUppercase;
  var inputPasswordNumeric;
  var inputPasswordSpecial;

  while (true) {
    inputPasswordLowercase = confirm('Should the password contain lowercase characters?');
    inputPasswordUppercase = confirm('Should the password contain uppercase characters?');
    inputPasswordNumeric = confirm('Should the password contain numeric characters?');
    inputPasswordSpecial = confirm('Should the password contain special characters?');
    if (
      inputPasswordLowercase === true ||
      inputPasswordUppercase === true ||
      inputPasswordNumeric === true ||
      inputPasswordSpecial === true
    ) {
      break;
    }
    alert('The password must contain at least one character type');
  }

  return [
    inputPasswordLength,
    inputPasswordLowercase,
    inputPasswordUppercase,
    inputPasswordNumeric,
    inputPasswordSpecial,
  ];
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomEl = arr[Math.floor(Math.random() * arr.length)];
  return randomEl;
}

// Function to generate password with user input
function generatePassword() {
  var data = getPasswordOptions();
  var initialPassword = '';
  if (data) {
    var length = parseInt(data[0]);

    for (var i = 0; i <= length; i++) {
      if (data[1] === true) {
        initialPassword += getRandom(lowerCasedCharacters);
      }
      if (data[2] === true) {
        initialPassword += getRandom(upperCasedCharacters);
      }
      if (data[3] === true) {
        initialPassword += getRandom(numericCharacters);
      }
      if (data[4] === true) {
        initialPassword += getRandom(specialCharacters);
      }
    }
    var finalPassword = initialPassword.slice(0, length);
    return finalPassword;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  if (password) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
