let count = 0

function increase () {
    count++
    setText();
}

function decrease (){
    count--
    setText();
}

function reset (){
    count = 0;
    setText();
    const resetNoticication = document.createElement('p')
    resetNoticication.textContent = 'You have reset the number'
    document.querySelector('main').appendChild(resetNoticication)
}

function setText() {
    numberText.textContent = count;
}

const plusBtn = document.querySelector("#plus-btn");
const minusBtn = document.querySelector("#minus-btn");
const resetBtn = document.querySelector("#reset-btn")
const numberText = document.querySelector('#counter');

plusBtn.addEventListener('click', increase);
minusBtn.addEventListener('click', decrease);
resetBtn.addEventListener('click', reset);

const themeBtns = document.querySelectorAll('.theme-buttons')

function selectTheme(event) {
    const theme = event.target.textContent;
    document.querySelector("main").className = theme;
    document.body.className = theme;
} 

for(let i = 0; i < themeBtns.length; i++)
themeBtns[i].addEventListener("click", selectTheme);
