// Create 256 divs in a container
const field = document.querySelector('#field');

for (let i = 0; i < 256; i++) {
    field.appendChild(document.createElement('div'));
}

let squares = field.querySelectorAll('div');
squares.forEach(function(elem) {
    elem.style.width = '39px';
    elem.style.height = '39px';
});

// Add black bg (default)
function toBlack() {
squares.forEach(function(elem) {
    elem.addEventListener('mouseenter', function (event) {
    event.target.style.backgroundColor = 'black';
    });
});
}
toBlack();
const blackBtn = document.querySelector('#black');
blackBtn.onclick = toBlack;

// Clear all
const clearBtn = document.querySelector('#clear');
function clear() {
    squares.forEach(function(elem) {
        elem.style.backgroundColor = 'transparent';
    });
}
clearBtn.onclick = clear;

// Eraser 
const eraserBtn = document.querySelector('#eraser');
function eraser() {
    squares.forEach(function(elem) {
        elem.addEventListener('mouseenter', function (event) {
        event.target.style.backgroundColor = 'transparent';
        });
    });
}
eraserBtn.onclick = eraser;

// Grid size
const displayPixels = document.querySelector('#grid-pixels');
const slider = document.querySelector('#slider');
const createBtn = document.querySelector('#new-grid');

displayPixels.textContent = '16 x 16';

slider.addEventListener('change', function() {
    displayPixels.textContent = slider.value + ' x ' + slider.value;
});

function newGrid() {
    let size = 640 / slider.value - 1;
    field.textContent = '';
    for (let i = 0; i < slider.value * slider.value; i++) {
        field.appendChild(document.createElement('div'));
    }
    squares = field.querySelectorAll('div');
    squares.forEach(function(elem) {
        elem.style.width = size + 'px';
        elem.style.height = size + 'px';
    });
    toBlack();
}

createBtn.onclick = newGrid;

//Random colours
const randomBtn = document.querySelector('#random');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

let rgbValue = function() {
    return getRandomIntInclusive(0, 255);
};

function generateColour() {
    squares.forEach(function(elem) {
        elem.addEventListener('mouseenter', function (event) {
        event.target.style.backgroundColor = `rgb(${rgbValue()}, ${rgbValue()}, ${rgbValue()})`;
        });
    });
}
randomBtn.onclick = generateColour;