const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = form["firstname"].value;
  const lastName = form["lastname"].value;
  const email = form["email"].value;
  const password = form["password"].value;

  if (firstName === "") {
    addErrorTo("firstname", "First Name is required");
  } else {
    removeErrorTo("firstname");
  }

  if (lastName === "") {
    addErrorTo("lastname", "Last Name is required");
  } else {
    removeErrorTo("lastname");
  }

  if (email === "") {
    addErrorTo("email", "Email Address is required");
    emailPlaceholder();
  } else if (!isValid(email)) {
    addErrorTo("email", "Looks like this is not an email");
  } else {
    removeErrorTo("email");
  }

  if (password === "") {
    addErrorTo("password", "Password is required");
  } else {
    removeErrorTo("password");
  }
});

function emailPlaceholder() {
  const emailPlace = document.getElementsByName("email")[0];
  emailPlace.setAttribute("placeholder", "email@example.com");
}

function addErrorTo(field, message) {
  const formControl = form[field].parentNode;
  formControl.classList.add("error");
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function removeErrorTo(field) {
  const formControl = form[field].parentNode;
  formControl.classList.remove("error");
  const small = formControl.querySelector("small");
}

function isValid(email) {
  var re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase());
}
