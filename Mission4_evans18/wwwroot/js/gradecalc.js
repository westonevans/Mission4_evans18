// Grade Calculator
/*
 Build a JavaScript program that calculates and displays both a final percentage and a letter grade
 using the "Grade Calculator" form entries based on the weights listed in the syllabus.  Use jQuery selectors
 (i.e. the “$”) in your program.  Print the letter grade to the form (not in an alert.)
 */

//function
$("#CalcGrade").click(function () {


    //get inputs using jquery
    let assignments = parseFloat($("#as").val() * .5); //50
    let groupProject = parseFloat($("#gp").val() * 0.1); //10
    let quizzes = parseFloat($("#qz").val() * 0.1); //10
    let midterm = parseFloat($("#me").val()* 0.1); //10
    let final = parseFloat($("#fe").val() * 0.1); //10
    let intex = parseFloat($("#intex").val() * 0.1); //10

    let sum = assignments + groupProject + quizzes + midterm + final + intex;
    let lettergrade = "";

    //determine letter grade using if statement
    if (sum >= 94) {
        lettergrade = 'A'
    }
    else if (sum >= 90) {
        lettergrade = 'A-'
    }
    else if (sum >= 87) {
        lettergrade = 'B+'
    }
    else if (sum >= 84) {
        lettergrade = 'B'
    }
    else if (sum >= 80) {
        lettergrade = 'B-'
    }
    else if (sum >= 77) {
        lettergrade = 'C+'
    }
    else if (sum >= 74) {
        lettergrade = 'C'
    }
    else if (sum >= 70) {
        lettergrade = 'C-'
    }
    else if (sum >= 67) {
        lettergrade = 'D+'
    }
    else if (sum >= 64) {
        lettergrade = 'D'
    }
    else if (sum >= 60) {
        lettergrade = 'D-'
    }
    else {
        lettergrade = 'E'
    }

    //format final grade to return to index.html
    document.getElementById("finalgrade").innerHTML = "Your final grade is: " + lettergrade;
})