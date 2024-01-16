//source values for modes
const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const oneTwoThree = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const nameArr = ['NORA', 'SKIBENESS'];
let countingArr = [...Array(1001).keys()];
const dinosArr = ["TRex", "Velociraptor", "Stegosaurus", "Triceratops", "Allosaurus","Ankylosaurus", "Dilophosaurus","Pteranodon"];
let boardState = [];

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
let dinoRaceBtn = document.getElementById("dinoRaceBtn");
let letter = document.getElementById("letter");
let title = document.getElementById("title");
let hiddenText = document.getElementById("focuser");
let dinoRacer = document.getElementById("dinoRace");


abcBtn.addEventListener("click", function () {
  abcBtn.classList.add("button-pressed");
  oneTwoThreeBtn.classList.remove("button-pressed");
  dinoMatchBtn.classList.remove("button-pressed");
  nameBtn.classList.remove("button-pressed");
  countBtn.classList.remove("button-pressed");
  dinoRaceBtn.classList.remove("button-pressed");
  dinoRacer.classList.add("dinoRaceHidden");
  removeMatchBoard();
  title.innerHTML = "Let's sing our ABCs, Nora!";
  activeMode = abc;
  counter = 0;
  letter.innerHTML = activeMode[counter].toUpperCase();
})

oneTwoThreeBtn.addEventListener("click", function () {
  oneTwoThreeBtn.classList.add("button-pressed");
  abcBtn.classList.remove("button-pressed");
  dinoMatchBtn.classList.remove("button-pressed");
  nameBtn.classList.remove("button-pressed");
  countBtn.classList.remove("button-pressed");
  dinoRaceBtn.classList.remove("button-pressed");
  dinoRaceBtn.classList.remove("button-pressed");
  dinoRacer.classList.add("dinoRaceHidden");
  removeMatchBoard();
  title.innerHTML = "Let's count to 9, Nora!";
  activeMode = oneTwoThree;
  counter = 0;
  letter.innerHTML = activeMode[counter].toUpperCase();
})

nameBtn.addEventListener("click", function () {
  nameBtn.classList.add("button-pressed");
  abcBtn.classList.remove("button-pressed");
  dinoMatchBtn.classList.remove("button-pressed");
  oneTwoThreeBtn.classList.remove("button-pressed");
  countBtn.classList.remove("button-pressed");
  dinoRaceBtn.classList.remove("button-pressed");
  dinoRacer.classList.add("dinoRaceHidden");
  removeMatchBoard();
  title.innerHTML = "Let's spell your name, Nora!";
  activeMode = nameArr;
  counter = 0;
  letter.innerHTML = activeMode[counter].toUpperCase();
})

countBtn.addEventListener("click", function () {
  countBtn.classList.add("button-pressed");
  dinoMatchBtn.classList.remove("button-pressed");
  abcBtn.classList.remove("button-pressed");
  nameBtn.classList.remove("button-pressed");
  oneTwoThreeBtn.classList.remove("button-pressed");
  dinoRaceBtn.classList.remove("button-pressed");
  dinoRacer.classList.add("dinoRaceHidden");
  removeMatchBoard();
  title.innerHTML = "Let's count, Nora!";
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
  dinoRaceBtn.classList.remove("button-pressed");
  dinoRacer.classList.add("dinoRaceHidden");
  removeMatchBoard();
  title.innerHTML = "Let's match Dinosaurs, Nora!"
  activeMode = "dinoMatch";
  letter.innerHTML = "";
  boardState = generateMatchBoardState(dinosArr);
  counter = 0;
  renderMatchBoard(boardState, letter);
})

