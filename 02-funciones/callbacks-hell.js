// Error en los Callbacks

const empleados = [
    {
        id: 1,
        nombre: 'Juan Gomez'
    },
    {
        id: 2,
        nombre: 'Carlos perez'
    },
    {
        id: 3,
        nombre: 'Julieta Gomez'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

const id = 3;

const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id);

    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`Empleado con ${id} no existe`);
    }
}

const getSalario = (id, callback) => {
    let datos = {};
    datos.salario = salarios.find(s => s.id === id)?.salario;
    datos.empleado = empleados.find(e => e.id === id)?.nombre;

    if (datos.salario) {
        callback(null, datos)
    } else {
        callback(`El empleado ${datos.empleado} no tiene salario`)
    }
}

getEmpleado(id, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(id, (error, datos) => {
        if (error) {
            return console.log(error);
        }
        console.log(`El empleado ${empleado.nombre} tiene el salario de $${datos.salario}`);
    });
})

