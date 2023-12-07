/*
Primitive(Call by value + send by using copy):
String, Number, Boolen, Null , undefined, Symbol, BigInt


Non-Primitive(refrence type)
Array, Object, Functiions

*/

const first = Symbol("123")

const second = Symbol("123")

console.log(first);

console.log(second);

console.log(first === second);

// Array

const heros = ["first", "second", "third"]

let myObj = {
    name: "Harsh", 
    age: 18
}

const myfunc = function(){
    console.log("Hello World!!");
}

myfunc()

console.log(myObj.name);
