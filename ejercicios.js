// Crear una función que no reciba ningún parámetro y escribir en la consola “hola mundo” dentro de la misma, llamarla para ver que se esté escribiendo correctamente.

function saludar () {
    console.log("Hola mundo");
}

saludar()

// Crear una función que reciba como parámetro el nombre de una persona, retorne el mensaje “mi nombre es + nombre” almacenarlo en una variable e imprimirlo en consola

function NombrePersona (nombre) {
    return "Mi nombre es " + nombre
}

let nombre = NombrePersona ("Ayelen")
console.log(nombre);

// Crear una función que se llame contador, que reciba como parámetro un número y que en un ciclo for imprima en consola todos los números desde el primero número hasta el último indicado por parámetro.

function contador (array) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(element);
    }
}

let array1 = [1,2,3,4,5,6];
contador(array1)
