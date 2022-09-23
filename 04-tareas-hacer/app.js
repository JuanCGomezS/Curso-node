//const { mostrarMenu, pausa } = require('./helpers/mensajes');
require('colors');
const { guardarDb, leerDb } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput, listadoBorrarTarea, confirm, listadoMostrarTarea } = require('./helpers/inquirer');
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
            case '3': //Tareas completadas
                tareas.listarPendientesCompletadas(true);
                break;
            case '4': //Listar pendientes
                tareas.listarPendientesCompletadas(false)
                break;
            case '5': //Completado / Pendiente
                const ids = await listadoMostrarTarea(tareas.listadoArr);
                tareas.cambiarTarea(ids);
                break; //Borrar
            case '6':
                const id = await listadoBorrarTarea(tareas.listadoArr);
                if (id !== '0') {
                    const ok = await confirm('¿Seguro desea borrar?');

                    if (ok) {
                        tareas.borrarTarea(id);
                        console.log('Tarea Borrada');
                    }
                }

                break;
        }

        guardarDb(tareas.listadoArr);

        await pausa();
    } while (opt !== '0');
}

main();