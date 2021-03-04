const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base, fin, listar) => {
    try {

        let tabla = '';
        let consola = '';

        for (let i = 1; i <= fin; i++) {
            consola += `  ${colors.underline(base)} ${'x'.red} ${colors.blue(i)} ${'='.brightRed} ${colors.bold(base*i)}\n`;
            tabla += `${base} x ${i} = ${base*i}\n`;
        }

        if (listar) {
            console.log(consola);
        }

        fs.writeFileSync(`./tablas/tabla-${base}.txt`, tabla);
        return (`tabla-${base}.txt`);

    } catch (error) {
        throw error;
    }

};

module.exports = {
    crearArchivo
};