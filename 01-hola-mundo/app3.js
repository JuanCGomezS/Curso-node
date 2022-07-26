console.log('Inicio del programa'); //1

setTimeout( () => {
    console.log('PRIMER timeout'); //5

}, 5000);

setTimeout( () => {
    console.log('SEGUNDO timeout'); //3

}, 0);

setTimeout( () => {
    console.log('TERCERO timeout'); //4

}, 0);

console.log('Fin del programa'); //2