dinoRaceBtn.addEventListener("click", () => {
  dinoRaceBtn.classList.add("button-pressed");
  dinoRacer.classList.remove("dinoRaceHidden");
  countBtn.classList.remove("button-pressed");
  abcBtn.classList.remove("button-pressed");
  nameBtn.classList.remove("button-pressed");
  oneTwoThreeBtn.classList.remove("button-pressed");
  dinoMatchBtn.classList.remove("button-pressed");
  removeMatchBoard();
  title.innerHTML = "Nora the Dino Racer!";
  activeMode = "dinoRace";
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

function updateBoardState() {
  let boardObj = document.getElementById("matchBoard");
  let boardStateRaw = boardObj.childNodes;
  for (let i = 0; i < boardStateRaw.length; i++) {
    boardState[i].id = boardStateRaw[i].id;
    boardState[i].name = boardStateRaw[i].alt;
    boardState[i].flipped = boardStateRaw[i].classList[0];
  }

  if (counter >= 2) {
    let flippedCards = boardState.filter(card => card.flipped === "flipped")
    if (flippedCards[0].name === flippedCards[1].name) {
      boardState[flippedCards[0].id].flipped = "matched";
      boardState[flippedCards[1].id].flipped = "matched";
      boardObj.childNodes[flippedCards[0].id].classList.remove("flipped");
      boardObj.childNodes[flippedCards[1].id].classList.remove("flipped");
      boardObj.childNodes[flippedCards[0].id].classList.add("matched");
      boardObj.childNodes[flippedCards[1].id].classList.add("matched");
    } else {
      boardState[flippedCards[0].id].flipped = "unflipped";
      boardState[flippedCards[1].id].flipped = "unflipped";
      boardObj.childNodes[flippedCards[0].id].classList.remove("flipped");
      boardObj.childNodes[flippedCards[1].id].classList.remove("flipped");
      boardObj.childNodes[flippedCards[0].id].classList.add("unflipped");
      boardObj.childNodes[flippedCards[1].id].classList.add("unflipped");
      setTimeout(() => {
        boardObj.childNodes[flippedCards[0].id].src = "img/cardback.jpg";
        boardObj.childNodes[flippedCards[1].id].src = "img/cardback.jpg";
      }, 1500);
    }
    counter = 0;
  }

  if (boardState.filter(card => card.flipped === "matched").length === boardState.length) {
    boardObj.classList.add("animate__fadeOutTopRight");
    setTimeout(() => removeMatchBoard(), 3000);
    letter.innerHTML = "YOU WIN!";
  }
  
}

function removeMatchBoard() {
  if (document.getElementById("matchBoard")) {
    board = document.getElementById("matchBoard");

    board.parentNode.replaceChild(letter, board);
    board.remove();
  }
}

function renderMatchBoard(boardState, target) {
  //let target = document.getElementById("letter");
  let board = document.createElement('div');
  board.id = "matchBoard"
  boardState.forEach(card => {
    let img = document.createElement('img');
    img.alt = card.name
    img.className = "unflipped";
    img.id = card.id;
    img.addEventListener("click" , function (event) {
      this.classList.remove("unflipped");
      this.classList.add("flipped");
      this.classList.add("animate__flipOutY");
      setTimeout(() => {
        this.src = `img/${this.alt}.jpg`;
        counter++;
        updateBoardState();
      });
      this.addEventListener('animationend', () => {
        this.classList.remove("animate__flipOutY", "animate__flipInY");
      })
      
    })
    img.src = "img/cardback.jpg";

    board.appendChild(img);
    
  })

  target.parentNode.replaceChild(board, target);
}

function generateMatchBoardState(matchArr) {
  let boardState = Array(matchArr.length * 2);
  let correctState;

  do {
    correctState = true;

    for (let i = 0; i < boardState.length; i++) {
      boardState[i] = {
        id: i,
        name: matchArr[Math.floor(Math.random() * matchArr.length)],
        flipped: "unflipped",
      }
    }


    matchArr.forEach(necessaryCard => {
      let cardCount = boardState.filter(proposedCard => proposedCard.name === necessaryCard);
      if (cardCount.length > 2 || cardCount.length < 2) {
        correctState = false;
      }
    });
  } while ((!correctState))

  return boardState;
}