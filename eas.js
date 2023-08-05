let container = document.getElementById('container');
genGrid(16);

let button = document.getElementById('grid-size');
let gridSize;
button.addEventListener('click', function(e) {
    gridSize = prompt('Enter your desired grid size:', '16');
    gridSize = Number(gridSize);
    container.innerHTML = '';
    genGrid(gridSize);
});

function genGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const newRow = document.createElement('div');
        for (let j = 0; j < gridSize; j++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('box');
            newDiv.addEventListener('mouseover', function(e) {
                newDiv.classList.add('hover');
            });
            newRow.appendChild(newDiv);
        }
        newRow.classList.add('row');
        container.appendChild(newRow);
    }
}



