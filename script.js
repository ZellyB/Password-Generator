// Assignment code here
var characterlength = 8;
var choiceArr = [];

var specialCharArr = [`!`,`?`,`@`,`#`,`$`,`_`];
var lowerCaseArr = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`];
var upperCaseArr =[`A`,`B`,`C`,`D`,`E`,`F`,`G`,`H`,`I`,`J`,`K`,`L`,`M`,`N`,`O`,`P`,`R`,`S`,`T`,`U`,`V`,`W`,`X`,`Y`,`Z`];
var numbersArr = [`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");
  
  if (correctPrompts) {
    var newpassword = generatePassword();
    passwordText.value = newpassword;
  } else {
      passwordTest.value = "";
  }

}

function generatePassword() {
  var password = ""
  for(var i = 0; i < characterlength; i++) {
      var randomIndex = (math.random() * choiceArr.length);
      password = password + choiceArr[randomIndex];
  }
  return password;

}

function getPrompts(){
    choiceArr = [];

    characterlength = parseInt(prompt("How many characters do you want your password to be? (8-128 characters"));
    if(isNaN(characterlength) || characterlength < 8 || characterlength >128) {
      alert("character length has to be a number, 8-128 digits. Please try again");
      return false;
    }

    if (confirm("would you like lowercase letters in your password?")) {
        choiceArr = choiceArr.concat(lowerCaseArr);
    }
    if (confirm("would you like uppercase letters in your password?")) {
        choiceArr = choiceArr.concat(upperCaseArr);
    }
    if (confirm("would you like special characters in your password?")) {
      choiceArr = choiceArr.concat(specialCharArr);
    }
    if (confirm("would you like numbers in your password?")) {
      choiceArr = choiceArr.concat(numbersArr);
    }
    return true;
  }
