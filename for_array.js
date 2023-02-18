// Declarar un array de enteros con 5 elementos,recorrerlo en un ciclo for e imprimir en consola si el valor es par o impar

let arrayEnteros = [51, 27, 64, 18, 2];

for (let index = 0; index < arrayEnteros.length; index++) {
  const elemento = arrayEnteros[index];
  console.log(elemento);

  if (elemento % 2 === 0) {
    console.log("Es par");
  } else {
    console.log("Es impar");
  }
}

// Declarar un array con 6 elementos, debe tener si o si "hola" y "mundo" en indices separados, recorrer el ciclo for y crear "hola mundo" e imprimir en consola

let arrayString = ["este", "es un", "Hola", "array", "de strings", "mundo"];

for (let index = 0; index < arrayString.length; index++) {
  const element = arrayString[index];
  console.log(element);
}

let holaMundo = arrayString[2] + arrayString[5];
console.log(holaMundo);

// Realizar la potencia de 2^8 usando un ciclo for

arrayPotencia = [2, 2, 2, 2, 2, 2, 2, 2];

for (let index = 0; index < arrayPotencia.length; index++) {
  let pot3ncia = index * arrayPotencia[index];
  console.log(pot3ncia);
  // const elementoPotencia = arrayPotencia[index];
}

// console.log(2**8);
