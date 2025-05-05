const regalos = ["peluche", "libro", "calcetas", "rompecabezas", "tablet", "muñeca", "carro", "reloj"];

// Mostrar la lista de regalos disponibles
document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("listaRegalos");
  regalos.forEach(regalo => {
    const li = document.createElement("li");
    li.textContent = regalo;
    lista.appendChild(li);
  });
});

// Función recursiva para buscar el regalo
function buscarRegalo(lista, regaloBuscado, index = 0) {
  if (index >= lista.length) {
    return `🎁 El regalo "${regaloBuscado}" no está en la lista.`;
  }

  if (lista[index].toLowerCase() === regaloBuscado.toLowerCase()) {
    return `🎉 ¡Encontrado! El regalo "${regaloBuscado}" está en la posición ${index}.`;
  }

  return buscarRegalo(lista, regaloBuscado, index + 1);
}

// Función que se ejecuta al presionar el botón
function palabraLarga() {
  const regalo = document.getElementById("regalo").value.trim();

  // Validar si el campo está vacío
  if (regalo === "") {
    document.getElementById("resultado").textContent = "⚠️ Por favor ingresa un regalo para buscar.";
    return;
  }

  const resultado = buscarRegalo(regalos, regalo);
  document.getElementById("resultado").textContent = resultado;

  document.getElementById("regalo").value = "";
}
