const nav = document.querySelector(".navbar");
const hambur= document.querySelector(".hamburguesa");


hambur.addEventListener("click",()=>{

    nav.classList.toggle("active")
    hambur.classList.toggle("active__burguer");

})