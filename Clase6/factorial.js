function factorial(n) {
    // Caso base: si n es 0, el factorial es 1
    if (n === 0) {
        return 1;
        
    }
    console.log("El valor recursivo es", n);
    // Llamada recursiva: multiplicar n por el factorial de n-1
    return n * factorial(n - 1);
    
}

console.log(factorial(5)); // Salida: 120