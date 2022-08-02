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

const getInfoUsuario = async () => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado ${empleado} es de ${salario}`;
    } catch (error) {
        throw error;
    }
}

const id = 3;
getInfoUsuario(id).then(msg => console.log(msg)).catch(err => console.log(err))


