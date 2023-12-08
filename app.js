const form = document.getElementById("form");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
  showSuccessModal();
  hideAfterSubmit();
});

const checkInputs = () => {
  // Obtenir les valeurs des entrées
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (!usernameValue) {
    //Afficher l'erreur
    //Ajouter la classe d'erreur
    setErrorFor(username, "Le nom ne peut pas être vide");
  } else {
    //Ajouter la classe success
    setSuccessFor(username);
  }

  if (!emailValue) {
    //Afficher l'erreur
    //Ajouter la classe d'erreur
    setErrorFor(email, "L'email ne peut pas être vide");
  } else if (!isEmail(emailValue)) {
    //Afficher l'erreur
    //Ajouter la classe d'erreur
    setErrorFor(email, "L'email n'est pas valide");
  } else {
    //Ajouter la classe success
    setSuccessFor(email);
  }

  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (!passwordValue) {
    //Afficher l'erreur
    //Ajouter la classe d'erreur
    setErrorFor(password, "Le mot de passe ne peut pas être vide");
  } else if (passwordValue.length < 8) {
    //Ajouter la classe success
    setErrorFor(password, "Le mot de passe est trop court");
  } else if (!passwordValue.match(re)) {
    //Ajouter la classe success
    setErrorFor(
      password,
      "Le mot de passe doit contenir minimum 10 caractères dont 1 caractère spécial"
    );
  } else {
    //Ajouter la classe success
    setSuccessFor(password);
  }

  if (!password2Value) {
    //Afficher l'erreur
    //Ajouter la classe d'erreur
    setErrorFor(password2, "Écrivez à nouveau votre mot de passe");
  } else if (passwordValue !== password2Value) {
    //Ajouter la classe success
    setErrorFor(password2, "Ça ne correspond pas");
  } else {
    //Ajouter la classe success
    setSuccessFor(password2);
  }
};

const setErrorFor = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  //ajouter un message d'erreur à l'intérieur de small
  small.innerText = message;

  //Ajouter la classe d'erreur
  formControl.className = "container_form_control error";
};

const setSuccessFor = (input) => {
  const formControl = input.parentElement;

  //ajouter la classe success
  formControl.className = "container_form_control success";
};

const isEmail = (email) => {
  //cela vérifie si l'e-mail est valide
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

const togglePassword = () => {
  // Afficher et cacher le mot de passe
  const psw = document.getElementById("password");

  const show = document.getElementById("show");
  const hide = document.getElementById("hide");

  if (psw.type === "password") {
    psw.type = "text";
    show.style.visibility = "hidden";
    hide.style.visibility = "visible";
  } else {
    psw.type = "password";
    show.style.visibility = "visible";
    hide.style.visibility = "hidden";
  }
};

const toggleConfirm = () => {
  // Afficher et cacher le mot de passe
  const confirm = document.getElementById("password2");

  const show2 = document.getElementById("show2");
  const hide2 = document.getElementById("hide2");

  if (confirm.type === "password") {
    confirm.type = "text";
    show2.style.visibility = "hidden";
    hide2.style.visibility = "visible";
  } else {
    confirm.type = "password";
    show2.style.visibility = "visible";
    hide2.style.visibility = "hidden";
  }
};

// Afficher le modal après validation du formulaire
const showSuccessModal = () => {
  var myElement = document.getElementById("success_form");
  if (myElement) myElement.style.display = "block";
  after_submit.style.display = "none";
};
// Cacher le formulaire après validation
const hideAfterSubmit = () => {
  var myElement = document.getElementById("after_submit");
  if (myElement) myElement.style.display = "none";
};
