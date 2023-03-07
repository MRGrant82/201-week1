// Prompt the user for their favorite color and store the input in the variable userColor
let userColor = prompt("What is your favorite color?");

// Log the question and user's answer to the console
console.log("Question 1: What is your favorite color?");
console.log("Answer: " + userColor);

// Prompt the user for their favorite food and store the input in the variable userFood
let userFood = prompt("What is your favorite food?");

// Log the question and user's answer to the console
console.log("Question 2: What is your favorite food?");
console.log("Answer: " + userFood);

// Prompt the user for their favorite vacation spot and store the input in the variable userVacation
let userVacation = prompt("Where is your favorite vacation spot?");

// Log the question and user's answer to the console
console.log("Question 3: Where is your favorite vacation spot?");
console.log("Answer: " + userVacation);

// Prompt the user for their favorite hobby and store the input in the variable userHobby
let userHobby = prompt("What is your favorite hobby?");

// Log the question and user's answer to the console
console.log("Question 4: What is your favorite hobby?");
console.log("Answer: " + userHobby);

// Create a message that combines the user's responses and display it in an alert box
let alertMessage = "Your favorite color is " + userColor + ", your favorite food is " + userFood + ", your favorite vacation spot is " + userVacation + ", and your favorite hobby is " + userHobby + ".";
alert(alertMessage);

// I want to try to get every color to be random each time 
const randomColor = () => {
    return Math.floor(Math.random() * 256);
  }
  
  const element = document.querySelector('.random-color');
  element.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
  

