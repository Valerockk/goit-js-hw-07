const counterValue = document.querySelector("#value");
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

const decrement = () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
};

const increment = () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
};

btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);

