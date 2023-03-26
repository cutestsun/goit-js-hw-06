const refs = {
  colorName: document.querySelector(".color"),
  changeColorBtn: document.querySelector(".change-color"),
  body: document.querySelector("body"),
};

refs.changeColorBtn.addEventListener("click", onchangeColorBtnClick);

function onchangeColorBtnClick() {
  const randomColor = getRandomHexColor();
  refs.colorName.textContent = randomColor;
  refs.body.style.backgroundColor = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
