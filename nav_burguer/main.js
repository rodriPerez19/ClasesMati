const nav = document.querySelector(".navbar");
const hambur= document.querySelector(".hamburguesa");
const bur=document.querySelector("#burguer");
const cruz=document.querySelector("#cruz");

hambur.addEventListener("click",()=>{

    nav.classList.toggle("active")
    hambur.classList.toggle("active__burguer");
    bur.classList.toggle("burguer");
    cruz.classList.toggle("cruz");

})

