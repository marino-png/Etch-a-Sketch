const container = document.querySelector('.container');
const gridElements = [];

for (let i = 0; i < 256; i++){
    const div = document.createElement('div');
    div.classList.add('element');
    div.style.flexBasis = '6.25%';
    container.appendChild(div);
    gridElements.push(div);

    div.onmouseover = function() {
        div.style.backgroundColor = rgbValues();
    };

    div.onmouseout = function() {
        div.style.backgroundColor = 'rgb(255,255,255)';
    };   
}

function remove(){
    for (let i = 0; i < 256; i++){
        container.removeChild(gridElements[i]);
    }
}

function chooseGrid(){
    remove();
    let number = prompt('please enter a number' );
    let numericValue = parseFloat(number);
    let percentage = (100/numericValue)+'%';
    number = Math.pow(number,2);

    for (let i = 0; i < number; i++){
        const divs = document.createElement('div');
        divs.classList.add('element');
        container.appendChild(divs);
        divs.style.flexBasis = percentage;
        gridElements.push(divs);
    
        divs.onmouseover = function() {
            divs.style.backgroundColor = rgbValues();
        };
    
        divs.onmouseout = function() {
            divs.style.backgroundColor = 'rgb(255,255,255)';
        };   
    }
}
function rgbValues(){
    let rgbValue = 'rgb('+getRandomNumber()+','+getRandomNumber()+','+getRandomNumber()+')';
    return rgbValue;
}
function getRandomNumber(){
    const getRandomNumber = Math.floor(Math.random()*255);
    return getRandomNumber;
}
