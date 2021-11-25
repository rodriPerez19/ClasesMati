const lineas= document.querySelector(".lineas__container")
const line1=document.querySelector(".linea");
const line2=document.querySelector(".line");
const navPo=document.querySelector(".nav__opciones");

lineas.addEventListener("click",()=>{

    line1.classList.toggle("active__line1");
    line2.classList.toggle("active__line2");
    navPo.classList.toggle("nav__active");
})
