// Array => type of object --> resizable --> 

const myarry = [0, 1, 2, 3, 4]

const visitedCity = ["Agra", "Kota", "Indore"]

myarry.push(9)

console.log(myarry);

myarry.pop()

console.log(myarry);

// add the value in from 

myarry.unshift(9)

console.log(myarry);

 myarry.shift()

console.log(myarry);

// indexof --> finding the index of num if it exist 


//Slice or splice

const newArray = myarry.join()
console.log(newArray);

console.log("A ", myarry);

const myn1 = myarry.slice(1, 3)

console.log(myn1);

console.log("B ", myarry);

const myn2 = myarry.splice(1, 3)

console.log(myn2);

console.log("C ", myarry);