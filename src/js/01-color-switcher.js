const btnStart = document.querySelector('[data-start]');
const btnClose = document.querySelector('[data-stop]');
const body = document.querySelector('body');

btnStart.addEventListener('click', startChangeColor);
btnClose.addEventListener('click', stopChangeColor);

let timerId = null;

function startChangeColor() {
  timerId = setInterval(changeColor, 1000);
  btnStart.setAttribute('disabled', '');
}

function stopChangeColor() {
  btnStart.removeAttribute('disabled');
  clearInterval(timerId);
}

function changeColor() {
  const color = getRandomHexColor();
  body.style.backgroundColor = `${color}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
