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


    // RETURNS
    return {
        
        "phoneNumber": phoneNumber,


// Function Calls
var myLib = new jsLibrary();


// Adjusted Variables
var myNumber = "419-296-8884";


// String Tests
console.log("There are enough numbers to dial so it should be " + myLib.phoneNumber(myNumber));
