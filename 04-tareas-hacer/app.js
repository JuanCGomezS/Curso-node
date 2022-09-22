//const { mostrarMenu, pausa } = require('./helpers/mensajes');
require('colors');
const { guardarDb, leerDb } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const { Tarea } = require('./models/tarea');
const { Tareas } = require('./models/tareas');
console.clear();

const main = async () => {
    let opt = '';
    const tareas = new Tareas();

    const tareasDb = leerDb();

    if (tareasDb) { // Cargar tareas
        tareas.cargarTareasFromArray(tareasDb);
    }

    do {
        //Imprimir el menú
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // Crear opción
                const desc = await leerInput('Descipción: ');
                tareas.crearTarea(desc);
                break;
            case '2':
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.listarPendientesCompletadas(true);
                break;
            case '4':
                tareas.listarPendientesCompletadas(false)
                break;
            case '5':

                break;
            case '6':

                break;
        }

        guardarDb(tareas.listadoArr);

        await pausa();
    } while (opt !== '0');
}

main();