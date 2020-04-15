// alert("this is an error"); // opens a popup in the window

console.log("hello world");
console.warn("this is a warnning");
console.error("this is an error");

// var, let, const --================== variables & dataType

let num = 30;
num = 28;
console.log(num);

const roll = 44;
// roll = 32; 
console.log(roll); // throws an error

//===================================== dataTypes
// Strings, Numbers, Boolean, null, undefined

let name = "Sandip Deb";
let age = 21;
let hasJob = false;
const cgpa = 6.90;
let isMarried = null; // null is a object in js
let hasChiled = undefined;
let income; // also a undefined
console.log(name);
console.log(typeof(name)); // tells the type of the dataType


//----------------------------- concatinaion
const Name = "sandip deb";
const Age = 21;
const Details = `hey my name:${Name} & i am ${Age}years old`;
console.log(Details);
console.log("my name is "+ Name+ " my age is "+ Age);
console.log(`my name is ${Name} my age is ${Age}`); 

//---------------------------- Strings properties & methods
const s = "hello world";
console.log(s.length); // property
console.log(s.toLocaleUpperCase()); // method
console.log(s.substring(0,5).toLocaleUpperCase()); // takes starting and end index
console.log(s.split("")); // gives an array by spliting letters

const str = "this is an message";
console.log(str.split(" ")); // split by a space

//============================== Arrays

const number = new Array(1,2,3,4,5,6);
console.log(number);
const fruits = ["apple", "banana", "mango", 123, false];
console.log(fruits);
console.log(fruits[2]); // accecing a value
fruits[6] = "grapes"; // add new value or manupulate a value
fruits.push("push"); // add element at the ending
fruits.unshift("oranges"); // add element at the ending
fruits.pop(); // delete the last element
fruits.shift();  // delete the first element
console.log(fruits);
console.log(Array.isArray(fruits)); // check if the variable is of array type
console.log(fruits.indexOf("banana")); // gives the index of that element returns -1 if the element is not there

//============================== object literals(key value pair)
const person = {
    firstName:"sandip",
    lastName: "deb",
    age: 21,
    hobbies: ["coding","gamming","cude-solving"],
    hasMarried: false,
    address:{
        street:"silchar nit road",
        city:"silchar",
        pin: 788014
    }
}
console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[2]);
console.log(person.address.pin);

//----------------------- destructuring
const {firstName, lastName, address:{city}} = person;
console.log(firstName);
console.log(city);

person.email = "sandipdeb05@gmail.com"; // adds a value to the object
console.log(person.email);

//------------------------- object inside an array
const todos = [
    {
        id:1,
        text:"do some meditation",
        isComplecated: true,
    },
    {
        id:2,
        text:"coding",
        isComplecated: false,
    },
    {
        id:3,
        text:"read books",
        isComplecated: false,
    }
];
console.log(todos);
console.log(todos[2].text);
//------------------------ JSON
const todoJSON = JSON.stringify(todos); // convert to JSON format so that this can be send to the server
console.log(todoJSON);