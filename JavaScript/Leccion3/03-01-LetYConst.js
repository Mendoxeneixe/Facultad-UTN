//Ampliando el uso de let var y const

/**
 *Con var puedes reasignar en cualquier momento,
 *este forma parte del ambito global.
 *Un error es que se sobreescriba.
  */

 var nombre = "Gabriel";
 nombre= "Ariel";
 console.log(nombre);

 function saludar(){
    var nombre = "NAtalia";
    console.log(nombre);
 }

 console.log(nombre); //Aqui no lee el dato de la funcion
 if (true)  {
    var edad = 38;
    console.log(edad);
 }

 console.log(edad); //En la funcion anduvo corrrectamente, en la estructura if fallo



 /**
  * let: esta puede ser reasignada en cualquier momento,
  * la diferencia que su ambito es de bloque de
  * llaveso dentro de una funcion
  */
 

 function saludar(){
    let nombre2 = "Franco";
    console.log(nombre2);
 }

 //Console.log(nombre2);

 if (true){
    let edad2 = 33;
    console.log(edad2);
 }

 //console.log(edad2); Edad no esta definida

 /**
  * const: se utiliza para valores constanes que no puede
  * ser reasignadas.
  */

const fechaNacimiento = 1997;
console.log(fechaNacimiento);
//fechaNacimiento= 2005; No se puede reasignar el valor 
//console.log(fechaNacimiento);