const input = document.querySelector("#controls > input");
const creatBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector("#boxes");

const randomColor = () => {
  return `rgb(${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)})`;
};

const createBoxes = (amount) => {
  let size = 30;
  const arr = [];
  for (let i = 1; i <= amount; i++) {
    const box = document.createElement("div");
    box.style.backgroundColor = randomColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    arr.push(box);
    size += 10;
  }
  boxes.append(...arr);
};

const destroyBoxes = () => {
  boxes.innerHTML = "";
};

creatBtn.addEventListener("click", function () {
  createBoxes(input.value);
});

destroyBtn.addEventListener("click", destroyBoxes);
