// Objetivo: Encontrar dos números en un arreglo que sumen 102

const valores = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
const objetivo = 102

let izquierda = 0
let derecha = valores.length - 1

while (izquierda < derecha) {
    const suma = valores[izquierda] + valores[derecha]
    if (suma === objetivo) {
        console.log('El par es', valores[izquierda], valores[derecha])
        break
    } else if (suma < objetivo) {
        izquierda++
    } else {
        derecha--
    }
}

console.log('Los valores cuya suma es 102 son', valores[izquierda], valores[derecha])