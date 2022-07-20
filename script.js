const boardArea = document.querySelector("#boardArea");
const generator = document.querySelector("#generator");

let newSizeArr = [16];

generator.addEventListener("mousedown", (e)=> {
    newSizeArr.pop();
    let newSize = parseInt(prompt("New Resolution? 16 to 100"));
    if (newSize < 16) {
        newSize = 16;
    } else if (newSize > 100) {
        newSize = 100;
    } 
    newSizeArr.push(newSize);
    createSquares();
}
)
function createSquares() {

const squares = document.querySelectorAll(".square");

squares.forEach(element => {
    boardArea.removeChild(element);
});

for (let i = 0; i < (newSizeArr[0]*newSizeArr[0]); i++) {
let square = document.createElement("div");
    square.classList = "square";
    square.addEventListener("mouseover", (e)=>{
        var randomColor = `${'#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`;
        square.style.backgroundColor = randomColor;
    })
    boardArea.appendChild(square);
}
 }

 createSquares();