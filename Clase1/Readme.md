/*Indicaciones
Problema: Planificador de viajes
Imagina que eres parte del equipo encargado de actualizar una aplicación antigua (la cual se muestra en el documento adjunto) para planificar viajes. Los usuarios deben poder registrar destinos de viaje, la fecha en que desean viajar, y calcular el costo total estimado del viaje en función de las opciones de alojamiento y transporte que elijan.

Instrucciones para resolver el problema:
En primer lugar, entender el flujo básico de la aplicación existente: Registrar destinos, Calcular el costy Mostrar el itinerario.
Registrar destinos: Llamar a registrarDestino(destino, fecha, transporte) para agregar destinos al sistema.
Calcular el costo: El costo se calcula con la función calcularCosto(), la cual toma el destino y el transporte como parámetros.
Mostrar el itinerario: Llamar a mostrarItinerario() para recorrer todos los viajes guardados y mostrar sus detalles.
A continuación, deberás convertir algunas partes del código a ECMAScript(6).
Reemplazar Funciones tradicionales por Funciones de flecha donde consideres necesario.
Reemplaza las declaraciones de `var` por `let` o `const` cuando corresponda. Recuerda que `let` se usa para variables que pueden cambiar, y `const` para las que no cambiarán (como el arreglo de destinos).
Divide el código en módulos (en archivos) para separar la lógica de gestión de viajes de la interacción con el usuario.
Opcionalmente podrías extender la funcionalidad del sistema. Por ejemplo puedes agregar más destinos, más opciones de transporte o calcular descuentos de acuerdo al número de personas en el viaje. Usa tu creatividad para practicar lo aprendido.