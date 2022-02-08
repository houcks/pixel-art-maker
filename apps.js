var brushColor;

let colors = ['red', 'darkred', ,'firebrick', 'crimson', 'orangered', 'darkorange', 'orange', 'gold', 
            'lightyellow', 'moccasin', 'khaki', 'yellow', 'lawngreen', 'green', 'darkgreen', 'aquamarine', 'cyan',
            'blue', 'mediumblue', 'darkblue', 'darkviolet', 'purple', 'indigo', 'pink', 
            'hotpink', 'deeppink', 'white', 'gray', 'black'];

//removes old color if not matching current brush color or paints new color
function toggleColor(event){
    if(event.target.classList.item(1) !== brushColor){
        event.target.classList.remove(event.target.classList.item(1));
    }
    event.target.classList.toggle(`${brushColor}`);   
}

function createGrid(size){
    let grid = document.getElementById('grid');
        for(var j = 0; j < size; j++){
            let squares = document.createElement('div');
            squares.classList.add('square');
            squares.addEventListener('click', toggleColor);
            grid.appendChild(squares);
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
    currentColor.id = 'currentColor';
    grid.appendChild(currentColor);
}

function changeBrush(event){
    brushColor = event.target.classList.item(1);
    let currentColor = document.getElementById('currentColor');
    currentColor.classList.remove(currentColor.classList.item(0));
    currentColor.classList.toggle(`${brushColor}`);   
}

createGrid(300);
createPalette();