//alert("JavaScript works!");

// Nathan Fried
// SDI 1304
// Project 3

var myName = {
    
    "name":     "Nathan",
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

var profName = {
    
    "name": "Lee",
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
