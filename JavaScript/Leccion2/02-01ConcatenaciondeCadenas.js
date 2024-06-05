var nombre = "Pedro";
var apellido = " Montes";
var nombreCompleto = nombre + " " + apellido; //Primera Concatenación
console.log(nombreCompleto);

var nombreCompleto2 = "Franchezco" + " " + "Totti"; //Segunda Concatenación
console.log(nombreCompleto2);
var juntos = nombre + 219;
console.log(juntos);

juntos = nombre + 78 + 17; //Aqui se puede diferencias a travez de los parentesis
console.log(juntos);

juntos = 78 + 17 + nombre; // Primero se resuelve de izquierda a derecha (Va a sumar primero y despues concatenar)
console.log(juntos);

nombre += apellido; // Operador siplificado
console.log(nombre);

//Hoy ya no se usa var, se trata de utilizar "let" y "Const"

//Let y const
let nombre2 = "Atuhermana";
console.log(nombre2);
//Una constante no puede ser modificada
const apellido2 = " rika";
console.log(nombre2, apellido2);

let x, y; //Se pueden crear varias variaables dentro de una misma linea
(x = 17), (y = 21); //Puede hacer asinacion de varias variables dentro de la misma linea
let z = x + y;
console.log(z);

let _1num = 31; //No utilizar numeros para nombrar una variable
let romper = "break"; //No usar palabras reservadas
