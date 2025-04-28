let listaDeCompras = [];

const productoInput = document.getElementById("productoInput");
const lista = document.getElementById("lista");
const mensaje = document.getElementById("mensaje");

const mostrarLista = () => {
    lista.innerHTML = ""; // limpia lo que había antes
  
    if (listaDeCompras.length === 0) {
      // Si la lista está vacía
      const item = document.createElement("li");
      item.textContent = "No hay productos en la lista todavía.";
      item.style.fontStyle = "italic"; // Opcional: ponerlo en cursiva para que se vea diferente
      lista.appendChild(item);
    } else {
      // Si la lista tiene productos
      listaDeCompras.forEach((producto, index) => {
        const item = document.createElement("li");
        item.textContent = `${index + 1}. ${producto}`;
        lista.appendChild(item);
      });
    }
  };
  

const agregar = () => {
    let producto = productoInput.value.trim().toUpperCase(); 
    if (producto && !listaDeCompras.includes(producto)) {
      listaDeCompras.push(producto);
      
      productoInput.value = "";
      mensaje.textContent = "Producto agregado correctamente.";
    } else if (listaDeCompras.includes(producto)) {
      mensaje.textContent = "El producto ya está en la lista.";
    }
  };
  
  const eliminar = () => {
    let producto = productoInput.value.trim().toUpperCase(); 
    const index = listaDeCompras.indexOf(producto);
    if (index !== -1) {
      listaDeCompras.splice(index, 1);
      
      productoInput.value = "";
      mensaje.textContent = "Producto eliminado correctamente.";
    } else {
      mensaje.textContent = "El producto no está en la lista.";
    }
  };
  