const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.red} Crear una tarea`
            },
            {
                value: '2',
                name: `${'2.'.red} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.red} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.red} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.red} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.red} Borrar una tarea`
            },
            {
                value: '0',
                name: `${'0.'.red} Salir`
            }
        ]
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log('=========================='.green);
    console.log('  Seleccione una opción'.cyan);
    console.log('==========================\n'.green);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
}

const pausa = async () => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `\nPresione ${'Enter'.blue} para continuar\n`
        }
    ]
    await inquirer.prompt(question);
}

const leerInput = async (message) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}

const listadoBorrarTarea = async(tareas = []) => {
    const choices = tareas.map( (tarea, idx) => {

        const i = `${idx + 1}`.green;

        return {
            value: tarea.id,
            name: `${i} ${tarea.desc}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar'
    });

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]
    const { id } = await inquirer.prompt(preguntas);

    return id;

}

const confirm = async( message ) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]

    const { ok } = await inquirer.prompt(question);
    return ok;
}

const listadoMostrarTarea = async(tareas = []) => {
    const choices = tareas.map( (tarea, idx) => {
        const i = `${idx + 1}`.green;

        return {
            value: tarea.id,
            name: `${i} ${tarea.desc}`,
            checked: ( tarea.completadoEn ) ? true : false
        }
    });

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ]
    const { ids } = await inquirer.prompt(pregunta);

    return ids;
}

module.exports = {
    listadoMostrarTarea,
    listadoBorrarTarea,
    inquirerMenu,
    leerInput,
    confirm,
    pausa
}