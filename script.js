"use strict";

const dice = document.querySelector("#dice");
const btn = document.querySelector("#roll-button");
const list = document.querySelector("#roll-history");

let rollHistory = [];

const rollDice = () => {
  const rollResult = Math.trunc(Math.random() * 6) + 1;
  const diceFace = getDiceFace(rollResult);
  dice.innerHTML = diceFace;
  rollHistory.push(rollResult);
  updateRollHistory();
};

function updateRollHistory() {
    list.innerHTML = "";
    for (let i = 0; i < rollHistory.length; i++) {
      const listItem = document.createElement("li");
      listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(
        rollHistory[i]
      )}</span>`;
      list.appendChild(listItem);
    }
  }

const getDiceFace = (rollResult) => {
  switch (rollResult) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";
  }
};

btn.addEventListener("click", () => {
  dice.classList.add("roll-animation");
  setTimeout(() => {
    dice.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});
