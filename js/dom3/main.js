// 1.
// Crear un boton que al ser clickeado muestre/oculte un elemento (toggle)
// 2.
// Crear un <ul>.
// Crear un input
// Crear un li con el valor del input 
// (como si fueran notas que vas agregando)
// 3.
// Usando new Date() insertar en el html el año actual junto a un saludo
// 4.
// Crear un contenedor de 400x400 con 2 botones.
// Al ser clickeado el contenedor debe cambiar el background a rojo
// Cada boton debe estar dentro del contenedor y al clickear dar un console.log('boton 1/2 se ejecuto')
// 5.
// Crear un form completamente desde javascript
// para insertar en nuestro html


//ejercicio 1
let boton = document.createElement('button');
const p=document.querySelector('#elemento');
const divLista=document.querySelector("#listas");

boton.innerHTML="Ocultar";
boton.id="btn";
document.body.before(boton);


boton.addEventListener("click",()=>{
    p.classList.toggle("ocultar");
})
//ejercicio 2
let ul= document.createElement('ul');
ul.innerHTML="listaa";
let input= document.createElement('input');

input.placeholder="ingrese una lista";
ul.appendChild(input);
divLista.appendChild(ul)

input.addEventListener('blur',()=>{
    let li= document.createElement('li');
    li.innerHTML=input.value;
    ul.appendChild(li)
})

//Ejercicio 3

let parrafo= document.createElement('p');

let date= new Date();
parrafo.innerHTML="hola, hoy es "+date.toLocaleDateString()

divLista.after(parrafo)

// 4.
// Crear un contenedor de 400x400 con 2 botones.
// Al ser clickeado el contenedor debe cambiar el background a rojo
// Cada boton debe estar dentro del contenedor y al  


let contenedor= document.createElement('div')

contenedor.style.width="400px"
contenedor.style.height="400px"

contenedor.innerHTML="<button id='rojo'>rojo</button><button id='amarillo'>amarillo</button>";

divLista.appendChild(contenedor)
const rojo= document.querySelector("#rojo")
const amarillo= document.querySelector("#amarillo")

rojo.addEventListener("click",()=>{
    contenedor.classList.add('rojo');
    contenedor.classList.remove('amarillo');
    
    console.log("boton rojo");
})

amarillo.addEventListener("click",()=>{
    contenedor.classList.add('amarillo');
    contenedor.classList.remove('rojo');
    console.log("boton amarillo")
})

// 5.
// Crear un form completamente desde javascript
// para insertar en nuestro html

let form= document.createElement("form");
let inputName= document.createElement("input");
let inputApellido= document.createElement("input");
let submit= document.createElement("button");
form.classList.add('formulario');

inputName.type="text";
inputName.placeholder="ingrese su nombre";
inputApellido.type="text";
inputApellido.placeholder="ingrese su Apellido";
submit.type="submit";
submit.innerHTML="Enviar";

form.appendChild(inputName);
form.appendChild(inputApellido);
form.appendChild(submit);

document.body.appendChild(form)