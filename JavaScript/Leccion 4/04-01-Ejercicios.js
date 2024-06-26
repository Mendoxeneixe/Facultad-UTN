//Ejercicio 1: Deerminar Estacion del año segun la fecha actual.
function formatDate(date) {
  const formattedDate = new Date(date).toLocaleDateString("es-Es", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
  return formattedDate;
}

function esFechaEnRango(fecha, inicio, fin) {
  const [diaInicio, mesInicio] = inicio.split(" de ");
  const [diaFin, mesFin] = fin.split(" de ");

  const date = new Date(fecha);
  const year = date.getFullYear();

  const fechaInicio = new Date(`${mesFin} ${diaFin}, ${year}`);
  const fechaFin = new Date(`${mesFin} ${diaFin}, ${year}`);

  if (fechaFin < fechaInicio) {
    fechaFin.setFullYear(year + 1);
  }

  return date >= fechaInicio && date <= fechaFin;
}

function determinarEstacion() {
  const date = new Date();

  const veranoInicio = "21 de Diciembre";
  const veranoFin = "20 de Marzo";
  const otonoInicio = "21 de Marzo";
  const otonoFin = "20 de Junio";
  const inviernoInicio = "21 de Junio";
  const inviernoFin = "20 de Septiembre";
  const primaveraInicio = "21 de Septiembre";
  const primaveraFin = "20 de diciembre";

  let mensaje = "";

  if (esFechaEnRango(date, veranoInicio, veranoFin)) {
    mensaje = "Usted se encuentra en Verano.";
  } else if (esFechaEnRango(date, otonoInicio, otonoFin)) {
    mensaje = "Usted se encuentra en Otoño.";
  } else if (esFechaEnRango(date, inviernoInicio, inviernoFin)) {
    mensaje = "Usted se encuentra en Invierno.";
  } else if (esFechaEnRango(date, primaveraInicio, primaveraFin)) {
    mensaje = "Usted se encuentra en Primavera.";
  }

  return console.log(mensaje);
}
determinarEstacion();

//Ejercicio 2: Determinar la hora del dia y saludar segun la hora del dia.
function formatHour(h) {
  const hour = new Date(h).toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return hour;
}

const hora = formatHour(new Date());

function determinarHoraDeDia(hora) {
  if (hora >= "6" && hora <= "11") {
    console.log(`Buenos dias son las ${hora}.`);
  } else if (hora >= "12" && hora <= "20") {
    console.log(`Buenas Tardes, son las ${hora}.`);
  } else if (hora >= "20" && hora <= "12") {
    console.log(`Buenas Noces, son las ${hora}`);
  }
}

determinarHoraDeDia(hora);

//Estructura switch / clase /break (La sitaxis es igual a Java)
let estacion;
switch (new Date().getMonth()) {
  case 1:
  case 2:
  case 12:
    estacion = "Verano";
    break;
  case 3:
  case 4:
  case 5:
    estacion = "Otoño";
    break;
  case 6:
  case 7:
  case 8:
    estacion = "Otoño";
    break;
  case 9:
  case 10:
  case 11:
    estacion = "Primavera";
}

console.log(
  `Bienvenidos a la estacion de ${estacion} ${new Date().toLocaleDateString()}.`
);

//Evitar repetir tu codifo
//Dry don`t repeatyourself
// Let days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes' 'Sabado','Domingo'];

let days = 1;

switch (days) {
  case 1:
    console.log("hoy es Lunes");
    break;
  case 2:
    console.log("hoy es Martes");
    break;
  case 3:
    console.log("hoy es Miércoles");
    break;
  case 4:
    console.log("hoy es Jueves");
    break;
  case 5:
    console.log("hoy es Viernes");
    break;
  case 6:
    console.log("hoy es Sábado");
    break;
  case 7:
    console.log("hoy es Domingo");
    break;
  default:
    console.log("Error en el ingreso del día de la semana");
    break;
}

let days2 = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

function getDay(n) {
  if (n < 1 || n > 7) {
    throw new Error("Out of range");
  }
  return days2[n - 1];
}

console.log(getDay(5));

let months = 6;

switch (months) {
  case 1:
    console.log("Enero");
    break;
  case 2:
    console.log("Febrero");
    break;
  case 3:
    console.log("Marzo");
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Mayo");
    break;
  case 6:
    console.log("Junio");
    break;
  case 7:
    console.log("Julio");
    break;
  case 8:
    console.log("Agosto");
    break;
  case 9:
    console.log("Septiembre");
    break;
  case 10:
    console.log("Octubre");
    break;
  case 11:
    console.log("Noviembre");
    break;
  case 12:
    console.log("Diciembre");
    break;
  default:
    console.log("Error en el ingreso del mes");
    break;
}

let months2 = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

function getMonth(n) {
  if (n < 1 || n > 12) {
    throw new Error("Out of range");
  }
  return months2[n - 1];
}

console.log(getMonth(5));
