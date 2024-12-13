
const options = {
  // html
  img: "Which HTML tag is used for inserting an image?",
  href: "Which HTML attribute is used to specify the URL of a linked page?",
  body: "The primary structure of an HTML document includes the < !DOCTYPE html > declaration, < html >, < head >, and < _______ > tags.",
  h1: "Which HTML element is used for the largest heading",
  case: "HTML is not _______-sensitive, meaning < div > and < DIV > are treated the same.",
  src: "What attribute defines an image source in the <img> tag?",
  textallign: "The _______ property is used to control the alignment of text within an HTML element, such as centering text within a paragraph.",

  //css
  display: "The CSS property used to control how elements are displayed on the page, such as block, inline, flex, and grid, is called the _________ property.",
  position: "The CSS _________ property specifies how an element is positioned on the page, with options like static, relative, absolute, fixed, and sticky.",
  overflow: "When content overflows its containing element, the _________ property determines how the overflow is handled, with possible values like visible, hidden, scroll, or auto.",
  hidden: "What CSS property is used to hide overflowing content?",
  gap: "What property specifies the space between grid items?",
  fixed: "What value of position makes an element stay fixed in place while scrolling?",
  title: "Which property is used to add a tooltip to an HTML element?",
  
  //java
  innerHTML: "JavaScript can change HTML content using the _________ property to modify elements based on their ID, class, or tag name.",
  let: "To declare a block-scoped variable in JavaScript that can be reassigned, use the keyword",
  const: "What keyword is used to declare a constant variable in JavaScript?",
  return: "What is the JavaScript keyword used for returning a value from a function?",
  arithmetic: "JavaScript uses the _________ operator for addition, subtraction, multiplication, and other arithmetic operations.",
  display: "The _________ property is used in JavaScript to hide elements by setting their display value.",
  function: "In JavaScript, the _________ keyword is used to define a reusable block of code, known as a function.",

};  
//Initial References
const message = document.getElementById("message");
const hintRef = document.querySelector(".hint-ref");
const controls = document.querySelector(".controls-container");
const startBtn = document.getElementById("start");
const letterContainer = document.getElementById("letter-container");
const userInpSection = document.getElementById("user-input-section");
const resultText = document.getElementById("result");
const word = document.getElementById("word");
const words = Object.keys(options);
let randomWord = "",
  randomHint = "";
let winCount = 0,
  lossCount = 0;
//Generate random value
const generateRandomValue = (array) => Math.floor(Math.random() * array.length);
//Block all the buttons
const blocker = () => {
  let lettersButtons = document.querySelectorAll(".letters");
  stopGame();
};
//Start Game
startBtn.addEventListener("click", () => {
  controls.classList.add("hide");
  init();
});
//Stop Game
const stopGame = () => {
  controls.classList.remove("hide");
};
//Generate Word Function
const generateWord = () => {
  letterContainer.classList.remove("hide");
  userInpSection.innerText = "";
  randomWord = words[generateRandomValue(words)];
  randomHint = options[randomWord];
  hintRef.innerHTML = `<div id="wordHint">
  <span>Hint: </span>${randomHint}</div>`;
  let displayItem = "";
  randomWord.split("").forEach((value) => {
    displayItem += '<span class="inputSpace">_ </span>';
  });
  //Display each element as span
  userInpSection.innerHTML = displayItem;
  userInpSection.innerHTML += `<div id='chanceCount'>Chances Left: ${lossCount}</div>`;
};
//Initial Function
const init = () => {
  winCount = 0;
  lossCount = 5;
  randomWord = "";
  word.innerText = "";
  randomHint = "";
  message.innerText = "";
  userInpSection.innerHTML = "";
  letterContainer.classList.add("hide");
  letterContainer.innerHTML = "";
  generateWord();
  //For creating letter buttons
  for (let i = 65; i < 91; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");
    //Number to ASCII[A-Z]
    button.innerText = String.fromCharCode(i);
    //Character button onclick
    button.addEventListener("click", () => {
      message.innerText = `Correct Letter`;
      message.style.color = "#008000";
      let charArray = randomWord.toUpperCase().split("");
      let inputSpace = document.getElementsByClassName("inputSpace");
      //If array contains clicked value replace the matched Dash with Letter
      if (charArray.includes(button.innerText)) {
        charArray.forEach((char, index) => {
          //If character in array is same as clicked button
          if (char === button.innerText) {
            button.classList.add("correct");
            //Replace dash with letter
            inputSpace[index].innerText = char;
            //increment counter
            winCount += 1;
            //If winCount equals word length
            if (winCount == charArray.length) {
              resultText.innerHTML = "You Won";
              startBtn.innerText = "Restart";
              //block all buttons
              blocker();
            }
          }
        });
      } else {
        //lose count
        button.classList.add("incorrect");
        lossCount -= 1;
        document.getElementById(
          "chanceCount"
        ).innerText = `Chances Left: ${lossCount}`;
        message.innerText = `Incorrect Letter`;
        message.style.color = "#ff0000";
        if (lossCount == 0) {
          word.innerHTML = `The word was: <span>${randomWord}</span>`;
          resultText.innerHTML = "Game Over";
          blocker();
        }
      }
      //Disable clicked buttons
      button.disabled = true;
    });
    //Append generated buttons to the letters container
    letterContainer.appendChild(button);
  }
};
window.onload = () => {
  init();
};