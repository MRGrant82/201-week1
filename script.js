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
// const randomColor = () => {
//   return Math.floor(Math.random() * 256);
// }
  
  // const element = document.querySelector('.randomColor');
  // element.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;

  // I want to also display the answers on the page next to the questions

  //Getting the user input and assigning them to variables

 
  // querySelector methodallows me to select an HTML element from a webpage using a CSS selector. The .textContent sets the content of the selected element (Your favorite color is: ; etc)
document.querySelector('.response-color-1').textContent = "Your favorite color is: " + userColor;
document.querySelector('.response-color-2').textContent = "Your favorite food is: " + userFood;
document.querySelector('.response-color-3').textContent = "Your favorite vacation spot is: " + userVacation;
document.querySelector('.response-color-4').textContent = "Your favorite hobby is: " + userHobby;


  

