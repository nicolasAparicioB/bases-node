const fs = require('fs');
const colors = require('colors');
const crearArchivo = async (base = 5, listar,hasta) => {
  
    try {
        console.log('==========================');
        console.log(`    tabla del ${base}`);
        console.log('==========================');
        let salida = '',consola = '';
        for(let i=1; i<= hasta ; i++) {
            consola +=(`${colors.green(base)} ${'x'.blue} ${colors.red(i)} ${'='.blue} ${colors.yellow(base*i)}\n`);
            salida  +=(`${base} x ${i} = ${base*i}\n`);
        }
        if(listar){
            console.log(consola);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida) 
        return `tabla-${base}.txt`;
        
    } catch (error) {
        throw error
    }

}


module.exports = {
    crearArchivo
}