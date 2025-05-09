/* function fibo (n) {
    let f0=0;
    let f1=1;
    //Caso base (dónde se cierra la función)
    if (n===0) {
        console.log(n);
        return 0
    }
    console.log("El valor recursivo es", n);
    return n= fibo(n-1)- fibo(n-2);
}

console.log(fibo(5)); */

function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // Salida: 8
