// Crear 5 variables de tipo number y evaluar si cada una de esas variables es par o impar, en caso de ser par, imprimir “la variable es par”, en caso de ser impar el mensaje deberá decir, “la variable es impar”.

let num1 = 126;
let num2 = 51;
let num3 = 254;
let num4 = 185;
let num5 = 44;

if (num1 % 2 === 0) {
  console.log("La variable es par");
} else {
  console.log("La variable es impar");
}

if (num2 % 2 === 0) {
  console.log("La variable es par");
} else {
  console.log("La variable es impar");
}

if (num3 % 2 === 0) {
  console.log("La variable es par");
} else {
  console.log("La variable es impar");
}

if (num4 % 2 === 0) {
  console.log("La variable es par");
} else {
  console.log("La variable es impar");
}

if (num5 % 2 === 0) {
  console.log("La variable es par");
} else {
  console.log("La variable es impar");
}

// Un alumno de programación está creando su primera aplicación web. Crear una variable cuyo valor sea la etiqueta h1 de html con el mensaje “Hola Mundo” en el medio e imprimirla en la consola.

let etiquetaH1 = "<h1>Hola Mundo</h1>";
console.log(etiquetaH1);

// El profesor le pide al alumno que agregue al h1 anterior un poco de estilos, crear una variable cuyo valor sea h1 { color: red; } e imprimirla en consola.

etiquetaEstilos = "h1 {color: red;}";
console.log(etiquetaEstilos);

// Dibujar en la consola una pirámide.
// Es una piramide de costado :D

let rref = "<|";
console.log(rref);

// Realizar un sistema para reservar canchas de futbol, con 4 casos diferentes con las sigueintes variables: numero de cancha, si se encuentra alquilada o no , si es techada y precio.

// Cancha 1 (variables y solucion)
let numeroDeCancha1 = 1;
let estaAlquilada1 = false;
let esTechada1 = true;
let precioCancha1 = 4500;
let climaCancha1 = "soleado";

if (
    estaAlquilada1 === false &&
    (climaCancha1 === "soleado" ||
      (climaCancha1 === "lluvioso" && esTechada1 === true))
  ) {
    console.log(
      "Felicidades su cancha fue reservada con éxito, por favor abone el monto de $" +
        precioCancha1
    );
  } else {
    console.log("Disculpe, esta cancha no está disponible");
  }



// Cancha 2 (variables y solucion)
let numeroDeCancha2 = 2;
let estaAlquilada2 = true;
let esTechada2 = false;
let precioCancha2 = 4900;
let climaCancha2 = "soleado";

if (
    estaAlquilada2 === false &&
    (climaCancha2 === "soleado" ||
      (climaCancha2 === "lluvioso" && esTechada2 === true))
  ) {
    console.log(
      "Felicidades su cancha fue reservada con éxito, por favor abone el monto de $" +
        precioCancha2
    );
  } else {
    console.log("Disculpe, esta cancha no está disponible");
  }



// Cancha 3 (variables y solucion)
let numeroDeCancha3 = 3;
let estaAlquilada3 = false;
let esTechada3 = true;
let precioCancha3 = 6000;
let climaCancha3 = "lluvioso";

if (
    estaAlquilada3 === false &&
    (climaCancha3 === "soleado" ||
      (climaCancha3 === "lluvioso" && esTechada3 === true))
  ) {
    console.log(
      "Felicidades su cancha fue reservada con éxito, por favor abone el monto de $" +
        precioCancha3
    );
  } else {
    console.log("Disculpe, esta cancha no está disponible");
  }



// Cancha 4 (variables y solucion)
let numeroDeCancha4 = 4;
let estaAlquilada4 = false;
let esTechada4 = false;
let precioCancha4 = 4200;
let climaCancha4 = "lluvioso";

if (
  estaAlquilada4 === false &&
  (climaCancha4 === "soleado" ||
    (climaCancha4 === "lluvioso" && esTechada4 === true))
) {
  console.log(
    "Felicidades su cancha fue reservada con éxito, por favor abone el monto de $" +
      precioCancha4
  );
} else {
    console.log("Disculpe, esta cancha no está disponible");
  }
