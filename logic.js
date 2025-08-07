const sketch = document.querySelector(".sketch");

let rowDivAmount;
let boxWidth;
let boxHeight;

function newGrid(rowDivAmount = 16){
    sketch.textContent = "";
    for(let i=0;i<rowDivAmount;i++){
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("rowDiv");
        for(let j=0;j<rowDivAmount;j++){
            const box = document.createElement("div");
            box.classList.add("box");

            rowDiv.appendChild(box);
        }
        sketch.appendChild(rowDiv);
    }
}

newGrid();