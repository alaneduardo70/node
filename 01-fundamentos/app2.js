const fs = require('fs');
const data = fs.readFileSync('README.MD', 'utf8');
const newData = data.replace(/React/ig, 'Angular');
const newFile = fs.writeFileSync('README-angular.md', newData);

console.log(newData);