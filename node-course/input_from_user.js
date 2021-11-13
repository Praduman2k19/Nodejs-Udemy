
console.log(process.argv)

console.log(process.argv[2])  //run -> node chalk.js andrew

const comand=process.argv[2];
if(comand==='add'){
console.log('Adding notes');
}
else if(comand==='remove'){
    console.log('Remove notes');
}

// Argument passing with Yargs -------------------------