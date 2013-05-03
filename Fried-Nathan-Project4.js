//alert("JavaScript works!");

// Nathan Fried
// SDI 1304
// Project 4
// Library of Functions

var jsLibrary = function(){
    
    // CHECK PHONE NUMBER
    var phoneNumber = function(val){
        if (val.length === 12) {
            return true
        } else {
            return false
        }
    }
    
        // CHECK EMAIL ADDRESS
    var eMail = function(val){
        if (val.lastIndexOf(".") === -1) {
            return false
        } else {
            return true
        }
    }

        // CHECK URL
    var URL = function(val){
        if (val.indexOf(":") === 4 || 5) {
            return true
        } else {
            return false
        }
    }


    // RETURNS
    return {
        
        "phoneNumber": phoneNumber,
        "email": eMail,
        "URL": URL,
    };
    
}


// Function Calls
var myLib = new jsLibrary();


// Adjusted Variables
var myNumber = "419-296-8884";
var myEmail = "freedom28@gmail.com";
var myUrl = "http://www.google.com";


// String Tests
console.log("There are enough numbers to dial so it should be " + myLib.phoneNumber(myNumber));
console.log("This email should be " + myLib.email(myEmail));
console.log("This URL address should be " + myLib.URL(myUrl));





