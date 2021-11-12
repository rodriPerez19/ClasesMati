const log= console.log;
// 1-
//  arr = [1,3,4,2,6,7,9,1, 8]
// Crear una función que indique el total de elementos impares de un array
//  output => 5
// ===========================================================

let arr = [1,3,4,2,6,7,9,1, 8]

function inpar(array){
    let cont=0;
    array.forEach(element => {
        if(element%2!=0){ cont++}
    });
    return cont

}

log(inpar(arr))


// 2-
//   str = "hola mundo desde javascript"
//   pasar un string en array, indicar los espacios en blanco por "-"
//   output => ["hola","-", "mundo", "-", "desde", "-", "javascript"]
// ===============
let str = "hola mundo desde javascript";

str=str.replace(/ /g," - ").split(" ");
log(str)



// 3-
// Crear una variable que contenga el siguiente array :
//  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Definir una variable filtered que muestre los valores de los los numeros que son pares utilizando el método .filter()

arr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.filter((element)=>{
    if(element%2==0)
        log(element)
})


// 4- Crear una variable que filtre los animales que no sean 'cat' usar filter
// const pets = ['cat', 'dog', 'elephant','hawk','snake','cat']
const pets = ['cat', 'dog', 'elephant','hawk','snake','cat']

arr2= pets.filter((element)=>{
    if(element!="cat")
        return element
})
log(arr2)

// 5- Crear una variable que muestre solo los nombres de los productos del siguiente array
// hacerlo con .map
const productos = [
    {id:2, nombre: 'Remera muy fachera', precio:250},
    {id:5, nombre: 'Pantalon muy fachero', precio:400},
    {id:6, nombre: 'Camperon invierno', precio:699},
    {id:34, nombre: 'Guantes negros', precio:199},
];


let foo= productos.map((elemen)=>{

    return elemen.nombre

})
log(foo)


// 6-  Usando el reduce retornar un solo array. pista: .concat
// const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

foo= data.reduce((pasado,presente)=>{

    return pasado.concat(presente)

})
log(foo)