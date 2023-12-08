// The given onject is singleton
// const tinderUser = new Object()


const tinderUser = {}

tinderUser.id = "123fdaf"
tinderUser.name = "Sunny"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "Harsh@1234",
    fullName: {
        userfullname: {
            firstName: "Harsh",
            lastName: "Jha"
        }
    }
} 

console.log(regularUser.fullName.userfullname.lastName);


const obj1 = {1: "a", 2 : "b"}
const obj2 = {7: "a", 3 : "b"}
const obj3 = {4: "a", 5 : "b"}

const obj4 = Object.assign({}, obj1, obj2, obj3)

console.log(obj4);


const users = [
    {
        id: 1, 
        email: "harsh@gmail.com",
    },
    {
        id: 2, 
        email: "harsh@gmail.com",
    },
    {
        id: 3, 
        email: "harsh@gmail.com",
    },
    {
        id: 4, 
        email: "harsh@gmail.com",
    },
]

console.log(users[0]);

console.log(Object.keys(tinderUser));

console.log(tinderUser);

const course = {
    coursename: "js in Hindi",
    prime: 9999,
    courseInstructor: "Harsh",
}

const {courseInstructor: instructor} = course

console.log(instructor);

// Apma kam kisi aur ke sir par dal dena hi API kahlata hai => 

{
    name: "Harsh"
    coursename: "js by harsh"
    price: "free"
}

// Json ==> JavaScipt Object Notation