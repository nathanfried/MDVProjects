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
    
    // ADDING ARRAY OF NUMBERS
    var arrayOfNumbers = function (val) {
        var sum = 0
        for (i = 0, a = val.length; i < a; i++) {
            if (val[i]*1 === val[i]) {
                sum += val[i] 
            }
        }
        return sum
    }
    
    // CHANGING DECIMAL PLACEMENT
    var changeDecimal = function (val,numbOfPlaces) {
        return Number(val.toFixed(numbOfPlaces));
    }

    
    
    
    
    // RETURNS
    return {
        
        "phoneNumber": phoneNumber,
        "email": eMail,
        "URL": URL,
        "arrayOfNumbers": arrayOfNumbers,
        "changeDecimal": changeDecimal
    };
    
}


// Function Calls
var myLib = new jsLibrary();


// Adjusted Variables
var myNumber = "419-296-8884";
var myEmail = "freedom28@gmail.com";
var myUrl = "http://www.google.com";
var numberOfNumbers = ["40", 5, "10", 20, "30"];


// String Tests
console.log("There are enough numbers to dial so it should be " + myLib.phoneNumber(myNumber));
console.log("This email should be " + myLib.email(myEmail));
console.log("This URL address should be " + myLib.URL(myUrl));

// Array Tests
console.log("The total of the array numbers is " + myLib.arrayOfNumbers(numberOfNumbers));

// Number Tests
console.log(myLib.changeDecimal(5.86742, 2))
