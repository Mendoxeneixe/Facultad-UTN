/**
 * Tipos de Datos en JAvaScript
 * La sintaxis en lo que e comentarios es muy similiar a la de Java
 * es mas diriamos que es identica a Java
 */

var nombre = "FRanco"; //Tipos str
console.log(typeof nombre);
nombre = 7;
console.log(typeof nombre);

nombre = 12.3;
console.log(typeof nombre);

var objeto = {
  //Esto es un objeto
  nombre: "Franco",
  apellido: "Morales",
  Telefono: "1289412",
};

console.log(typeof objeto);

//Tipo de dato boolean
var bandera = true;
console.log(typeof bandera);

//Tipo de datos funcion
function miFuncion() {}

console.log(typeof miFuncion);

//Tipos de datos Symbol
var simbolo = Symbol();
console.log(typeof simbolo);

//Tipos de clase
class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
console.log(typeof Persona);

//Tipo de dato undefined
var x;
console.log(typeof x);
x = undefined;
console.log(typeof x);

// Null: Significa ausencia de un valor
var y = null; //  Null no es un tipo de dato, pero su origen es de tipo object
console.log(typeof y);

//Tipo de datos array y empty str
var autos = ["Citroen", "Audi", "BMW", "Ford"];
console.log(autos);

console.log(typeof autos); //El array es de tipo Objeto

var z = "";
console.log(typeof z); //Empty str= candena vacia


