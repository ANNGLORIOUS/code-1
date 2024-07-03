// write code here
const readline = require("readline");
// This function displays suitable message upon checking the speed of the car.
function speedChecker(speed) {
  const speedLimit = 70; 
  //maximum speed in km/hr
  const authorizedLimitPoints = 12; 
  //12 is the maximum points that one can attain for their license to be suspended.
  const kmPerPoint = 5;

  if (speed <= speedLimit) {
    return "OK"; 
    //OK is displayed if the speed is within the limit
  } else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points > authorizedLimitPoints) {
      return "License suspended"; 
      //Implies that the driver is beyond the authorized demerits points of 12.
    } else {
      return "Points:" + points; 
      //implies the driver is above authorized speed limit but has not exceeded the authorized demerit points of 12.
    }
  }
}

const rl = readline.createInterface({
  //
  input: process.stdin, 
  //This section here creates a user interface, enablingthe to interact with the system.
  output: process.stdout, 
}); 
//After creating user interface, this part prompts the userto enter the speed of their car (This will happen after we run the program using node speedDetector.js)
rl.question("Enter the speed of the car (km/h): ", (input) => {
  const speed = parseFloat(input);
  if (isNaN(speed)) {
    console.log("Invalid input. Please enter a numeric value."); 
    //This will display "Invalid Input" if the user inputs something which is not a number.
  } else {
    console.log(speedChecker(speed)); 
    //The main function speedChecker is invokede to display the results.
  }
  rl.close(); 
});
