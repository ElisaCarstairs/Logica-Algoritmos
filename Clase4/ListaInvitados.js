//Tienes una lista de invitados, ordenada alfabeticamente. Se debe organizar la mesa para una cena, sin embargo, algunos invitados prefieren sentarse junto a personas cuyo nombre empieza con la misma letra que el suyo, el objetivo es encontrar el primer par de invitados consecutivos que puedans entarse juntos según ese criterio.

const invitados = ["Andrea", "Carlos", "Daniel", "David", "Elena", "Fernanda", "Gabriel", "Héctor", "Isabela", "Javier", "Jorge", "Luis", "Mariana", "Miguel", "Raúl", "Sofía"];


let lista = 0 //Puntero 1
let total = invitados.length -1 //Puntero 2
function encontrarPar(invitados) {

    while (lista < total) {
        if (invitados[lista][0] === invitados[lista + 1][0]) {
            return [invitados[lista], invitados[lista + 1]]            
        }
        lista++        
    }
    
    console.log('No hay pareja')
}
console.log('Los invitados que pueden sentar juntos son', encontrarPar(invitados))
