// Part 1
const questionOne = (width, height) => {
  return width * height;
};

console.log(questionOne(5, 3));
console.log(questionOne(10, 7));

// Part 2
// Create a random number, stored in a function to avoid repetition
const randomFunction = (num) => {
  return Math.floor(Math.random() * num);
};

const questionTwoButton = document.getElementById("questionTwoButton");
questionTwoButton.addEventListener("click", () => {
  alert("Button Clicked!");
  questionTwoButton.style.backgroundColor = `rgb(${randomFunction(
    255
  )}, ${randomFunction(255)}, ${randomFunction(255)})`;
});

// Part 3
const questionThreeUl = document.getElementById("questionThreeUl");
const questionThreeLi = document.createElement("li");
questionThreeLi.textContent = "Fourth Item";
questionThreeLi.id = "fourthItem";
questionThreeUl.appendChild(questionThreeLi);

// Selecting all "li" elements
const liItems = document.querySelectorAll("li");
// Iterating over the array of 'liItems' to apply the .addEventListener() function to each item
liItems.forEach((li) => {
  li.addEventListener("click", () => {
    li.textContent = Math.random().toString(36).substring(2);
  });
});

// Part 4
const questionFour = document.getElementById("questionFour");
questionFour.addEventListener("click", () => {
  questionFour.style.backgroundColor = `rgb(${randomFunction(
    255
  )}, ${randomFunction(255)}, ${randomFunction(255)})`;
});

questionFour.addEventListener("mouseover", () => {
  questionFour.style.border = "solid black 3px";
  questionFour.style.padding = "17px";
});

questionFour.addEventListener("mouseout", () => {
  questionFour.style.border = "none";
  questionFour.style.padding = "20px";
});
