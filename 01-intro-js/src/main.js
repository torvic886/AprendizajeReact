/* eslint-disable no-unused-vars */

//Arreglo de Facturas
const Invoices = [
  {
    id: 1,
    name: "Compras de Oficina",
    client: {
      name: "Juan",
      lastName: "Gutierrez",
    },
    items: [
      {
        product: "keyboard",
        price: 399,
        quantify: 2,
      },
      {
        product: "Mouse",
        price: 200,
        quantify: 1,
      },
      {
        product: "paper",
        price: 100,
        quantify: 10,
      },
    ]
  },
  {
    id: 2,
    name: "Compras de Computacion",
    client: {
      name: "Pepe",
      lastName: "Doe",
    },
    items: [
      {
        product: "keyboard",
        price: 399,
        quantify: 2,
      },
      {
        product: "Screen 17",
        price: 200,
        quantify: 1,
      },
      {
        product: "Cpu Intel",
        price: 1000,
        quantify: 1,
      },
    ]
  },
  {
    id: 1,
    name: "Compras de Papeleria",
    client: {
      name: "Jhon",
      lastName: "Doe",
    },
    items: [
      {
        product: "Pencil",
        price: 50,
        quantify: 1,
      },
      {
        product: "Paper",
        price: 100,
        quantify: 10,
      },
    ]
  },
];

// nuevo arreglo con los datos de los nombres
// nota: no se modifica el arreglo original
const InvoicesName = Invoices.map ( i => {
  return i.name;
})

console.log(Invoices);
console.log(InvoicesName);

const InvoicesClient = Invoices.map ( i => {
  return i.client.name;
})

console.log(InvoicesClient);


