const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onLoginFormSubmit);

function onLoginFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return alert("Please, fill in all fields");
  }

  console.log({
    email: `${email.value.trim()}`,
    password: `${password.value.trim()}`,
  });

  event.currentTarget.reset();
}
