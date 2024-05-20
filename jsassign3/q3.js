let string = 'INDIA';
let stringArray = string.split('');
stringArray.splice(3, 0, 'ONES');

let result = stringArray.join('');

console.log(result); // Output: 'INDONESIA'
