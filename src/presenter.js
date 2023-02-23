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
  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();
  let saludo = "";



  if (idioma.value == "español")
  {
    if(horaActual >= 0 & horaActual <=4)
    {
      saludo = "Buenas noches";
    }
    if(horaActual >= 5 & horaActual <=13)
    {
      saludo = "Buen día";
    }
    if(horaActual >= 14 & horaActual <=18)
    {
      saludo = "Buenas tardes";
    }
    if(horaActual >= 19 & horaActual <=23)
    {
      saludo = "Buenas noches";
    }
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
  }
    else
  {
    if(horaActual >= 0 & horaActual <=4)
    {
      saludo = "Good night";
    }
    if(horaActual >= 5 & horaActual <=13)
    {
      saludo = "Good morning";
    }
    if(horaActual >= 14 & horaActual <=18)
    {
      saludo = "Good afternoon";
    }
    if(horaActual >= 19 & horaActual <=23)
    {
      saludo = "Good evening";
    }
    if (sexo.value == "masculino")
    {
      if (edad.value >30)
      {
        div.innerHTML = saludo + " sir " +  nombre.value;
        
      }
      else
      {
        div.innerHTML = saludo + " young " +  nombre.value;
      }
    }
    else{
      if (edad.value>30)
      {
        div.innerHTML = saludo + " lady " +  nombre.value;
      }
      else
      {
        div.innerHTML = saludo + "miss " +  nombre.value;
      }
    }
  }
  



  
});



