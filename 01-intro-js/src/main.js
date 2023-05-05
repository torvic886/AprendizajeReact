/* eslint-disable no-unused-vars */


const user = {
    username: 'Andres',
    email: 'correo@gmail.com',
    age: 20,
    ranking: 9,
}

//desestructuracion de objetos
// const { username, ranking, age} = user;
// console.log(`${username} tiene ${age} años de edad.`);


const username  = user.username;
const ranking   = user.ranking;
const age       = user.age;


console.log(`${username} tiene ${age} años de edad.`);

// console.log(ranking);
