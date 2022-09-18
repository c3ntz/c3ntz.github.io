
const initCanvas = () => {
canvas = document.querySelector("canvas")
ctx = canvas.getContext("2d")
canvas.height = canvas.height*2.1
}


const initPlanet = () => {
    const planet = document.getElementById("planet")
    planet.x = canvas.width / 2
    planet.y = canvas.height / 2
    ctx.drawImage(planet, planet.width/numColumns, 0 ,planet.width/numColumns, planet.height, 0, 0, 300, 300);
}

console.log(planet)

window.onload = () => {
   initCanvas()
   initPlanet()
}


let numColumns = 50;
let numRows = 1;

let frameWidth = planet.width / numColumns;
let frameHeight = planet.height / numRows;


let currentFrame = 0;

setInterval(function()
{
    currentFrame++;

    if (currentFrame > numColumns-1){
        currentFrame = 0;
    }

    let column = currentFrame * frameWidth;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(planet, column, 0 ,planet.width/numColumns, planet.height, 0, 0, 300, 300);
}, 100);


window.onload = () => {
    initCanvas();
    setInterval();
 }

