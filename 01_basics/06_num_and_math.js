const score = 400

const balance = new Number(4000)

console.log(score);
console.log(balance);

console.log(score.toFixed(4));


const number = 56.898309482

console.log(number.toPrecision(3));

const hunderds = 1000000

console.log(hunderds.toLocaleString('en-IN'));

// ******************* Maths **********************************


console.log(Math.abs(-3));
console.log(Math.round(4.2));


console.log(Math.random());
console.log((Math.floor(Math.random()*10))+1);


// code for finding the random number between two number
const min = 10
const max = 20
console.log(Math.random() * (max-min +1) + min);