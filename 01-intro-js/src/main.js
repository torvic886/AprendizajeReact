



//[] arreglo, puede haber mas de una compra
//{} objeto , 
// factura = invoice
// eslint-disable-next-line no-unused-vars
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


// const factura2 = factura;


//el operador spread instancia otro objeto aunque sea igual los datos, se crea un objeto en otra posicion de memoria
const factura2 = { ...factura};


const result = factura == factura2;

if (result) 
{
    console.log(result);
} 
else 
{
    console.log('No son iguales');
}

// console.log(result+'D');

factura2.id = 20;

console.log(factura.id);
console.log(factura2.id);
