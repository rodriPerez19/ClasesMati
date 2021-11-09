// Ejercicio Nº 1
// Matias olvidó el nombre de sus conocidos y otras cosas.
// Dando un string determinado tiene que devolver la relación que tiene
// Ricardo = "Ricardo es tu tio", Roberto = "Roberto es tu hermano", Argentina = "El país al que perteneces"
// Dinamita = "Es tu gato"

const form= document.querySelector('form')
const text= document.querySelector('.text');
const log=console.log;

form.addEventListener('submit',e =>{
    e.preventDefault();
    let valor= form.string.value;
    switch(valor)
    {
        case "ricardo": alert("Ricardo es tu tio");
            break;
        case "roberto": alert("Roberto es tu hermano")
            break;
        case "argentina":alert("El pais al que perteneces");
            break;
        case "dinamita": alert("Es tu gato");
            break;
    }
})


// Ejercicio Nº2
// Crear una función que tome como parametro 2 numeros y retorne true si alguno es 100 o si la suma de ambos es 100
function isTrue(num1,num2){

    if(num1==100 ||num2==100||num1+num2==100){
        return true
    }
    else return false;
}

log(isTrue(50,50));

// Ejercicio Nº3
// Pasado un string "index.html", "script.js" debe devolver la extension del archivo ej: ".js"

function extencion(string){

    if(string.includes(".")){

        string=string.split(".");

        return string[string.length-1];
    }
    else
    return "no tiene extencion su archivo"
}

log(extencion("index.html"));
// Ejercicio Nº4
// Crear dos funciones una que convierta los grados Cº a Fº y viceversa
// ºF = (ºC · 1.8) + 32
// ºC = (ºF -32) / 1.8
//(faren- 32) * 5 / 9;
// 9 / 5 + 32;

function CToF(num){

    return num*33.8
}
function FToC(num){
    return (num-32)* (5/9)
}

log(CToF(30))
log(FToC(43))

/*  Ejercicio Nº5
    Crear una función que muestre por consola la fecha y hora con el siguiente formato:
    Hoy es : Miercoles
    Hora actual: 10:34
*/

function fecha(){
    fecha= new Date();
    fecha.get
    dia=fecha.getDate()
    hora=fecha.getHours()
    min=fecha.getMinutes()
    return "hoy es lunes "+dia+" hora actual "+hora+":"+min;
}

log(fecha())