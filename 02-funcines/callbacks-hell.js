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
    const empleado = salarios.find(e => e.id === id)?.nombre;

    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`Empleado con ${id} no existe`);
    }
}

const getSalario = (id, callback) => {
    const salario = salarios.find(s => s.id === id)?.salario;
    const empleado = salarios.find(e => e.id === id)?.nombre;

    if (salario) {
        callback(null, salario)
    } else {
        callback(`El empleado ${empleado} no tiene salario`)
    }
}

getEmpleado(id, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(id, (error, salario) => {
        if (error) {
            return console.log(error);
        }
        console.log(`El empleado ${empleado} tiene el salario de $${salario}`);
    });
})

