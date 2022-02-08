var brushColor;
var paint = false;
document.body.addEventListener('mousedown', function () {paint = true});
document.body.addEventListener('mouseup', function () {paint = false});

let colors = ['red', 'darkred', ,'firebrick', 'crimson', 'orangered', 'darkorange', 'orange', 'gold', 
            'lightyellow', 'moccasin', 'khaki', 'yellow', 'lawngreen', 'green', 'darkgreen', 'aquamarine', 'cyan',
            'blue', 'mediumblue', 'darkblue', 'darkviolet', 'purple', 'indigo', 'pink', 
            'hotpink', 'deeppink', 'white', 'gray', 'black'];

//creates a grid of 'square' div's and add event listeners to trigger coloring
function createGrid(size){
    let grid = document.getElementById('grid');
        for(var j = 0; j < size; j++){
            let squares = document.createElement('div');
            squares.classList.add('square');
            squares.addEventListener('mousedown', function() {paint = true; toggleColor()});
            squares.addEventListener('mouseenter', toggleColor);
            grid.appendChild(squares);
        }
}

//removes old color if not matching current brush color or paints new color
function toggleColor(){
    var square = document.querySelectorAll(':hover');
    square = square[square.length - 1];
    if(paint === true && square.classList.item(0) === 'square'){
        if(square.classList.item(1) !== brushColor){
            square.classList.remove(square.classList.item(1));
        }
        square.classList.add(`${brushColor}`); 
    }
}

//loops over array of colors to create palette of colors to choose from
function createPalette(){
    for(var i = 0; i < colors.length; i++){
        let colorSquare = document.createElement('div');
        colorSquare.classList.toggle('palette');
        colorSquare.classList.add(`${colors[i]}`);
        colorSquare.addEventListener('click', changeBrush);
        grid.appendChild(colorSquare);
    }

    let currentColor = document.createElement('div');
    currentColor.textContent = 'Current Color';
    grid.appendChild(currentColor);
    let color = document.createElement('div');
    color.id = 'currentColor';
    grid.appendChild(color);
}

function changeBrush(event){
    brushColor = event.target.classList.item(1);
    let currentColor = document.getElementById('currentColor');
    currentColor.classList.remove(currentColor.classList.item(0));
    currentColor.classList.toggle(`${brushColor}`);   
}

createGrid(300);
createPalette();