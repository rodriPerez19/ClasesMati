const titulo=document.querySelector("#titulo");
const parrafo=document.querySelector("#parrafo");
const body= document.querySelector('body');
const button= document.querySelector('button');
const font= document.querySelector('#boton');
console.log(body);

button.addEventListener("click",()=>{
    font.classList.toggle("fa-toggle-on");
    titulo.classList.toggle("dark");
    parrafo.classList.toggle("dark");
    body.classList.toggle("bg-black");
})