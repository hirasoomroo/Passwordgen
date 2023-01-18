// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passwordLength;
var checkUpper;
var checkNumber;
var specialCheck;

//Function used to determine the length of the password
function determineLength(){
  passwordLength = prompt("Choose between 8-128 characters to generate your random password): ");

    if (passwordLength<8){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else if (passwordLength>128){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else if (isNaN(passwordLength)){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else{
    alert("There will be 3 questions on the next screen, please choose yes or no to the following.\nPlease note: If you choose 'No' for your answer, your password will only contain lowercase letters.");
    }
    return passwordLength;
}

//Function whether to include uppercase in password
function determineUppercase(){
 checkUpper= prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
   checkUpper = checkUpper.toLowerCase();

    if (checkUpper === null || checkUpper === ""){
      alert("Must answer Yes or No");
      determineUppercase();

    }else if (checkUpper === "yes" || checkUpper ==="y"){
      checkUpper = true;
      return checkUpper;

    }else if (checkUpper=== "no" || checkUpper ==="n"){
      checkUpper = false;
      return checkUpper;
    
    }else {
      alert("Please answer Yes or No");
      determineUppercase();
    }
    return checkUpper;
}

//Function to determine numbers in the password
function determineNumbers(){
  checkNumber = prompt("Do you want to include numbers in your password? This will indicate a stronger password. \n(Yes or No)");
   checkNumber = checkNumber.toLowerCase();

    if (checkNumber === null || checkNumber === ""){
      alert("Must answer Yes or No");
      determineNumbers();

    }else if (checkNumber === "yes" || checkNumber ==="y"){
      checkNumber = true;
      return checkNumber;

    }else if (checkNumber === "no" || checkNumber==="n"){
      checkNumber = false;
      return checkNumber;
    
    }else {
      alert("Must answer Yes or No to continue");
      determineNumbers();
    }
    return checkNumber;
}

//Function to ask user if special characters should be included
function determineSpecial(){
  specialCheck = prompt("Do you want to include special characters in your password? \n(Yes or No)");
    specialCheck = specialCheck.toLowerCase();

    if (specialCheck === null || specialCheck === ""){
      alert("Must answer Yes or No to continue");
      determineSpecial();

    }else if (specialCheck === "yes" || specialCheck ==="y"){
      specialCheck = true;
      return specialCheck;

    }else if (specialCheck === "no" || specialCheck ==="n"){
      specialCheck = false;
      return specialCheck;
    
    }else {
      alert("Must answer Yes or No to continue");
      determineSpecial();
    }
    return specialCheck;
}

 //Function to generate random password with characters and numbers.
function generatePassword(){
  determineLength();
  console.log(passwordLength);
  determineUppercase();
  console.log(checkUpper);
  determineNumbers();
  console.log(checkNumber);
  determineSpecial();
  console.log(specialCheck);

var characters = lowercaseChar;
var password = "";
if (checkUpper && checkNumber && specialCheck){
  characters += uppercaseChar + numberChar + specialChar;

}else if (checkUpper && checkNumber){
  characters += uppercaseChar + numberChar;

}else if (checkNumber && specialCheck){
  characters += numberChar + specialChar;

}else if (checkUpper && specialCheck){
  characters += uppercaseChar + specialChar;

}else if (checkUpper){
  characters += uppercaseChar;

}else if(checkNumber){
  characters += numberChar;

}else if (specialCheck){
  characters += specialChar;

}else{
  characters === lowercaseChar;
}

  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
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