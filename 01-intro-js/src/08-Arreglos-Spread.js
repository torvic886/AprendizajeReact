// eslint-disable-next-line no-unused-vars
const products = ['mesa','silla','notebook','teclado'];

//push agregar varios elementos a un arreglo o uno;
products.push('pantalla lcd', 'Sony Tv');

const fruits = ['Peras', 'Manzanas', 'Sandias', 'Frutillas'];

// const mercado = [...fruits, ...products];

const mercado = [...products, ...fruits, 'Lechugas', 'Papas', 'Uvas'];

console.log(products);
console.log(fruits);
console.log(mercado);