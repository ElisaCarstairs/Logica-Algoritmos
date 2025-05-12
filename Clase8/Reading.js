const fs = require('fs');

// Verificando si un archivo existe
const filePath = 'readme.md'; //Solo poner el nombre del archivo, no es necesario colocar la ruta completa


fs.readFile('readme.md', 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      return;
    }
  
    console.log('Contenido del archivo:', data);
  });
  