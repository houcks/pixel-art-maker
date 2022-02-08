var brushColor;
var paint = false;
grid.addEventListener('mousedown', function () {paint = true});
grid.addEventListener('mouseup', function () {paint = false});

//array used for color palette creation
let colors = ['red', 'darkred','firebrick', 'crimson', 'orangered', 'darkorange', 'orange', 'gold', 
            'lightyellow', 'moccasin', 'khaki', 'yellow', 'lawngreen', 'green', 'darkgreen', 'aquamarine', 'cyan',
            'blue', 'mediumblue', 'darkblue', 'darkviolet', 'purple', 'indigo', 'pink', 
            'hotpink', 'deeppink', 'white', 'gray', 'black'];

//creates a grid of 'square' div's and add event listeners to trigger coloring
function createGrid(size){
    var grid = document.getElementById('grid');
        for(var j = 0; j < size; j++){
            let squares = document.createElement('div');
            squares.classList.add('square');
            squares.addEventListener('mousedown', function (event){paint = true; toggleColor(event)});
            squares.addEventListener('mouseenter', toggleColor);
            grid.appendChild(squares);
        }
}

//removes old color if not matching current brush color or paints new color
function toggleColor(event){
    console.log(event.target)
    if(paint === true){
                event.target.style.backgroundColor = brushColor; 
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
    palette = document.getElementById('colorPicker');
    palette.addEventListener('input', customColor)
    grid.appendChild(palette)

    //diplays current color selected from palette
    var currentColor = document.createElement('div');
    currentColor.textContent = 'Current Color';
    grid.appendChild(currentColor);
    let color = document.createElement('div');
    color.id = 'current-color';
    grid.appendChild(color);
}

//called from createPallete event listener to set color
function changeBrush(event){
    brushColor = event.target.classList.item(1);
    var currentColor = document.getElementById('current-color');
    currentColor.style.backgroundColor = brushColor; 
}

//sets custom color from input and sets currentColor bgc 
function customColor(){
    brushColor = document.getElementById("colorPicker").value;
    document.getElementById('current-color').style.backgroundColor = brushColor;
}

//sets event listener to clear button that loops through and removes background color
var clear = document.getElementById('clear');
clear.addEventListener('click', clearBoard)
function clearBoard(){
    var squares = document.getElementsByClassName('square');
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = "";
    }
}
createGrid(1000);
createPalette();