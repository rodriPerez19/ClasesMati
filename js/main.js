
log=console.log;// Ejercicio Nº1:  
// Crear una función que tome los años de una persona y retorne la edad en días

function yearsToDate(anios){
    return "los años pasados a dias son "+ anios*366;
}
log(yearsToDate(33));

// Ejercicio Nº2:  
// Crear una función que tome horas y las convierta a segundos
function hsToMin(hs){

    return hs*60
}
log( "Las horas pasados a munitos son "+hsToMin(44))

// Ejercicio Nº3:
// Crear una función que tome un array y devuelva un solo string de cada elemento separado por espacio.
function arrayToString(array){

    
    let result = array.toString()
    result=result.replace(/,/ig," ")
    return result;
}

log(arrayToString([20,30,50,60]))
// Ejercicio Nº4:
// Crear una funcion que tome un array y lo invierta

function arrayReverse(array){

   return array.reverse()
}
log(arrayReverse([20,30,50,60]))

// Ejercicio Nº5:
// Crear una funcion que tome un array y lo invierta sin cambiar el original.
function arrayReverse2(array){
    
    let copia=[];

    for(i=array.length-1; i >= 0;i--){
        copia.push(array[i])
    }

    log("Este es el array invertido "+ copia);
    log("Este es el original sin revertir "+array);
}

arrayReverse2([20,30,50,60])

// Ejercicio Nº6:
// Crear una función que concatene 2 arrays

function concatArray(array1,array2){
    
    return array1.concat(array2)
}
log(concatArray([1,2,3,4,5],[6,7,8,9,10]));
// Ejercicio Nº7:
//  Crear una función que retorne true si un array contiene un elemento

function noIsEmpty(array){

    if(array.length==0){
        return false
    }
    else return true

}

log(noIsEmpty([1,2,4,5,6]));
log(noIsEmpty([]));


// Ejercicio Nº8
// Crear una función que te diga si el ultimo caracter de un string es una b

function last(string){

    let ulti=string.length-1;
    if(string[ulti]=="b"){
        return true
    }
    else return false
}
log(last("bab"))
log(last("aaaa"))
// Ejercicio Nº9
// Crear una función que tome un string y cree uno nuevo utilizando las 3 primeras y ultimas letras,
// comprobar que el string de parametro mida al menos 6 caracteres
function newString(string){
    let nuevo;
    if(string.length>=6){
        i= string.length;

       return nuevo=string.slice(0,3)+ string.slice(i-3,i)
    }
}
log(newString("hola esto es un string"))
// Ejercicio Nº10
// Crear una función que tome dos strings y los concatene sin las primeras 2 letras
function concatString(string1,string2){

    let nuevo;
    let long1=string1.length;
    let long2=string2.length;

    return nuevo=string1.slice(1,long1)+" "+string2.slice(1,long2);
}
log(concatString("hola","manola"))

// Ejercicio Nº11
// Comprobar entre dos valores cual es mas cercano al 100

function aprox(num1, num2) {

    let result1 = Math.abs(num1 - 100);
    let result2 = Math.abs(num2 - 100);
    
    if (result1 != result2) {
        return (result1 < result2) ? num1 : num2;
    } else {
        return "Estan a la misma distancia"
    }
}

log(aprox(50,160))

