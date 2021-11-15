const boton= document.querySelector(".boton");
const input = document.querySelector(".input__txt")
const h1=document.querySelector('.h1Class')

h1.innerHTML="hola como estas";

boton.addEventListener('click',()=>{
    h1.innerHTML=`${input.value}`;
    h1.style.background = 'red'
    h1.style.color = 'black'
})