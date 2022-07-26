//setTimeout( function() {
//    console.log('hola mundo');
//}, 1000);

const getUsuarioById = (id, callback) => {

    const usuario = {
        id,
        nombre: 'Juan Gomez'
    }
    setTimeout(() => {
        callback(usuario);
    }, 1500)
}

getUsuarioById(18, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre);
});