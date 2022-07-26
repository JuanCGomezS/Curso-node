// Función normal
function sumarNormal(a, b = 10) {
    return a + b;
}

// Función de flecha
const sumarFlecha = (a, b = 10) => { 
    return a + b;
}

// Return implicito
const returnImplicito = () => 'Hola mundo'

console.log('Función normal', sumarNormal(2));
console.log('Función de flecha', sumarFlecha(3,10));
console.log(returnImplicito());