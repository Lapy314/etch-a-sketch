const container = document.querySelector('.container');
const square = document.querySelector('.square');
let rowDim = 8; //prompt('unesi broj za dimenziju niza');
let dimension = rowDim * rowDim;

function dimensionCalc(num) {

    container.style.gridTemplateRows = `repeat(${rowDim}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${rowDim}, 1fr)`;

    for (let i = 0; i < num; i++) {
        container.innerHTML += `<div class = 'square'></div>`;
    }
}

console.log(dimensionCalc(dimension));
