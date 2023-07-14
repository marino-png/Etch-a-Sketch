const container = document.querySelector('.container');
const gridElements = [];

for (let i = 0; i < 256; i++){
    const div = document.createElement('div');
    div.classList.add('element');
    div.style.flexBasis = '6.25%';
    container.appendChild(div);
    gridElements.push(div);

    div.onmouseover = function() {
        div.classList.add('mouseOver');
    };

    div.onmouseout = function() {
        div.classList.remove('mouseOver');
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
        const div = document.createElement('div');
        div.classList.add('element');
        container.appendChild(div);
        div.style.flexBasis = percentage;
        gridElements.push(div);
    
        div.onmouseover = function() {
            div.classList.add('mouseOver');
        };
    
        div.onmouseout = function() {
            div.classList.remove('mouseOver');
        };   
    }
}
