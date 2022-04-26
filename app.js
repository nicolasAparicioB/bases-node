const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('./config/yargs');
console.clear();

// esto no es recomendado hacerlo
// const [, ,arg3 = 'base=5'] = process.argv
// const [,base = 5]=arg3.split('=');

console.log(argv);
crearArchivo(argv.b,argv.l,argv.h)
            .then(resp => console.log(resp))
            .catch(error => console.log(error));
