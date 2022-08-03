const argv = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
}).option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en consola'
})
.option('c', {
    alias: 'cantidad',
    type: 'number',
    default: 10,
    describe: 'Cantidad de veces que se multiplica la tabla'
})
.check((argv, options) => {
    if (isNaN(argv.b)) {
        throw 'La base debe ser un numero'
    }
    if (isNaN(argv.c)) {
        throw 'La cantidad debe ser un numero'
    }
    return true;
})
.argv;

module.exports = argv;