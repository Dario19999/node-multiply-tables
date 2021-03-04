const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();

crearArchivo(argv.b, argv.f, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo.inverse.cyan, 'creado'.rainbow))
    .catch(err => console.log(err));