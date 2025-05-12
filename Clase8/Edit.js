const fs = require('fs');

// Verificando si un archivo existe
const filePath = 'readme.md'; //Solo poner el nombre del archivo, no es necesario colocar la ruta completa


fs.writeFile('readme.md', 'Hola, Node.js! Esta es una prueba  ', (err) => {
    if (err) { // manejo de errores
      console.error('Error al escribir en el archivo:', err);
      return;
    }
  
    console.log('Archivo escrito con éxito.');
  });