const refs = {
  fontSizeControl: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.fontSizeControl.addEventListener("input", onFontSizeControlInput);

function onFontSizeControlInput(event) {
  console.log(event.currentTarget.value);
  refs.text.style.fontSize = `${event.currentTarget.value}px`;
}
