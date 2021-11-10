const log= console.log;
// Ej-1  cadena = "javascript"; dada la anterior cadena colocar la primera letra en mayúscula
//       output => Javascript

let cadena= "javascript";

let long=cadena.length;

let primer=cadena.charAt(0).toUpperCase();

let resto=cadena.substring(1,long);

log(cadena= primer.concat(resto));



// Ej-2 cadena = "javascript";  dada la anterior cadena colocar la ultima letra en mayúscula
//     output => javascripT

cadena= "javascript";


let ultima= cadena.charAt(long-1).toUpperCase();

resto = cadena.substr(0,long-1)

log(cadena=resto.concat(ultima))


// Ej-3 arr = ["foo", "bar", "baz", "qux", "origin"]
//      buscar en ele array el elemento baz y mostrarlo console
//      output =>  baz

let arr = ["foo", "bar", "baz", "qux", "origin"]

arr.forEach(element => {
    if(element=="bar"){
        log(element)
    }
});
// Ej-4 arr = ["foo", "bar", "baz", "qux", "origin"]
//      vaciar el arr
//      output => [ ]

arr= arr.slice(0,0);

log(arr);

// Ej-5  1 str = "origin"
//   eliminar las vocales del string
//   output => rgn

let str = "origin"

str=str.replace(/[aeiou]/ig,"")

log(str)