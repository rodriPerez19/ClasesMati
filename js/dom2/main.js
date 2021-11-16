const p= document.querySelectorAll('p');
const a= document.querySelector('a');
console.log(p)
let contador=0;
p.forEach(element => {
    contador+=element.textContent.length
    element.style="background:yellow";
});

let button= document.createElement("button")

button.innerHTML=contador;

document.body.before(`Cantidad de palabras ${contador}`)

a.addEventListener('click',(e)=>{

    e.preventDefault();

    p[0].innerHTML=a.textContent;
})

const img= document.createElement('img');

img.src="discord.png";

document.body.appendChild(img)