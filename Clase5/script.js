function palabraLarga() {
    const inputTexto = document.getElementById("inputArray").value.trim();
  
    // Validar si el campo está vacío
    if (!inputTexto) {
      document.getElementById("resultadoPalabra").innerText = "Error! No se ha ingresado texto.";
      return;
    }
  
    // Dividir en palabras
    const palabras = inputTexto.split(/\s+/);
    let palabraMasLarga = "";
  
    for (let palabra of palabras) {
      if (palabra.length > palabraMasLarga.length) {
        palabraMasLarga = palabra;
      }
    }
  
    // Mostrar resultado
    document.getElementById("resultadoPalabra").innerText = `La palabra más larga es: ${palabraMasLarga}`;
  
    // Limpiar input
    document.getElementById("inputArray").value = "";
  }
  