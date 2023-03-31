const btnStart = document.querySelector('[data-start]');
const btnClose = document.querySelector('[data-stop]');
const body = document.querySelector('body');

btnStart.addEventListener('click', StartChangeColor);
btnClose.addEventListener('click', StopChangeColor);

function StartChangeColor() {
  timerId = setInterval(changeColor, 1000);
  btnStart.setAttribute('disabled', '');
}

function StopChangeColor() {
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
