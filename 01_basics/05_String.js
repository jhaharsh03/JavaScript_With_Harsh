// const name = "Harsh"

// const repoCount = 50


// // String interpulation
// console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);


const getName = new String('Harsh Jha')

console.log(getName[0]);

//.length => for finding the length of a string

console.log(getName.charAt(2));

console.log(getName.indexOf('J'));

const newString = getName.substring(2, 4)

console.log(newString);

const anotherString = getName.slice(-8, 4)
console.log(anotherString);


// .trim ==> remove the starting space from the string 

const url = "https//harshjha%20/javaSctipt"


// replace the string or change with another one
console.log(url.replace('%20', '-'));

// includes => find to "" occur or not

console.log(getName.split(' '))