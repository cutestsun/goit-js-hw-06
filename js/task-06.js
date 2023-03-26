const userInput = document.querySelector("#validation-input");

userInput.addEventListener("blur", onUserInputBlur);

function onUserInputBlur(event) {
  userInput.classList.add("invalid");
  if (event.currentTarget.value.length >= userInput.dataset.length) {
    userInput.classList.replace("invalid", "valid");
  } else {
    userInput.classList.replace("valid", "invalid");
  }
}
