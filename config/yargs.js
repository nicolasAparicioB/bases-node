const argv = require('yargs')
                        .option('l',{
                            alias: 'listar',
                            type: 'boolean',
                            default: false,
                            describe: 'Muestra la tabla en consola'
                        })
                        .option('b',{
                            alias: 'base',
                            type: 'number',
                            demandOption: true,
                            describe:'Es la base de la tabla de multiplicar'
                        })
                        .option('h',{
                            alias: 'hasta',
                            type: 'number',
                            default: 10,
                            describe: 'hasta que numero debe ir a tabla'

                        })
                        .check(argv =>{
                            if(isNaN(argv.b)){
                                throw 'la base debe ser un numero';
                            }else if(isNaN(argv.h)){
                                throw 'h debe ser un numero';
                            }
                            return true;
                        })
                        .argv;

module.exports = argv;