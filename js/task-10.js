const refs = {
  numberInput: document.querySelector('input[type="number"]'),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  container: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", () =>
  createBoxes(refs.numberInput.value)
);
refs.destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const divArr = [];
  for (let i = 0, j = 30; i < amount; i += 1, j += 10) {
    const divEl = document.createElement("div");
    divEl.style.width = `${j}px`;
    divEl.style.height = `${j}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    divArr.push(divEl);
    console.log(...divArr);
  }
  refs.container.append(...divArr);
}

function destroyBoxes() {
  refs.container.innerHTML = "";
  refs.numberInput.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
