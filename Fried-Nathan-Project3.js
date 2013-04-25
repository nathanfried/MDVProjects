//alert("JavaScript works!");

// Nathan Fried
// SDI 1304
// Project 3

var problemName = {
    
    "problem1": "repository",
    "problem2": "Github",
    "problem3": "Terminal",
    "solution": function () { // Method Procedure
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
    "Funkshun": function (result, files) { // Method Function
        if (totalFiles > 0) {
            files = files - 3
        } else {
            files = files - 1
        }
        return files
    },
}
console.log(characterInfo.characters[0].characterFirstName + " " + characterInfo.characters[0].characterLastName + " was having an issue with his " + problemName.problem2 + ".");
console.log("He sought advice from his professor, " + characterInfo.characters[1].characterFirstName + " " + characterInfo.characters[1].characterLastName + ".");
console.log("As " + characterInfo.characters[0].characterFirstName + " started his third project, he thought he had a problem with his " + problemName.problem1 + ".");
console.log("There seemed to be an error that said " + errorInfo.errors[0].error1 + ".");
console.log(characterInfo.characters[1].characterFirstName + " recommended to type " + solutionName.solution1 + ".");
console.log(characterInfo.characters[0].characterFirstName + " then noticed there was something wrong with " + problemName.problem2 + ".");

