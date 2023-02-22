import sumar from "./sumador";


const nombre = document.querySelector("#nombre");
const form = document.querySelector("#saludar");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = nombre.value;
 

  div.innerHTML = "<p> Hola " + username + "</p>";


});

