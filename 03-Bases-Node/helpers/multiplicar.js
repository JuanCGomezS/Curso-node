
const fs = require('fs'),
    colors = require('colors');

/* const crearArchivo = (base = 5) => {
    return new Promise( (resolve, reject) => {
        console.log('=========================');
        console.log(`   Tabla del: ${base}`);
        console.log('=========================');
    
        let salida = '';
    
        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
    
        //fs.writeFile(`Archivos/Tabla-${base}.txt`, salida, (err) => {
        //    if (err) throw err;
        //    console.log(`Tabla ${base} creada`);
        //});
    
        fs.writeFileSync(`Archivos/Tabla-${base}.txt`, salida);
    
        resolve(`Tabla-${base}.txt`);
    })
} */

const crearArchivo = async (base = 0, listar = false, cantidad = 10) => {
    try {
        let salida = '',
        consola = '';

        for (let i = 1; i <= cantidad; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} x ${i} = ${base * i}\n`.rainbow;
        }
        
        if (listar) {
            console.log('========================='.cyan.dim);
            console.log(`   Tabla del: ${colors.green(base)}`.cyan);
            console.log('========================='.cyan.dim);
            console.log(consola);
        }

        fs.writeFileSync(`./archivos/Tabla-${base}.txt`, salida);

        return (`Tabla-${base}.txt`.green);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}