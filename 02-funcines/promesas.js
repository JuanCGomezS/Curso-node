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
const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;

        (empleado) ? resolve(empleado) : reject(`no existe empleado con ID ${id}`)

    })
}

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id)?.salario;

        (salario) ? resolve(salario) : reject(`no existe salario para ID ${id}`)

    })
}

/* getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(error => console.log(error))

getSalario(id)
    .then(salario => console.log(salario))
    .catch(error => console.log(error)) */

getEmpleado(id)
    .then(empleado => {
        getSalario(id)
            .then(salario => {console.log(`Empleado ${empleado} con salario ${salario}`);})
            .catch(error => console.log(error))
    })
    .catch(error => console.log(error))