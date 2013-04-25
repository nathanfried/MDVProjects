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

var myName2 = {
    
    "name": "Name",
    "subject1": "Subject 1",
    "subject2": "Subject 2",
    "subject3": "Subject 3",
    "Funkshun": function () {
        var totalSubject = this.subject1 + this.subject2 + subject3;
        return totalSubject
    },
    
    
    
}
