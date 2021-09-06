
//FUNCIONES
const changeColors = (color) => { //pone a todos los elementos de un mismo color
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
};

// let colors = ["rgb(250, 68, 9)", "rgb(20, 8, 9)", "rgb(50, 68, 90)", "rgb(250, 68, 239)", "rgb(50, 68, 9)", "rgb(20, 68, 9)"]

const randomColor = () =>  //genero un color random
  `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;

const generateRandomColors = (numero) => { //genero colores random para ir asignando a mi arreglo de colores (colors)
  for (let i = 0; i < numero; i++) {
    colors[i] = randomColor()
  }
}

const pickColor = () => {//genero un numero random para luego seleccionar un color random dentro de mi arreglo de colores
  let numeroRandom = Math.floor(Math.random() * (numberOfSquares - 1));
  return colors[numeroRandom];
};

const reset = () => {
  generateRandomColors(numberOfSquares)
  title.style.backgroundColor = "#8f33bd";
  pickedColor = pickColor()
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squareElements; i++) {
    squares[i].style.backgroundColor = colors[i]
  }

}

let colors = []
let numberOfSquares = 6
let clickedColor;
//SELECTORES
let colorDisplay = document.querySelector("#colorDisplay");
let squares = document.querySelectorAll(".square");
let squareElements = squares.length;
let message = document.querySelector("#message");
let resetButton = document.querySelector("#reset")
// let body = document.querySelector("body")
// let backgroundColorBody = document.querySelector("body").style.backgroundColor
// console.log(backgroundColorBody)
const backgroundColorBody = "#dbc2fc"
let title = document.querySelector(".title");
let easyMode = document.querySelector("#easyMode")
let hardMode = document.querySelector("#hardMode")

//ASIGNACIONES

//primera vez que abro mi pagina
generateRandomColors(numberOfSquares)
let pickedColor = pickColor();

colorDisplay.textContent = pickedColor;


//DEFINICION DE VARIABLES


//--------------------------------------------------------------------------

for (let i = 0; i < squareElements; i++) {
  //le doy el color a cada cuadrado
  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener("click", function () {
    clickedColor = this.style.backgroundColor;
    console.log(clickedColor)
    console.log(pickedColor)
    if (clickedColor == pickedColor) {
      message.textContent = "Correct!!";
      title.style.backgroundColor = pickedColor;
      changeColors(pickedColor);
      resetButton.textContent = "Play Again?"
    } else {
      squares[i].style.backgroundColor = backgroundColorBody; //consultar como pasar a variable el background color de mi body, asi no lo hardcodeo
      message.textContent = "Try Again!";
    }
  }
  );
}

// --------------------------------------------     RESET     --------------------------------------------


resetButton.addEventListener("click", () => {
  message.textContent = ""
  generateRandomColors(6)
  pickedColor = pickColor()
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squareElements; i++) {
    squares[i].style.backgroundColor = colors[i]
  }
  resetButton.textContent = "New Colors"
  message.textContent = ""
  title.style.backgroundColor = "#8f33bd"
}
)

// --------------------------------------------     EASY MODE     --------------------------------------------

easyMode.addEventListener("click", () => {
  title.style.backgroundColor = "#8f33bd";
  resetButton.textContent = "New Colors"
  message.textContent = ""
  colors = [] //reseteo colors
  numberOfSquares = 3
  easyMode.classList.replace("mode", "selected")
  hardMode.classList.replace("selected", "mode")
  generateRandomColors(numberOfSquares)
  pickedColor = pickColor()
  console.log(pickedColor)
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squareElements; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i]
    } else {
      squares[i].style.display = "none"
    }
  }

})


// --------------------------------------------     HARD MODE     --------------------------------------------

hardMode.addEventListener("click", () => {
  title.style.backgroundColor = "#8f33bd";
  resetButton.textContent = "New Colors"
  message.textContent = ""
  colors = [] //reseteo colors
  numberOfSquares = 6
  hardMode.classList.replace("mode", "selected")
  easyMode.classList.replace("selected", "mode")
  generateRandomColors(numberOfSquares)
  pickedColor = pickColor()
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squareElements; i++) {
    squares[i].style.display = "block"
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i]
    } else {
      squares[i].style.backgroundColor = backgroundColorBody
    }
  }

})