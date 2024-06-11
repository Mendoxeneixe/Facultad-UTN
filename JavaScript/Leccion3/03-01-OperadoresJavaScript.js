// Ejericio 1 los pares e impares
var num1 = 12;
var num2 = 29;
var num3 = 23;

function parImpar(num) {
  if (num % 2 === 0) {
    console.log(`El numero ${num} es par`);
  } else {
    console.log(`El numero ${num} es impar`);
  }
}
parImpar(num3);

// Saber si es mayor de edad
var miEdad = 23;
const mayorEdad = 18;

function Edad(edad) {
  if (edad >= mayorEdad) {
    console.log(`Usted tiene ${edad} años, es mayor de edad.`);
  } else {
    console.log(`Usted tiene ${edad} años, es menor de edad.`);
  }
}

Edad(miEdad);

// Ejercicio Nº3 Dentro de un rango

let dentroDeRango = 5;
let valorMinimo = 0,
  valorMaximo = 10;
function VerificarRango(rango) {
  if (dentroDeRango >= valorMinimo && dentroDeRango <= valorMaximo) {
    console.log(`El valor ${rango} esta dentro del rango.`);
  } else {
    console.log(`El valor ${rango} no esta dentro del rango.`);
  }
}

VerificarRango(dentroDeRango);

// Ejercicio Nº4 Ver si el padre puede asistir al evento de su hijo
const diaLibre = true;
const vacaciones = false;

function VerificarAsistencia() {
  if (diaLibre || vacaciones) {
    console.log("El padre puede asistir al evento");
  } else {
    console.log("El padre no puede asistir al evento");
  }
}
VerificarAsistencia();

// Este es un operador ternario (explicado gabi)
diaLibre || vacaciones
  ? console.log("El padre puede asistir al evento")
  : console.log("El padre puede asistir al evento");

// Ejercicio Nº 5 Operador ternario
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const grupo = {
  par: [],
  impar: [],
};

numeros.forEach((num) => {
  let key;
  num % 2 === 0 ? (key = "par") : (key = "impar");
  grupo[key].push(num);
});
console.log(grupo);

// Ejercicio Nº 7 Funcion isNaN
function NoesUnNumero() {
  if (isNaN("asd")) {
    console.log("Esta variable no solo contiene numero");
  }
}

NoesUnNumero();
