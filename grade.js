const readline = require("readline");
 //This imports the readline module from node.js,helping the user to interact with the commandline after runing the program.

function studentGrader(marks) {
  //Main function to determine the grade of a student according to their marks.

  if (marks < 0 || marks > 100) {
    //validates if marks are within the range of 0-100
    return "Enter marks between 0 and 100.";
  } else {
    if (marks > 79) {
      return "Congratulations, your grade is: A";
    } else if (marks >= 60) {
      return "Good trial, your grade is: B";
    } else if (marks >= 50) {
      return "Avarage,your grade is: C";
    } else if (marks >= 40) {
      return "Need to improve,your grade is: D";
    } else {
      return "See me, your grade is: E";
    }
  }
}
// The readline interface prompts the student/teacher to enter their marks through the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your marks: ", (input) => {
  const marks = parseFloat(input);

  if (isNaN(marks)) {
    console.log("Invalid input. grade should be between 0-100"); 
    //validates if an iput is a number
  } else {
    console.log(studentGrader(marks));
  }
  rl.close(); 

});
  
