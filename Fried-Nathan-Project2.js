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
        console.log("The proposal for " + toys + " kids to have one at a time did not go well.");
        toys = toys - 1
        
        if (toys === toys) {
            console.log("If each child only had " + toys + ", they were upset, because they wanted both.");
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
        return "The children, who had more time with the toys, didn't watch the movie as much.";
    } else {
        return "The children, who had less time with the toys, watched the movie more.";
    }
}


// String Function
var saySpaceMotto = function() {
    var motto1 = "\"To inifinity"
    var motto2 = "and beyond!\""
    if (motto1 && motto2) {
        return("The whole time the children were shouting " + motto1 + " " + motto2);
    } else{
        return("The children forgot what " + toyRanger + "'s motto was.");
    }
}



// My Functions
toyStory(130);
var totalKids = getPlayTime();
console.log("With " + totalKids + " brats wanting both toys, they needed to learn how to share.");
var totalToys = getTotalToys(2);
console.log("So each spoiled brat was able to play with at least " + totalToys + " today.");
var enjoyPlay = getGoodTime();
console.log(enjoyPlay);
var buzzMotto = saySpaceMotto();
console.log(buzzMotto)


// Finish
<<<<<<< HEAD
console.log("I'm ready to space out. I'm sure " + toyCowboy + " and " + toyRanger + " would agree with me!")
=======
console.log("I'm ready to space out. I'm sure " + toyCowboy + " and " + toyRanger + " would agree with me!")
>>>>>>> f3e8a80029ceecbc3144a3e00fd8ee9970ae0a9e
