const destinos = [];

const registrarDestino = (destino, fecha, transporte, personas) => {
    const { costoBase, descuento } = calcularCosto(destino, transporte, personas);

    const nuevoViaje = {
        destino,
        fecha,
        transporte,
        personas,
        costo: costoBase,
        descuento
    };

    destinos.push(nuevoViaje);
    return nuevoViaje;
};

const calcularCosto = (destino, transporte, personas) => {
    let costoBase = 0;
    let descuento = 0;

    switch (destino) {
        case "Paris": costoBase = 500; break;
        case "Londres": costoBase = 400; break;
        case "New York": costoBase = 600; break;
        case "Tokyo": costoBase = 700; break;
    }

    switch (transporte) {
        case "Avión": costoBase += 200; break;
        case "Jet": costoBase += 3200; break;
        case "Tren": costoBase += 100; break;
    }
    switch (personas) {
        case "1": costoBase = costoBase; break;
        case "2": costoBase = costoBase * 1.95; break;
        case "3": costoBase = costoBase * 2.9;  break;
        case "4": costoBase = costoBase * 3.8;  break;
    }
    switch (personas) {
        case "1": descuento = 0;break;
        case "2": descuento = 5; break;
        case "3": descuento = 10; break;
        case "4": descuento = 20; break;
    }

    return {
        costoBase,
        descuento
    };
    
};

export { registrarDestino };
