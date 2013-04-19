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
    console.log( kids[0] + ", " + kids[1] + ", " + kids[2] + ", and " + kids[3] + " all played with " + toyCowboy + " and " + toyRanger + " during the movie, Toy Story.");
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
            console.log("But if each child only had " + toys + " they were upset, because they wanted both.");
        } else {
            console.log("They didn't have any toy to play with.");
        }
    }
    return 2
}

// Boolean Function
var getGoodTime = function () {
    var goodTime = 30;
    if ((goodTime >= 30 && goodTime <= 50)) {
        return "The children who had more time with the toys, didn't watch the movie as much.";
    } else {
        return "The children who had less time with the toys, watched the movie more.";
    }
}


// String Function
var saySpaceMotto = function() {
    var motto1 = "To inifinity"
    var motto2 = "and beyond!"
    if (motto1 && motto2) {
        return("The children were shouting " + motto1 + " " + motto2 + " by the end of the movie.");
    } else{
        return("The children forgot " + toyRanger + "'s motto was.");
    }
}


// My Functions
toyStory(130);
var totalKids = getPlayTime();
console.log("The total amount of kids that played with the toys was " + totalKids + ".");
var totalToys = getTotalToys(2);
console.log("Each child was able to play with at least " + totalToys + " today.");
var enjoyPlay = getGoodTime();
console.log(enjoyPlay);
var buzzMotto = saySpaceMotto()
console.log(buzzMotto)
