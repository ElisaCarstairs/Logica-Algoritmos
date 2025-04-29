Usa filter() para obtener los productos que cuesten menos de $100.
El método filter() devuelve un nuevo arreglo que contiene todos los elementos que cumplen una condición especificada.
const numeros = [5, 10, 15, 20];

const mayores = numeros.filter(num => num > 10);

console.log(mayores); // [15, 20]
---------------------------
Usa sort() para ordenar esos productos alfabéticamente por su nombre.
El método sort() se utiliza para ordenar los elementos de un arreglo en su lugar y devuelve el mismo arreglo ordenado. Por defecto, convierte los elementos a cadenas y los ordena en orden lexicográfico, lo que puede dar resultados inesperados al trabajar con números. Para personalizar el criterio de ordenación, se puede pasar una función de comparación como argumento. Por ejemplo, para ordenar números de menor a mayor, puedes usar arr.sort((a, b) => a - b). Este método es útil para organizar listas alfabéticamente, ordenar números o personalizar el orden de objetos.

Ejemplo
const numeros = [30, 5, 20, 10];

numeros.sort((a, b) => a - b); // Orden ascendente

console.log(numeros); // [5, 10, 20, 30]
------------------------------------

Usa map() para generar un nuevo arreglo que contenga solo los nombres de los productos.
El método map() crea un nuevo arreglo aplicando una función a cada elemento del arreglo original, sin modificar el original.

Ejemplo
const numeros = [1, 2, 3, 4];

const cuadrados = numeros.map(num => num ** 2);

console.log(cuadrados); // [1, 4, 9, 16]