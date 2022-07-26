const variable = {
    nombre: 'juan',
    apellido: 'gomez',
    poder: 'fuerte',
    getNombre() {
        return `${this.nombre} ${this.apellido} ${poder}`
    }
}

function imprimeHeroe(heroe) {
    const { nombre, apellido, poder, edad = 0} = heroe;
    console.log(nombre, apellido, poder, edad);
}
imprimeHeroe(variable)
//const nombre = variable.nombre;
//const apellido = variable.apellido;
//const poder = variable.poder;

