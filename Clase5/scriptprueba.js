function calcularMaxSuma() {
    // Obtener los valores del DOM
    const inputArray = document.getElementById("inputArray").value;
    const k = parseInt(document.getElementById("inputK").value);
  
    // Convertir string a arreglo de números
    const arr = inputArray
      .split(",")
      .map(num => parseInt(num.trim()))
      .filter(n => !isNaN(n));
  
    // Validar entrada
    if (arr.length < k || k <= 0) {
      document.getElementById("resultado").innerText =
        "Error: El valor de k debe ser menor o igual a la longitud del arreglo y mayor que 0.";
      return;
    }
  
    // Algoritmo Sliding Window
    let maxSum = 0;
    let windowSum = 0;
  
    // Suma inicial de los primeros k elementos
    for (let i = 0; i < k; i++) {
      windowSum += arr[i];
    }
    maxSum = windowSum;
    document.getElementById("resultado2").innerText = `La suma de los primeros ${k} elementos es: ${windowSum}`;
    // Deslizar la ventana
    for (let i = k; i < arr.length; i++) {
      windowSum += arr[i] - arr[i - k];
      maxSum = Math.max(maxSum, windowSum);
    }
  
    // Mostrar resultado
    document.getElementById("resultado").innerText = `La suma máxima es: ${maxSum}`;
    
  }
  