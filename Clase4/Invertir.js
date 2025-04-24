// Objetivo: Invertir el orden del arreglo

const valores = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

let izquierda = 0
let derecha = valores.length - 1
console.log('Arreglo original es', valores) 
function invertirArreglo(arreglo) {   

        while (izquierda < derecha) { 

                let aux_izquierda = valores[izquierda]
                let aux_derecha = valores[derecha] 
                valores[derecha] = aux_izquierda // Intercambio
                valores[izquierda] = aux_derecha // Intercambio
                izquierda++  //Muevo puntero izquierdo  
                derecha--    //Muevo puntero derecho
        
        }
}
console.log('Arreglo invertido es', valores) 
invertirArreglo(valores)
