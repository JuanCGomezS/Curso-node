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

/* function imprimeHeroe({ nombre, apellido, poder, edad = 0}) {
    console.log(nombre, apellido, poder, edad);
} */

const heroes = ['Deadpool', 'Superman', 'Batman']

const [, , h3] = heroes;
//const [h1, h2, h3] = heroes;


imprimeHeroe(variable);
//console.log(h1, h2, h3);
console.log(h3);
//const nombre = variable.nombre;
//const apellido = variable.apellido;
//const poder = variable.poder;

