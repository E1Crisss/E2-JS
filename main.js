/* 👉 Crear un archivo HTML con un input de tipo number, un botón y un contenedor en el cual renderizar el resultado de la búsqueda. 

👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.
👉 Renderizar en el contenedor un h2 con el nombre y en un h3 con el precio de la pizza cuyo id coincida con el numero ingresado en el input. 

🚨 Si el número ingresado no coincide con ningún id, renderizar (no sirve un alert) un mensaje de error en el contenedor. 
🚨 Si no se ingresa un número, renderizar (no sirve un alert) un mensaje de error diferente en el contenedor. 

🆙 Entregar el link de Github , en el cual debe estar linkeado el deploy del Vercel de su aplicación (mediante Github nosotros deberíamos poder ver el Vercel vinculado a su repositorio).  */

const menuPizzas = [];

class Pizzas {
  constructor(id, nombre, ingredientes, precio) {
    this.id = id;
    this.nombre = nombre;
    (this.ingredientes = ingredientes), (this.precio = precio);
  }
}

const Muzarella = new Pizzas(
  0,
  "Muzarella",
  ["salsa", "queso muzarella", "aceituna"],
  1200
);
const Napolitana = new Pizzas(
  1,
  "Napolitana",
  ["salsa", "queso muzarella", "tomate", "aceituna"],
  1500
);
const Calabresa = new Pizzas(
  2,
  "Calabresa",
  ["salsa", "queso muzarella", "longaniza calabresa cortada en rodajas"],
  1800
);
const Espinaca = new Pizzas(
  3,
  "Espinaca a la crema",
  ["salsa", "queso muzarella", "aceituna", "aceite de oliva", "espinaca"],
  1700
);
const Fugazzetton = new Pizzas(
  4,
  "Fugazzettón",
  [
    "cebolla en juliana",
    "queso cremoso",
    "jamón",
    "tomate al natural",
    "aceite de oliva",
    "parmesano",
  ],
  1800
);
const Primavera = new Pizzas(
  5,
  "Primavera",
  ["palmitos", "huevo duro", "morrones", "salsa golf"],
  2000
);

menuPizzas.push(
  Muzarella,
  Napolitana,
  Calabresa,
  Espinaca,
  Fugazzetton,
  Primavera
);

const btnS = document.getElementById("submit"),
  $hgroup = document.getElementById("render");

const buscarID = () => {
  while ($hgroup.firstChild) {
    $hgroup.removeChild($hgroup.firstChild);
  }

  let inputValue = document.getElementById("numberID").value;

  if(inputValue === "") {
    let inputError = document.getElementById("numberID");
    inputError.setAttribute('aria-invalid', 'true')
    let $error = document.createElement("h2");
    $error.style.color = "red";
    $error.innerHTML = `<strong>🚨 Ingresar un Numero 🚨<strong>`;
    $hgroup.appendChild($error);
    
  } else {
    const mostrar = menuPizzas.find((pizza) => pizza.id == inputValue);

    if (mostrar) {
      let inputError = document.getElementById("numberID");
      inputError.setAttribute('aria-invalid', 'false')
      let $name = document.createElement("h2");
      let $price = document.createElement("h3");
      $name.innerHTML = `🍕 ${mostrar.nombre}`;
      $price.innerHTML = `💲 ${mostrar.precio}`;

      $hgroup.appendChild($name);
      $hgroup.appendChild($price);
    } else {
      let inputError = document.getElementById("numberID");
      inputError.setAttribute('aria-invalid', 'true');
      let $error = document.createElement("h2");
      $error.style.color = "red";
      $error.innerHTML = `<strong>🚨 No existe Pizza con esa ID 🚨<strong>`;
      $hgroup.appendChild($error);
    }
  }
};

$hgroup.style.textAlign = "center";

const removeRender = () => {
  document.getElementById("numberID").value = "";
};

btnS.addEventListener("click", (e) => {
  buscarID();
  removeRender();
});