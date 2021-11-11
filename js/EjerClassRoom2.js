const log=console.log;
// 1-
//  str = "origin"
//   cambiar las vocales por el numero 1
//   output => 1r1g1n

let str = "origin"

log(str=str.replace(/[aeiou]/ig,"1"))

// ===========================================================


// 2-
//  Crear una función que acepte un parámetro con los valores desde 1 hasta 5
//  si valor numérico ingresado es 1 mostrar una lista del 1 al 10, si es 2 mostrar del 2 al 10,
//  teniendo en cuenta el limite es 10
//   posibles salidas esperadas:
//   output => 1...10
//   output => 2...10
//   output => 3...10
//   output => 4...10
//   output => 5...10
// ===========================================================

function hasta10(num){
    let listNum="";
    if(num<=5){
       
        for(num;num<=10;num++)
        {
            listNum+=String(num)
        }
    }
    return listNum;
}

log(hasta10(5))
// 3-
//   arr = [10, "20", 30, "40", 50]
//   verificar cada elemento sea de  tipo number y sino lo es cambiar su  tipo
//   a number
//   output => [10, 20, 30, 40, 50]
// ===========================================================

let arr = [10, "20", 30, "40", 50];
const long= arr.length;

for(i=0;i<long;i++){

    if(typeof arr[i] != Number){
        arr[i]= Number(arr[i])
    }
}
log(arr)


// 4-
//   arr = [2, 4, 7, 1, 2, "foo", 7, "bar", "qux", 3, "foo"]
//   eliminar los elementos repetidos, nota: (el segundo elemento repetido)
//   output => [2, 4, 7, 1,  "foo", "bar", "qux", 3]
// ===========================================================
   arr = [2, 4, 7, 1, 2, "foo", 7, "bar", "qux", 3, "foo"]

//la funcion filter itera el array y si la condicion dentro da true, lo agrega al nuevo array ese elemento
//indexof retorna la posision de la primera vez que aparece un elemento
let result = arr.filter((item,index)=>{
    return arr.indexOf(item) === index;
})
log(result); 



