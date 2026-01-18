
let empNumber = 1001; // number type
let empName = 'John Doe';
let isPermanent = true; // boolean type
let address; // undefined type
let salary = null; // null type
let empSymbol = Symbol('empId'); // symbol type

console.log(typeof empNumber); // number
console.log(typeof empName); // string
console.log(typeof isPermanent); // boolean
console.log(typeof address); // undefined
console.log(typeof salary); // object (this is a known quirk in JavaScript)
console.log(typeof empSymbol); // symbol    