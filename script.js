//Container
const container = document.getElementById("container");
container.classList.add("container");

//Container ContainerLeft
const containerLeft = document.createElement("div");
containerLeft.classList.add("containerLeft");
container.appendChild(containerLeft);
//Container ContainerLeft h1
const h1 = document.createElement("h1");
h1.textContent = "Etch-a-Sketch";
containerLeft.appendChild(h1);
//Container ContainerLeft Grid Size
const gridSize = document.createElement("div");
containerLeft.appendChild(gridSize).className="gridSize";
//Container ContainerLeft Grid Size h2
const h2 = document.createElement("h2");
h2.textContent = "Select Size";
gridSize.appendChild(h2);
//Container ContainerLeft Grid Size Buttons
const buttonsGrid = document.createElement("div");
gridSize.appendChild(buttonsGrid).className="buttonsGrid";
//Container ContainerLeft Grid Size ButtonsGrid 32x32
const button32 = document.createElement("button");
button32.textContent="32 x 32";
buttonsGrid.appendChild(button32).id="button32";
//Container ContainerLeft Grid Size ButtonsGrid 61x61
const button61 = document.createElement("button");
button61.textContent="61 x 61";
buttonsGrid.appendChild(button61).id="button61";
//Container ContainerLeft Grid Size ButtonsGrid Custom
const buttonCustom = document.createElement("button");
buttonCustom.textContent="Custom Size";
buttonsGrid.appendChild(buttonCustom).id="buttonCustom";
//Container ContainerLeft Grid Color
const gridColor =  document.createElement("div");
containerLeft.appendChild(gridColor).className="gridColor";
//Container ContainerLeft Grid Color h3
const h3 = document.createElement("h3");
h3.textContent = "Select Color";
gridColor.appendChild(h3);
//Container ContainerLeft Grid Color buttonsColor
const buttonsColor = document.createElement("div");
gridColor.appendChild(buttonsColor).className="buttonsColor";
//Container ContainerLeft Grid Color buttonsColor Color
const buttonColor = document.createElement("button");
buttonColor.textContent="Color";
buttonsColor.appendChild(buttonColor).id="buttonColor";
//Container ContainerLeft Grid Color buttonsColor Rainbow
const buttonRainbow = document.createElement("button");
buttonRainbow.textContent="Rainbow";
buttonsColor.appendChild(buttonRainbow).id="buttonRainbow";
//Container ContainerLeft Grid Color buttonsColor Darken
const buttonDarken = document.createElement("button");
buttonDarken.textContent="Darken";
buttonsColor.appendChild(buttonDarken).id="buttonDarken";
//Container ContainerLeft ButtonReset
const buttonReset = document.createElement("button");
buttonReset.textContent="Reset";
containerLeft.appendChild(buttonReset).id="buttonReset";

//Container ContainerRight
const containerRight = document.createElement("div");
containerRight.classList.add("containerRight");
container.appendChild(containerRight);
//Container ContainerRight Create rows and columns
const grid = document.createElement("div");
containerRight.appendChild(grid).className="grid";
const rows = document.getElementsByClassName("row");
const cols = document.getElementsByClassName("col");

//Functions

function makeRowCol(rowNum,colNum){

    for(let i=0;i<rowNum;i++){
        let row = document.createElement("div");
        grid.appendChild(row).className="row";
        for(let j=0;j<colNum;j++){
            let col = document.createElement("div");
            rows[i].appendChild(col).className="col";
        }
    }
}

function colorSquare(){
    let Items = document.querySelectorAll(".col");
    Items.forEach(item => {
        item.addEventListener("mouseover",()=> {
            item.style.backgroundColor = "black";
        })
    })
}

function resetSquare(){
    let Items = document.querySelectorAll(".col");
    buttonReset.addEventListener("click",()=>{
        Items.forEach(item => {
            item.style.backgroundColor="white";
    })
    })
}


makeRowCol(20,20);
colorSquare();
resetSquare();