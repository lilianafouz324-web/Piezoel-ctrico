
const menuBtn = document.querySelector("#menu-btn");
const navMenu = document.querySelector("#nav-menu");

menuBtn.addEventListener("click", function() {

  navMenu.classList.toggle("oculto");
});



const formulario = document.querySelector("#form-contacto");
const inputNombre = document.querySelector("#nombre");
const inputEmail = document.querySelector("#email");
const mensajeError = document.querySelector("#mensaje-error");

formulario.addEventListener("submit", function(evento) {
  
  evento.preventDefault();

  
  if (inputNombre.value.trim() === "") {
    mensajeError.textContent = "Por favor, completá tu nombre.";
    inputNombre.focus();
    return; 
  }


  if (!inputEmail.value.includes("@")) {
    mensajeError.textContent = "El correo electrónico no es válido (falta @).";
    inputEmail.focus();
    return;
  }

 
  mensajeError.textContent = "";
  alert("¡Formulario enviado con éxito!");
  formulario.reset(); 
});



const temaBtn = document.querySelector("#tema-btn");

temaBtn.addEventListener("click", function() {
  document.body.classList.toggle("oscuro");
});
