const liItem = document.querySelectorAll('.item');
console.log(`В списке ${liItem.length} категории.`);

const forEachItem = liItem.forEach(el => {
  console.log(`Категория: ${el.querySelector('h2').textContent}`);
  console.log(`Количество элементов: ${el.querySelector('ul').children.length}`);
});