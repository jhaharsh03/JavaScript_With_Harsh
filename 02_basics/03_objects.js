// Singleton object

//object literals

let key1 = 1
const mysyl = Symbol(key1)


const JsUser = {
    name: "Harsh",
    age: 21,
    [mysyl]: mysyl,
    location: "Indore",
    email: "harsh@gmail.com",
    isLoggedIn: false,
    lastLogIn: ["Monday", "Saturday"]
}

console.log(JsUser.email);

console.log(JsUser["email"]);
// Once you freeze the object then you can't do the changes from the object
// Object.freeze(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js_User, How You doing!");
}

JsUser.greeting2 = function(){
    console.log(`Hello ${this.name}, is this ${this.email} is your email?`);
}

console.log(JsUser.greeting());

console.log(JsUser.greeting2());