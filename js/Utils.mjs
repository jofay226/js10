function add(numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}
function sub(numbers) {
  let sum = numbers[0] - numbers[1];
  return sum;
}

function createH(text) {
  const h = document.createElement("h1");
  const content = document.createTextNode(text);
  h.appendChild(content);
  document.body.children[0].children[2].appendChild(h);
}

export { add, sub, createH };
