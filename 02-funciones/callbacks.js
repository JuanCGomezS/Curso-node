// El setTimeout es una función que ejecuta un callback, es decir, una función.


//setTimeout( function() {
//    console.log('hola mundo');
//}, 1000);

const getUsuarioById = (id, callbackEjemplo) => {

    const user = {
        id,
        nombre: 'Juan Gomez'
    }

    setTimeout(() => {
        callbackEjemplo(user);
    }, 1500)
}

getUsuarioById(18, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});