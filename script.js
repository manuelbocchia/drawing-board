
/* gets variables from document */
const boardArea = document.querySelector("#boardArea");
const generator = document.querySelector("#generator");
const switcher = document.querySelector("#switch");

let newSizeArr = [16];

/* makke the size button work */
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

/* make the switcher button work */

switcher.addEventListener("mousedown", (e)=> {
  
    if (switcher.dataset.mode === "color") {
        switcher.dataset.mode = "b&w";
        switcher.innerText = "B&W Mode";
    } else if (switcher.dataset.mode === "b&w") {
        switcher.dataset.mode = "color";
        switcher.innerText = "Color Mode";
    }

    createSquares();
}

)

/* this function makes the squares according to the switch and the size button*/
function createSquares() {

const squares = document.querySelectorAll(".square");

squares.forEach(element => {
    boardArea.removeChild(element);
});

let totalSize = (newSizeArr[0]*newSizeArr[0]);

for (let i = 0; i < (totalSize); i++) {
let square = document.createElement("div");
    square.classList = "square";
    square.style.filter = "brightness(100%)";
        
    square.addEventListener("mouseover", (e)=>{
        if (switcher.dataset.mode === "color") {
        var randomColor = `${'#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`;
        square.style.backgroundColor = randomColor;
        } else if (switcher.dataset.mode === "b&w") {
            
            const newBright = (square.style.filter).match(/(\d+)/);

            const another = newBright[0] - 10;

            square.style.filter = `brightness(${another}%)`

        }
   
    })

    const squareSizeIndex = parseInt(600/(Math.sqrt(totalSize)));
    square.style.width = `${squareSizeIndex}`+"px";
    square.style.height = `${squareSizeIndex}`+"px";
    boardArea.appendChild(square);
 
}
 }

 createSquares();