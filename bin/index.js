#!/usr/bin/env node
const package=require('../package')
const program=require('commander');
program
    .version(package.version,'-v','--version')
    .option('-i','--init','init')
    .parse(process.argv)
if(program.init){
    console.log(' - init')
}