let abc = ["a","b","c","d","e","f","g","h","i","j","k", "l", "m","n","o", "p","q","r","s","t","u","v","w","x","y","z"];
let oneTwoThree = ['0','1', '2', '3', '4', '5', '6', '7','8', '9'];
let pageArea = document.getElementById("body");
pageArea.focus();

let letter = document.getElementById("letter");

let counter = 0;

letter.innerHTML = abc[counter].toUpperCase();

pageArea.addEventListener("keydown", function (event) {
  if (event.key === letter.innerHTML.toLowerCase()) {
    counter += 1;
    if (counter >= abc.length) {
      counter = 0;
    }
    letter.innerHTML = abc[counter].toUpperCase();
  }
}, true);