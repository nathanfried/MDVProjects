//alert("JavaScript works!");

// Nathan Fried
// SDI 1304
// Project 3

var problemName = {
    
    "problem1": "repository",
    "problem2": "Github",
    "problem3": "Terminal",
    "overallProblem": function () { // Method Procedure
        var totalProblem = this.problem1 + this.problem2 + this.problem3;
    },
    
    "setProblem": function (newProblem) { // Method Mutator
        
        this.problem1 = newProblem
        
    },
    
};

var solutionName = {
    
    "solution1": "git merge",
    "solution2": "git checkout",
    "solution3": "git add file",
    "solution4": 5,
    "Fixer": function (total, files) { // Method Function
        if (total > 3) {
            files = files - 0;
        } else {
            files = files - 2;
        }
        return files
    },
}

var timeSpent = {
    
    "hardTime" : 4,
    "fixTime"  : 1,
    "workTime" : 6,
    "overallTime": function () { // Method Accessor
        var totalTime = this.hardTime + this.fixTime + this.workTime;
        return totalTime
    },
};

// Method Procedure
console.log(characterInfo.characters[0].characterFirstName + " " + characterInfo.characters[0].characterLastName + " was having an issue with his " + problemName.problem1 + ".");
console.log("As " + characterInfo.characters[0].characterFirstName + " started his third project, he thought he had a problem with his " + problemName.problem2 + ".");
console.log(characterInfo.characters[0].characterFirstName + " explained what was being typed out on " + problemName.problem3 + ".");

// JSON Data
console.log("There seemed to be an error that said " + errorInfo.errors[0].error1 + ".");
console.log("There was another error that mentioned " + errorInfo.errors[1].error2 + ".");
console.log("For some reason the files were " + errorInfo.errors[2].error3 + ".");
console.log("He sought advice from his professor, " + characterInfo.characters[1].characterFirstName + " " + characterInfo.characters[1].characterLastName + ".");

// Method Function
console.log(characterInfo.characters[1].characterFirstName + " recommended to type " + solutionName.solution1 + ".");
console.log(characterInfo.characters[1].characterFirstName + " then suggested trying " + solutionName.solution2 + ".");
console.log("After some more research " + characterInfo.characters[1].characterFirstName + " then suggested " + solutionName.solution3 + ".");
var getSolution = solutionName.Fixer(1, 5);
console.log("The result was " + getSolution + ".");
var getSolution = solutionName.Fixer(5, 5);
console.log("The result was " + getSolution + ".");

// Method Mutator
problemName.setProblem("missing file.")
console.log("What the real problem was, was a " + problemName.problem1);

// Method Accessor
console.log("The amount of time that kicked " + characterInfo.characters[0].characterFirstName + "s butt was " + timeSpent.hardTime + " hours.");
console.log("However, with " + characterInfo.characters[1].characterFirstName + "'s help, the time to fix the problem only took " + timeSpent.fixTime +" hour.");
console.log(characterInfo.characters[0].characterFirstName + " only needed to work on the project for " + timeSpent.workTime + " hours.");
var getTimeSpent = timeSpent.overallTime()
console.log("Therefore, the overall time spent was " + getTimeSpent + " hours.");

