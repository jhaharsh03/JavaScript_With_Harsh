
let mydate = new Date()

console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());


console.log(typeof mydate);

let mycreateddate = new Date("01-14-2023")

//Month start from zero

let mytime = Date.now()

console.log(mytime);

console.log(mycreateddate.getTime());