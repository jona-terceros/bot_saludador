  import sumar from "./sumador";


const nombre = document.querySelector("#nombre");
const form = document.querySelector("#saludar");
const sexo = document.querySelector("#box")
const div = document.querySelector("#saludador");
const edad = document.querySelector("#edad")


form.addEventListener("submit", (event) => {
  event.preventDefault();

  //const username = nombre.value;
 

  //div.innerHTML = "<p> Hola " + username + "</p>";
  let saludo = "";
  if (sexo.value == "masculino")
  {
    if (edad.value >30)
    {
      div.innerHTML = saludo + " señor " +  nombre.value;
    }
    else
    {
      div.innerHTML = saludo + " joven " +  nombre.value;
    }
  }
  else{
    if (edad.value>30)
    {
      div.innerHTML = saludo + " señora " +  nombre.value;
    }
    else
    {
      div.innerHTML = saludo + "señorita " +  nombre.value;
    }
  }
});



