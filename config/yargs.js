const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base para generar tabla'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Opcion para mostrar la tabla en consola'
    })
    .option('f', {
        alias: 'fin',
        type: 'number',
        default: 10,
        describe: 'Numero limite para multiplicar la base'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero';
        } else if (isNaN(argv.f)) {
            throw 'El fin tiene que ser un numero';
        }
        return true;
    })
    .argv;

module.exports = argv;