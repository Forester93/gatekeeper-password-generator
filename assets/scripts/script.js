// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // alert('Your password is' + password +'\nYou can copy it from the textbox on this page.');
  var passwordText = document.querySelector("#password");
  // Write the password to the textbox in the page.
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Declaring the generatePassword function

function generatePassword(){
  ///////////////////////////////////
 //Get required length
 function getLength(){
   //Get length
   let length=prompt('Please enter a natural number between 8 and 128 inclusive:','8');
   // Validate length
   if(Number.isInteger(parseInt(length)) && length>=8 && length<=128) {
     return parseInt(length);
    }else {
      //Try again
      alert('Incorrect Value Entered. Please try again');
      return getLength();
    }
 }
 let passwordLength=getLength();
 ///////////////////////////////////
 //Get password criteria and create password pool
 function createPasswordPool(){
   // define a pool of character to create the password from
   let pool=[];
   //lower case criterion
    function hasLowerCase(){
        //Do you want lower case?
        if(confirm('Do you want your password to contain lower case characters?')){pool.push(...'abcdefghijklmnopqrstuvwxyz'.split(''))}
    }
    hasLowerCase();
    //upper case criterion
    function hasUpperCase(){
        //Do you want upper case?
        if(confirm('Do you want your password to contain upper case characters?')){pool.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''))};
    }
    hasUpperCase();
    //numerics criterion
    function hasNumerics(){
      //Do you want numerics?
      if(confirm('Do you want your password to contain numerics?')){pool.push(...'0123456789'.split(''))};
    }
    hasNumerics();
    //special characters criterion   
    function hasSpecialCharacters(){
      if(confirm('Do you want your password to contain special chatacters (!,@,#,$,%,^,&,*,(,),_,+,=,-)?')){pool.push(...'!@#$%^&*()_+=-'.split(''))}
    }
    hasSpecialCharacters();
    //check whether no criteria were selected at all
    while(pool.length==0){
      alert('You need to accept at least one criterion for the password. Please try again');
      hasLowerCase();
      hasUpperCase();
      hasNumerics();
      hasSpecialCharacters();
    }
    return pool;


}

let passwordPool=createPasswordPool();
let password='';
//create password;
for(let i=0;i<passwordLength;i++){
  password += passwordPool[Math.floor(Math.random()*(passwordPool.length))];
}
return password;

}