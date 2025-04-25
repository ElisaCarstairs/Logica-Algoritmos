let listaDeCompras = [];

const productoInput = document.getElementById("productoInput");
const lista = document.getElementById("lista");

const mostrarLista = () => {
  lista.innerHTML = "";
  listaDeCompras.forEach((producto, index) => {
    const item = document.createElement("li");
    item.textContent = `${index + 1}. ${producto}`;
    lista.appendChild(item);
  });
};

const agregar = () => {
  const producto = productoInput.value.trim();
  if (producto && !listaDeCompras.includes(producto)) {
    listaDeCompras.push(producto);
    mostrarLista();
    productoInput.value = "";
  } else if (listaDeCompras.includes(producto)) {
    alert("El producto ya está en la lista.");
  }
};

const eliminar = () => {
  const producto = productoInput.value.trim();
  const index = listaDeCompras.indexOf(producto);
  if (index !== -1) {
    listaDeCompras.splice(index, 1);
    mostrarLista();
    productoInput.value = "";
  } else {
    alert("El producto no está en la lista.");
  }
};
