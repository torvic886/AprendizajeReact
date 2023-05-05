/* eslint-disable no-unused-vars */


const user = {
    username: 'Andres',
    email: 'correo@gmail.com',
    age: 20,
    ranking: 9,
}


// const detail = (user) => {
//     const { username, email} = user;
//     console.log(`El detalle del usuario: ${ username} con correo: ${ email}`);
// }

// detail(user);

const detail = ( {username, email}) => {
    console.log(`El detalle del usuario: ${ username} con correo: ${ email}`)
}

detail(user);

