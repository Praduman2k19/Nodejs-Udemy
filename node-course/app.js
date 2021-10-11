const fs=require('fs')
const add =require('./utils.js');

fs.writeFileSync('note.txt','This file was created by node.js.')
fs.writeFileSync('note.txt','My name is Adarsh');

fs.appendFileSync('notes.txt','This file was created by node.js.')
fs.appendFileSync('notes.txt','My name is Adarsh');


const sum=add(4,7);
console.log(sum);