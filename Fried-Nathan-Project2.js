//alert("JavaScript works!");

// Nathan Fried
// SDI 1304
// Project 2


// My Variables
var toyCowboy = "Woody";
var toyRanger = "Buzz";
var numberOfMinutes = [ 10, 20, 30, 40 ];
var kids = [ "Bobby", "Jimmy", "Kate", "Sarah" ];


// Array Function
var getPlayTime = function () {
    for (var i=0; i < 4; i++) {
    console.log( kids[i] + " played with " + toyCowboy + " and " + toyRanger + " for " + numberOfMinutes[i] + " minutes.");
    }
}


// Number Function
var getTimesPickedUp = function ( b, w ) {
    var pickedUp = b + w;
    return pickedUp
}


// Boolean Function
var getGoodTime = function () {
    var goodTime = 30;
    if ((goodTime >= 30 && goodTime <= 50)) {
        return "The children who had more time with the toys, enjoyed their playtime.";
    } else {
        return "The children who had less time with the toys, enjoyed playtime more.";
    }
}


// String Function





// My Functions
getPlayTime();
var myReturn = getTimesPickedUp( 20, 30 );
console.log("The average amount of times " + toyCowboy + " and " + toyRanger + " were held was " + myReturn + ".");
var myReturn = getGoodTime();
console.log(myReturn)
