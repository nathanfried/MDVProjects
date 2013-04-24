//alert("JavaScript works!");

// Nathan Fried
// SDI 1304
// Project 3

var myName = {
    
    "name": "Name",
    "subject1": "Subject 1",
    "subject2": "Subject 2",
    "subject3": "Subject 3",
    "Funkshun": function () { //Method Accessor
        var totalSubject = this.subject1 + this.subject2 + this.subject3;
        return totalSubject
    },
    
    "setParameter" = function (newSubject) {
        
        this.subject1 = newSubject
        
    }
    
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