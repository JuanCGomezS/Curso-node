console.log('inicio');

setTimeout( () => {
    console.log('PRIMER timeout');

}, 5000)

setTimeout( () => {
    console.log('SEGUNDO timeout');

}, 0)

setTimeout( () => {
    console.log('TERCERO timeout');

}, 0)

console.log('fin');