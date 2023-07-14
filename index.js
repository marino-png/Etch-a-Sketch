const container = document.querySelector('.container');
for (let i = 0; i < 256; i++){
    const div = document.createElement('div');
    div.classList.add('element');
    container.appendChild(div);
    div.onmouseover = function() {
        div.classList.add('mouseOver');
    };
    div.onmouseout = function() {
        div.classList.remove('mouseOver');
    };
}

