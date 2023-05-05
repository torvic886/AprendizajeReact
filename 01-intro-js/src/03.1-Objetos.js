
// // eslint-disable-next-line no-unused-vars
// const invoice = {
//     id: 10,
//     nombre: 'Compras de Oficina',
//     fecha: new Date(),
//     cliente: {
//         id: 2,
//         nombre: 'Juan',
//         apellido: 'Gutierrez',
//         edad: 4
//     },
//     total: 1000,
//     greeting: ()=> {
//         return `Hola ${invoice.cliente.nombre}`
//     }
// };


// eslint-disable-next-line no-unused-vars

//[] arreglo, puede haber mas de una compra
//{} objeto , 
// factura = invoice
const factura = {
    id: 10,
    nombre: 'Compras de Oficina',
    fecha: new Date(),
    cliente: {
        id: 2,
        nombre: 'Juan',
        apellido: 'Gutierrez',
        edad: 4
    },
    items: [
        {
            producto: 'teclado',
            precio: 399,
            cantidad: 2
        },
        {
            producto: 'mouse',
            precio: 200,
            cantidad: 1
        },
        {
            producto: 'papel',
            precio: 100,
            cantidad: 10,
        }
    ],
    total: function () {
        let total = 0;
        this.items.forEach( item => {
                total = total + item.precio * item.cantidad;
        });
        return total;
    },
    greeting: function () {
        return `Hola ${this.cliente.nombre}`
    }
};

// invoice.cliente.nombre ='Fiu FIu'

console.log(factura);

const greeting = factura.greeting();

console.log(greeting);

console.log('total: '+factura.total());