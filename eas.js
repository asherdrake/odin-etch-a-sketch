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
    for (let i = 0; i < gridSize * gridSize; i++) {
        const newBox = document.createElement('div');
        newBox.classList.add('box');
        container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        newBox.addEventListener('mouseover', function(e) {
            newBox.classList.add('hover');
        });
        container.appendChild(newBox);
    }
}



