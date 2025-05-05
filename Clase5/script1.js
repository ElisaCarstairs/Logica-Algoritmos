//Entender el Sliding Window

function maxSum(arr, k) {
    let maxSum = 0;
    let windowSum = 0;
  
    // Suma inicial de la primera ventana
    for (let i = 0; i < k; i++) {
      windowSum += arr[i];
    }
    maxSum = windowSum;
  
    // Desliza la ventana
    for (let i = k; i < arr.length; i++) {
      windowSum += arr[i] - arr[i - k]; // entra uno nuevo, sale el más viejo
      maxSum = Math.max(maxSum, windowSum);
    }
  
    return maxSum;
  }
  
  // Ejemplo:
  const arr = [2, 1, 5, 1, 3, 2];
  const k = 3;
  console.log(maxSum(arr, k)); // Resultado: 9 (5 + 1 + 3)
  