const fs=require('fs')
const add =require('./utils.js');
const val=require('Validator');
const { url } = require('inspector');

fs.writeFileSync('note.txt','This file was created by node.js.')
fs.writeFileSync('note.txt','My name is Adarsh');

fs.appendFileSync('notes.txt','This file was created by node.js.')
fs.appendFileSync('notes.txt','My name is Adarsh');


const sum=add(4,7);
console.log(sum);


const data = {
    name: 'John Doe',
    company: 'Example Co.',
    birthday: '1985-04-16',
    email:'abc@gmail.com',
    url:'https://mail.google.com',
};

const rules = {
    name: 'required',
    // for multiple rules
    birthday: 'required|date', // can be a piped string
    company: ['required', 'string'], // can be an array of strings
    email:['email','required'],
    url:'url'
};

const messages = {
    // custom message for based rules
    required: 'You forgot the :attr field',
    email: ':attr is not valid',
    // custom message for specific rule of attribute
    'receiver.email': 'The receiver email address is not valid'
};


const v = val.make(data, rules,messages);

if (v.fails()) {
    const errors = v.getErrors();
    console.log(errors);
}
else{
    console.log("email is correct")
}
