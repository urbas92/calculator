

const display = document.querySelector('.display');

document.querySelectorAll(".digits button")
    .forEach( button => button.addEventListener('click', digitPressed));

function digitPressed(ev) {
  display.value += ev.target.innerText;
}

document.querySelectorAll('.opers button')
      .forEach( button => button.addEventListener('click',operPressed));

function operPressed (ev) {
  display.value += ev.target.innerText;
  }


document.querySelector('.eq').addEventListener('click',calculate);

function calculate () {
  display.value = eval(display.value).toFixed(2);
}

function clean () {
  display.value = "";
}

function back() {
    display.value = exp.substring(0, display.value.length-1);
}
