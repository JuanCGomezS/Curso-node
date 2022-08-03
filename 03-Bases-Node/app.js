//Uso de FS, escribiendo archivos
const { crearArchivo } = require('./helpers/multiplicar'),
    argv = require('./config/yargs');

console.clear();
//console.log(argv);

/* console.log(process.argv);
const [ , , arg3 = 'base=7'] = process.argv;
const [ , base = 7] = arg3.split('=');
const base = 6; */

crearArchivo(argv.b, argv.l, argv.c)
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch(err => console.log(err));
