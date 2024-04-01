//Tipos de datos primitivos - Inmutable 
let num = 3;
let num2 = 5;

//Tipo de dato complejo  - Mutable
//Objeto:
let usuario = {
    nameU: "Andres",
    edad: 20
} 
usuario.edad = 21;
//console.log(usuario);

let frutas = ["pera", "manzana", "sandia"];
frutas[0] = "melon"; //console.log(frutas);

function cambiar(objeto, datoCambiar){
    objeto.datoCambiar = "Ferdando";
}

cambiar(usuario, "nameU");
console.log(usuario);