/* eslint-disable no-unused-vars */


const users = [ 'Pepe', 'Ana', 'Maria', 'Juan', ' Sebastian', 'Carlos', 'Josefa'];

// const [pepe, b, maria, , ,carlos] = users;

// console.log(pepe, b, maria,carlos); //Pepe Ana Maria

const [pepe, b, maria, ...rest] = users;

console.log(pepe, b, maria,rest, ...rest); //Pepe Ana Maria