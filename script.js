const boardArea = document.querySelector("#boardArea")

for (let i = 0; i < (16*16); i++) {
let square = document.createElement("div");
    square.classList = "square";
    square.addEventListener("mouseover", (e)=>{
        var randomColor = `${'#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`;
        square.style.backgroundColor = randomColor;
    })
    boardArea.appendChild(square);
}