//For n*n grid
let n = 6;
const MAX_GRID = 100;
function addColor(e) {
  e.target.style.backgroundColor = "black";
}

function randomColorGenerator(e) {
  let randomNumberRed = Math.round(Math.random() * 255);
  let randomNumberBlue = Math.round(Math.random() * 255);
  let randomNumberGreen = Math.round(Math.random() * 255);
  e.target.style.backgroundColor = `rgb(${randomNumberRed},${randomNumberGreen},${randomNumberBlue})`;
}
function tranparentColorGenerator(e, opacity) {
  e.target.style.backgroundColor = `rgba(0,0,0,${opacity})`;
}

function randomColor() {
  const smallBoxes = document.querySelectorAll(".box");
  smallBoxes.forEach((smallBox) => {
    smallBox.removeEventListener("mouseover", tranparentColorGenerator);
    smallBox.addEventListener("mouseover", randomColorGenerator);
  });
}

function tranparentColor(e) {
  const smallBoxes = document.querySelectorAll(".box");
  smallBoxes.forEach((smallBox) => {
    let opacity = 0;
    smallBox.addEventListener("mouseover", (e) => {
      opacity += 0.1;
      if (opacity >= 1) {
        opacity = 1;
      }
      tranparentColorGenerator(e, opacity);
    });
  });
}

function removeGrid() {
  const containerDiv = document.querySelector(".container");
  while (containerDiv.firstChild) {
    containerDiv.removeChild(containerDiv.firstChild);
  }
}

function createGrid(n) {
  const containerDiv = document.querySelector(".container");
  const containerWidth = containerDiv.clientWidth;
  const smallDivWidth = containerWidth / n;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const smallDiv = document.createElement("div");
      smallDiv.style.cssText = `width:${smallDivWidth}px;height:${smallDivWidth}px`;
      smallDiv.classList.add("box");
      containerDiv.appendChild(smallDiv);
    }
  }
  const smallBoxes = document.querySelectorAll(".box");
  smallBoxes.forEach((smallBox) => {
    smallBox.addEventListener("mouseover", addColor);
  });
}

function buttonColorChange(obj) {
  console.log(obj);
  obj.classList.add("button-click");
  setTimeout(() => {
    obj.classList.remove("button-click");
    console.log("45");
  }, 1000);
}

function resetBoard() {
  buttonColorChange(this);
  n = prompt("enter");
  if (n >= MAX_GRID) {
    n = MAX_GRID;
  }

  removeGrid();
  createGrid(n);
}

function startBoard() {
  //select container div and get its dimension using that setting dimensions of small boxes inside container
  createGrid(n);
}

const btnTag = document.querySelector("#reset");
btnTag.addEventListener("click", resetBoard);

const randomBtnTag = document.querySelector("#random");
randomBtnTag.addEventListener("click", randomColor);

const transparentBtnTag = document.querySelector("#transparent");
transparentBtnTag.addEventListener("click", tranparentColor);

//Code starts from here
startBoard();
