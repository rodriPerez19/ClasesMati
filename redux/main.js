const InitialState = {
    user:{nombre:"", correo:"", pais:"" },
    products: []
}
let elCalcular=document.getElementById("calcular");
function reducer(state = InitialState, action){
    
    switch (action.type) {
        case 'CREAR_USER':
            let{nombre,correo,pais}=action.user
            return({
                ...state,
                user:{...state.user,nombre,correo,pais},
            })
        case "COMPRA":
            let {nombreProd,precio,id}=action.product
            return({
                    ...state,
                    products: [...state.products,{nombreProd,precio,id}]
                });
        case "ELIMINAR":
            return({
                ...state,
                products: [...state.products.filter(el=>el.nombreProd!=action.product.nombreProd)]
            })
        case "CALCULAR":
            let total=calcular(state);
            return({...state,
                    products:[...state.products,total]
            })
        default:
            return state
    }
}


let store = Redux.createStore(reducer);
function calcular(state){
    let total=0;
    calc={...state,
            products:[...state.products.map(el=> total=total+el.precio)]}
    return total
}
function usuario(){
    document.getElementById("user").innerHTML=JSON.stringify(store.getState().user);
}
function carro(){
    document.getElementById("carro").innerHTML=JSON.stringify(store.getState().products);
}

store.subscribe(usuario);
store.subscribe(carro);

let elNombre=document.getElementById("nombre");
let elCorreo=document.getElementById("correo");
let elPais=document.getElementById("pais");
let elCompra1=document.getElementById("comprar1");
let elCompra2=document.getElementById("comprar2");
let elCompra3=document.getElementById("comprar3");
let elEliminar1=document.getElementById("eliminar1");
let elEliminar2=document.getElementById("eliminar2");
let elEliminar3=document.getElementById("eliminar3");



document.getElementById("crear").addEventListener("click",()=>{
    store.dispatch(accionCrearUser())
})

elCompra1.addEventListener("click",()=>{
    store.dispatch(accionComprar1())
})
elCompra2.addEventListener("click",()=>{
    store.dispatch(accionComprar2())
})
elCompra3.addEventListener("click",()=>{
    store.dispatch(accionComprar3())
})
elEliminar1.addEventListener("click",()=>{
    store.dispatch(accionEliminar1())
})
elEliminar2.addEventListener("click",()=>{
    store.dispatch(accionEliminar2())
})
elEliminar3.addEventListener("click",()=>{
    store.dispatch(accionEliminar3())
})
elCalcular.addEventListener("click",()=>{
    store.dispatch(accionCalcular())
})

function accionCrearUser(){
    return{
        type:"CREAR_USER",
        user:{
            nombre:elNombre.value,
            correo:elCorreo.value,
            pais:elPais.value

        }
    }
}
 function accionComprar1(){
     return{
        type:"COMPRA",
        product:{
            nombreProd:"teclado1",
            precio:100,
            id:1
        }
     }
 }
 function accionComprar2(){
     return{
        type:"COMPRA",
        product:{
            nombreProd:"teclado2",
            precio:200,
            id:2
        }
     }
 }
 function accionComprar3(){
     return{
        type:"COMPRA",
        product:{
            nombreProd:"teclado3",
            precio:300,
            id:3
        }
     }
 }
function accionEliminar1(){
    return{
        type:"ELIMINAR",
        product:{
            nombreProd:"teclado1"
        }
    }
}
function accionEliminar2(){
    return{
        type:"ELIMINAR",
        product:{
            nombreProd:"teclado2"
        }
    }
}
function accionEliminar3(){
    return{
        type:"ELIMINAR",
        product:{
            nombreProd:"teclado3"
        }
    }
}

function accionCalcular(){
    return{
        type:"CALCULAR"
    }
}