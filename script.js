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
const buttonColor = document.createElement("input");
buttonColor.type="color";
buttonColor.value="#ff0000";
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

function makeGrid(customSize){
 /*    for(let i=0;i<rowNum;i++){
        let row = document.createElement("div");
        grid.appendChild(row).className="row";
        for(let j=0;j<colNum;j++){
            let col = document.createElement("div");
            rows[i].appendChild(col).className="col";
        }
    }
    */
    let Items = document.querySelectorAll(".col");
    Items.forEach(item => {
    item.style.backgroundColor="white";
})

    grid.style.gridTemplateColumns = `repeat(${customSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${customSize}, 1fr)`;

    for(let i = 0; i < customSize*customSize; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('col');
        grid.appendChild(gridItem); 
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

function colorRainbowGrid(){
    let cols = document.querySelectorAll('.col');
    cols.forEach((col) => {
        col.addEventListener('mouseover', () => { 
            col.style.background = generateRandomColor();
        });
    });
}
function generateRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function colorGrid() {
    let cols = document.querySelectorAll('.col');
     cols.forEach((col) => {
         col.addEventListener('mouseover', () => {
             col.style.background = buttonColor.value;
         })
     })
 }

function colorDarken(){
    let cols = document.querySelectorAll('.col'); 

    cols.forEach((col) => {
        col.addEventListener('mouseover', () => {
            
            col.counter = col.counter || 0;
            col.counter += 1;
            
            if (col.counter === 1) {
                col.style.background = '#000000';
                col.style.opacity = '0.1';
            } else if (col.counter === 2) {
                col.style.background = '#000000';
                col.style.opacity = '0.2';
            } else if (col.counter === 3) {
                col.style.background = '#000000';
                col.style.opacity = '0.3';
            } else if (col.counter === 4) {
                col.style.background = '#000000';
                col.style.opacity = '0.4';
            } else if (col.counter === 5) {
                col.style.background = '#000000';
                col.style.opacity = '0.5';
            } else if (col.counter === 6) {
                col.style.background = '#000000';
                col.style.opacity = '0.6';
            } else if (col.counter === 7) {
                col.style.background = '#000000';
                col.style.opacity = '0.7';
            } else if (col.counter === 8) {
                col.style.background = '#000000';
                col.style.opacity = '0.8';
            } else if (col.counter === 9) {
                col.style.background = '#000000';
                col.style.opacity = '0.9';
            } else if (col.counter === 10) {
                col.style.background = '#000000';
                col.style.opacity = '1';
            } else {
                col.style.background = '#000000';
                col.style.opacity = '1';
            }
        })
    })
}

makeGrid(100);
colorSquare();
resetSquare();

button32.addEventListener("click",()=>{
    makeGrid(32);
})
button61.addEventListener("click",()=>{
    makeGrid(61);
})
buttonCustom.addEventListener("click",()=>{
    while(1){
        let value = prompt("Select size:","");
        if(value>0 && value<=100){
            makeGrid(value);
            return;
        }
        else
            value = prompt("Select size:","");
    }
})
buttonRainbow.addEventListener("click",()=>{
    colorRainbowGrid();
})
buttonColor.addEventListener("click",()=>{
    colorGrid();
})
buttonDarken.addEventListener("click",()=>{
    colorDarken();
})