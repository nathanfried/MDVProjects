//alert("JavaScript works!");

// Nathan Fried
// SDI 1304
// Project 2


// My Variables
var toyCowboy = "Woody";
var toyRanger = "Buzz";
var numberOfMinutes = [ 10, 15, 20, 12 ];
var kids = [ "Bobby", "Jimmy", "Kate", "Sarah" ];

// Array Function
for (var i=0; i < 4; i++) {
    console.log( kids[i] + " played with " + toyCowboy + " and " + toyRanger + " for " + numberOfMinutes[i] + " minutes.")
}

// Number Function
var getTimesPickedUp = function (name, b, w ) {
    var pickedUp = b + w;
    console.log(name + " picked up Buzz " + b + " times and Woody " + w + " times, making it a total of " + pickedUp + ".")
}

//Boolean Function


// My Functions
getPlayTime();
getTimesPickedUp("Bobby", 13, 18);
getTimesPickedUp("Jimmy", 23, 7);
getTimesPickedUp("Kate", 30, 14);
getTimesPickedUp("Sarah", 4, 9);

