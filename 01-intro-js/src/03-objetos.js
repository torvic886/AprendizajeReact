
// eslint-disable-next-line no-unused-vars
const invoice = {
    id: 10,
    nombre: 'Compras de Oficina',
    fecha: new Date(),
    cliente: 'Jhon Doe',
    total: 1000
};

invoice.cliente = 'Pepe Doe'
console.log(invoice.cliente);
console.log(invoice);