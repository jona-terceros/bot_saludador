  import sumar from "./sumador";


const nombre = document.querySelector("#nombre");
const form = document.querySelector("#saludar");
const sexo = document.querySelector("#box")
const div = document.querySelector("#saludador");



form.addEventListener("submit", (event) => {
  event.preventDefault();

  //const username = nombre.value;
  //div.innerHTML = "<p> Hola " + username + "</p>";

  let saludo = "";
  if (sexo.value == "masculino")
  {

    div.innerHTML = saludo + " señor " +  nombre.value;

  }
  else{

    div.innerHTML = saludo + " señora " +  nombre.value;
   
  }
});

