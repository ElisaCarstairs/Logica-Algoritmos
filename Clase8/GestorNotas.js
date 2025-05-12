const fs = require('fs');
const filePath = 'notas.json';

// Función para agregar una nota
function agregarNota(titulo, contenido) {
  let notas = [];

  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    notas = JSON.parse(data);
  }

  const nuevaNota = { titulo, contenido };
  notas.push(nuevaNota);

  try {
    fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
    console.log('✅ Nota agregada con éxito.');
  } catch (err) {
    console.error('❌ Error al escribir en el archivo:', err);
  }
}

// Función para listar todas las notas
function listarNotas() {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    const notas = JSON.parse(data);

    console.log('📒 Notas guardadas:');
    notas.forEach((nota, i) => {
      console.log(`${i + 1}. ${nota.titulo}: ${nota.contenido}`);
    });
  } else {
    console.log('⚠️ No hay notas guardadas.');
  }
}

// Función para eliminar una nota por su título
function eliminarNota(titulo) {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    let notas = JSON.parse(data);

    const notasFiltradas = notas.filter(nota => nota.titulo !== titulo);

    if (notasFiltradas.length === notas.length) {
      console.log(`⚠️ No se encontró una nota con el título "${titulo}".`);
    } else {
      fs.writeFileSync(filePath, JSON.stringify(notasFiltradas, null, 2));
      console.log(`🗑️ Nota con título "${titulo}" eliminada.`);
    }
  } else {
    console.log('⚠️ No hay notas para eliminar.');
  }
}

// Lógica de comandos desde la consola
const [accion, titulo, contenido] = process.argv.slice(2);

switch (accion) {
  case 'agregar':
    if (titulo && contenido) {
      agregarNota(titulo, contenido);
    } else {
      console.log('❌ Debes proporcionar un título y contenido para agregar una nota.');
    }
    break;

  case 'listar':
    listarNotas();
    break;

  case 'eliminar':
    if (titulo) {
      eliminarNota(titulo);
    } else {
      console.log('❌ Debes proporcionar un título para eliminar una nota.');
    }
    break;

  default:
    console.log('ℹ️ Comandos válidos:');
    console.log('  node gestorNotas.js agregar "Título" "Contenido"');
    console.log('  node gestorNotas.js listar');
    console.log('  node gestorNotas.js eliminar "Título"');
}
