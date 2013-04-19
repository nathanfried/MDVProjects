//alert("JavaScript works!");

// Nathan Fried
// SDI 1304
// Project 2


// My Variables
var toyCowboy = "Woody";
var toyRanger = "Buzz";
var numberOfMinutes = [ 10, 20, 30, 40 ];
var kids = [ "Bobby", "Jimmy", "Kate", "Sarah" ];


// Procedure
var toyStory = function () {
    console.log( kids[0] + ", " + kids[1] + ", " + kids[2] + ", and " + kids[3] + " all played with " + toyCowboy + " and " + toyRanger + ".");
}


// Array Function
var getPlayTime = function () {
    for (var i=0; i < 4; i++) {
    console.log( kids[i] + " played with " + toyCowboy + " and " + toyRanger + " for " + numberOfMinutes[i] + " minutes.");
    }
    return i;
}


// Number Function
var getTotalToys = function (toys) {
    while (toys >= 2) {
        console.log("As long as each child had " + toys + " toys, they were able to act out Toy Story.");
        toys = toys - 1
        
        if (toys === toys) {
            console.log("But if each child only had " + toys + " they were upset, and could not act out the movie.");
        } else {
            console.log("They began to get upset.");
        }
    }
    return 2
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
toyStory(130);
var totalKids = getPlayTime();
console.log("The total amount of kids that played with the toys was " + totalKids + ".");
var totalToys = getTotalToys(2);
console.log("Each child was able to play with " + totalToys + " today.");
var enjoyPlay = getGoodTime();
console.log(enjoyPlay);
