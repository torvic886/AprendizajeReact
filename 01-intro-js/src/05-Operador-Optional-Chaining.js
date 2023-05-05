
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

//El Operador Optional Chaining permite trabajar con 
//objetos de varias dimensiones sin preocuparnos de si por el 
//camino llegamos a una propiedad que no esté definida. 
console.log(factura.company?.nombre);

console.log(factura.cliente?.nombre);
// if (factura.company != undefined && factura.company.nombre) 
if (factura.company?.nombre) {
    console.log('perfecto');
}
else {
    console.log('no viene la empresa');
}

