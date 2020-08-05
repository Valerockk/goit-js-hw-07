const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredHtml = document.querySelector("#ingredients");
const arr = [];

const createLi = ingredients.map((el) => {
  const ing = document.createElement('li');
  arr.push(ing);
  ing.textContent = el;
});

ingredHtml.append(...arr);

console.dir(ingredHtml);
