const fs = require('fs');
const data = fs.readFileSync('README.MD', 'utf8');
// console.log({
//     cantidad_palabras: data.split(' ').length,
//     // palabras: data.split(' '),
//     tipo: typeof data.split(' '),
// });

const reactWordCount = data.match(/react/gi ?? []).length;
console.log(reactWordCount);