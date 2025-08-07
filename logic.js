const sketch = document.querySelector(".sketch");
const resize = document.querySelector(".gridSize");
const reset = document.querySelector(".reset");
const colorful = document.querySelector(".brushColor");
const border = document.querySelector(".border");

let rowDivAmount;
let isMouseDown;
let colorMode = "black";

newGrid();

sketch.addEventListener("mousedown", () => isMouseDown = true);
document.addEventListener("mouseup", () => isMouseDown = false);

resize.addEventListener("click",resizeGrid);

colorful.addEventListener("click",function (e){
    colorful.classList.toggle("blackAndWhite");
    if(colorful.textContent == "Colorful Brush"){
       colorful.textContent = "Black Brush";
       colorMode = "colorful";
    }
    else{
        colorful.textContent = "Colorful Brush";
        colorMode = "black";
    }
    
});


reset.addEventListener("click",clear);

border.addEventListener("click",function (){
    const currentBoxes = document.querySelectorAll(".box");
    currentBoxes.forEach(i => {
        if (i.style.border) {
            i.style.border = "";
            border.textContent ="Border";
        } else {
            i.style.border = "0.1rem solid rgba(117, 103, 78, 1)";
            border.textContent = "No Border";
        }
    });
});

function clear(){
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.style.backgroundColor = "rgb(232, 201, 153)";
    });
}


function resizeGrid(){
    let size = +prompt("Please enter your new grid size(1-64): ");
    while(size<1 || size>64 || isNaN(size) )
        size = +prompt("Please enter a number between 1-64: ");
    newGrid(size);
}

function getRandomColor(){
    return `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
}





function draw(e) {
    if (e.type === "mousedown" || isMouseDown) {
        if (colorMode === "colorful") {
            e.target.style.backgroundColor = getRandomColor();
        } else {
            e.target.style.backgroundColor = "black";
        }
    }
}



function newGrid(rowDivAmount = 16){
    sketch.textContent = "";
    for(let i=0;i<rowDivAmount;i++){
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("rowDiv");
        for(let j=0;j<rowDivAmount;j++){
            const box = document.createElement("div");
            box.classList.add("box");

            box.addEventListener("mouseover", draw);
            box.addEventListener("mousedown", draw);


            rowDiv.appendChild(box);
        }
        sketch.appendChild(rowDiv);
    }
}



