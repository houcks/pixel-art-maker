var brushColor = 'black';

let colors = ['red', 'darkred', 'crimson', 'darkorange', 'orange', 'gold', 
            'lightyellow', 'khaki', 'yellow', 'lawngreen', 'green', 'darkgreen', 
            'blue', 'mediumblue', 'darkblue', 'darkviolet', 'purple', 'indigo', 'pink', 
            'hotpink', 'deeppink', 'white', 'gray', 'black'];

let grid = document.getElementById('grid');
grid.style.cssText = "height: 100%; width: 100%;"

//removes old color if not matching current brush color or paints new color
function toggleColor(event){
    if(event.target.classList.item(1) !== brushColor){
        event.target.classList.remove(event.target.classList.item(1));
    }
    event.target.classList.toggle(`${brushColor}`);   
}

function createGrid(size){
        for(var j = 0; j < size; j++){
            let squares = document.createElement('div');
            squares.classList.add('square');
            squares.addEventListener('click', toggleColor);
            grid.appendChild(squares);
        }
}

//loops over array of colors to create palette of colors to choose from
function createPalette(){
    let footer = document.querySelector('footer');
    for(var i = 0; i < colors.length; i++){
        let colorSquare = document.createElement('div');
        colorSquare.classList.toggle('palette');
        colorSquare.classList.add(`${colors[i]}`);
        colorSquare.addEventListener('click', changeBrush);
        footer.appendChild(colorSquare);
    }

    let currentColor = document.createElement('div');
    currentColor.classList.add('currentColor');
    footer.appendChild(currentColor);
}

function changeBrush(event){
    brushColor = event.target.classList.item(1);
}

createGrid(2059);
createPalette();
