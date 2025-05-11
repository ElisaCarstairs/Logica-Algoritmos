// archivo: script.js

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

function leerArreglo() {
    const input = document.getElementById("arrayInput").value;

    // Convertimos la cadena a arreglo de números
    const array = input
        .split(",")             // ["5", "2", "9", "1"]
        .map(x => parseFloat(x.trim()))  // [5, 2, 9, 1] (números reales)

    // Validamos que sean números válidos
    if (array.some(isNaN)) {
        document.getElementById("resultado").innerText = "Error: ingresa solo números separados por comas.";
        return;
    }

    const ordenado = mergeSort(array);

    // Mostramos el resultado
    document.getElementById("resultado").innerText = ordenado.join(", ");
}
