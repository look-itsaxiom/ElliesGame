//source values for modes
const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const oneTwoThree = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const nameArr = ['ELLIE', 'SKIBENESS'];
let countingArr = [...Array(1001).keys()];

//set active mode as abc as default
let activeMode = "";

// array counter
let counter = 0;

//get Elements from DOM
let pageArea = document.getElementById("body");
let abcBtn = document.getElementById("abcBtn");
let oneTwoThreeBtn = document.getElementById("123Btn");
let countBtn = document.getElementById("countBtn");
let nameBtn = document.getElementById("nameBtn");
let dinoMatchBtn = document.getElementById("dinoMatchBtn");
let letter = document.getElementById("letter");
let title = document.getElementById("title");
let hiddenText = document.getElementById("focuser");


abcBtn.addEventListener("click", function () {
  abcBtn.classList.add("button-pressed");
  oneTwoThreeBtn.classList.remove("button-pressed");
  nameBtn.classList.remove("button-pressed");
  countBtn.classList.remove("button-pressed");
  title.innerHTML = "Let's sing our ABCs, Ellie!";
  activeMode = abc;
  counter = 0;
  letter.innerHTML = activeMode[counter].toUpperCase();
})

oneTwoThreeBtn.addEventListener("click", function () {
  oneTwoThreeBtn.classList.add("button-pressed");
  abcBtn.classList.remove("button-pressed");
  nameBtn.classList.remove("button-pressed");
  countBtn.classList.remove("button-pressed");
  title.innerHTML = "Let's count to 9, Ellie!";
  activeMode = oneTwoThree;
  counter = 0;
  letter.innerHTML = activeMode[counter].toUpperCase();
})

nameBtn.addEventListener("click", function () {
  nameBtn.classList.add("button-pressed");
  abcBtn.classList.remove("button-pressed");
  oneTwoThreeBtn.classList.remove("button-pressed");
  countBtn.classList.remove("button-pressed");
  title.innerHTML = "Let's spell your name, Ellie!";
  activeMode = nameArr;
  counter = 0;
  letter.innerHTML = activeMode[counter].toUpperCase();
})

countBtn.addEventListener("click", function () {
  countBtn.classList.add("button-pressed");
  abcBtn.classList.remove("button-pressed");
  nameBtn.classList.remove("button-pressed");
  oneTwoThreeBtn.classList.remove("button-pressed");
  title.innerHTML = "Let's count, Ellie!";
  activeMode = countingArr;
  counter = 0;
  letter.innerHTML = String(activeMode[counter]).toUpperCase();
})

dinoMatchBtn.addEventListener("click", function () {
  dinoMatchBtn.classList.add("button-pressed");
  countBtn.classList.remove("button-pressed");
  abcBtn.classList.remove("button-pressed");
  nameBtn.classList.remove("button-pressed");
  oneTwoThreeBtn.classList.remove("button-pressed");
  title.innerHTML = "Let's match Dinosaurs, Ellie!"
  activeMode = "dinoMatch";
  letter.innerHTML = "";
})

pageArea.addEventListener("keydown", function (event) {
  if (event.key === letter.innerHTML.toLowerCase().split("")[0]) {
    letter.innerHTML = letter.innerHTML.toLowerCase().replace(event.key, "").toUpperCase();

    if (letter.innerHTML === "") {
      letter.classList.add("animate__animated", "animate__backInDown");
      counter += 1;
      if (counter >= activeMode.length) {
        counter = 0;
      }
      letter.innerHTML = String(activeMode[counter]).toUpperCase();
      letter.addEventListener('animationend', () => {
        letter.classList.remove("animate__animated", "animate__backInDown");
      });
    }




  }
}, true);