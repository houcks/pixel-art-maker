
let grid = document.createElement('div');
grid.classList.add('grid');
grid.style.cssText = "height: 100%; width: 100%;"
document.body.appendChild(grid);


function toggleColor(event){
    event.target.classList.toggle('red');   
}

function createGrid(colLength, rowLength){
    for(var i = 0; i < rowLength; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        grid.appendChild(row);
        for(var j = 0; j < colLength; j++){
            let square = document.createElement('div');
            square.classList.add('column');
            square.addEventListener('click', toggleColor);
            row.appendChild(square);
        }
    }
}

function createPalette(){
    let footer = document.querySelector('footer');
    let colors = ['red', 'blue'];
    for(var i = 0; i < 2; i++){
        let colorSquare = document.createElement('div');
        colorSquare.classList.add('palette');
        //colorSquare.style.classList.toggle(`${colors[i]}`)
        footer.appendChild(colorSquare);
    }
}
createGrid(2,2);
createPalette();
