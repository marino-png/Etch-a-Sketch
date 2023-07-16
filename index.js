const container = document.querySelector('.container');

for (let i = 0; i < 256; i++){
    const div = document.createElement('div');
    div.classList.add('element');
    div.style.flexBasis = '6.25%';
    container.appendChild(div);

    div.onmouseover = function() {
        div.style.backgroundColor = rgbValues();
    };

    div.onmouseout = function() {
        div.style.backgroundColor = 'rgb(255,255,255)';
    };   
}

function remove(){
    while (container.firstChild ) {
        container.removeChild(container.firstChild);
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
