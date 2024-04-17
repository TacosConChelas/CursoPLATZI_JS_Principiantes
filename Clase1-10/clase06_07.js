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

let frutas1 = ["pera", "manzana", "sandia"];
frutas1[0] = "melon"; //console.log(frutas);

function cambiar(objeto, datoCambiar){
    objeto.datoCambiar = "Ferdando";
}

cambiar(usuario, "nameU");
console.log(usuario);


//clase 07
console.log("------Clase 07------");
//paso por valor

let x = 1;
let y = "Hola";
let z = null;

let a = x;
let b = y;
let c = z;
console.log(x, y, z, a, b, c);

a = 12;
b = "platzi";
c = undefined;

//Paso por referencia
let frutas3 = ["Manzana"];
frutas3.push("Pera");
console.log(frutas3);

let arr1 = ["hola"];
let arr2 = arr1;
arr1.push("Hi");
console.log(arr1, arr2);
