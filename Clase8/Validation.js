// Importando el módulo fs
const fs = require('fs');

// Verificando si un archivo existe
const filePath = 'readme.md'; //Solo poner el nombre del archivo, no es necesario colocar la ruta completa

if (fs.existsSync(filePath)) {
  console.log('El archivo existe.');
} else {
  console.log('El archivo no existe.');
}

