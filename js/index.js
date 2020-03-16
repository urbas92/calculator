const display = document.querySelector('.display');


document.querySelectorAll('.digits button')
   .forEach( button => button.addEventListener('click' , digitPressed));

function digitPressed(ev) {
    display.value += ev.target.innerText;
}
document.querySelectorAll('.opers button')
   .forEach( button => button.addEventListener('click' , operPressed));

function operPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelector('.reset').addEventListener('click', reset);
     function reset() {
         display.value = " ";

}
document.querySelector('.eq').addEventListener('click', calc);
     function calc() {
         display.value = eval(display.value);
        }
document.querySelector('.back').addEventListener('click', back);
function back() {
    var exp = display.value;
    display.value = exp.substring(0, exp.length - 1);
}
