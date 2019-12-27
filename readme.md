 # WPRSP
 ### Usage
 ```JavaScript
const picker = require('wprsp');
const set = [[0, 113], [1, 51], [2, 89], [3, 14514], [4, 0]];
const amount = 3;
const seed = 2 ** 16 + 1;
const subset = picker(amount, set, seed);
console.log(subset); // Set { 3, 1, 0 }
 ```