import { registrarDestino } from './viajes.js';

const formulario = document.getElementById("formulario-viaje");
const resultadoDiv = document.getElementById("resultado");

formulario.addEventListener("submit", e => {
    e.preventDefault();

    const destino = document.getElementById("destino").value;
    const transporte = document.getElementById("transporte").value;
    const fecha = document.getElementById("fecha").value;
    const personas = document.getElementById("personas").value;

    const viaje = registrarDestino(destino, fecha, transporte, personas);

    resultadoDiv.innerHTML = `
        <h2>Resultado</h2>
        <p>Destino: ${viaje.destino}</p>
        <p>Fecha: ${viaje.fecha}</p>
        <p>Transporte: ${viaje.transporte}</p>
        <p>Número de personas: ${viaje.personas}</p>
        <p>Descuento: ${viaje.descuento}%</p>
        <p><strong>Costo total: $${viaje.costo}</strong></p>
    `;
});
