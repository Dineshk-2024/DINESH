//the let keyword :-
//let keyword allows you to declare a variable with block scope..
var x = 10;
{
let x = 2;
}
console.log(x)  


//the const keyword...
//The const keyword allows you to declare a constant (a JavaScript variable with a constant value).
//Constants are similar to let variables, except that the value cannot be changed.
var x = 10;
{
const x = 2;
}
console.log(x)

//Arrow Function...
//Arrow functions allows a short syntax for writing function expressions.
//You don't need the function keyword, the return keyword, and the curly brackets.
const num = ((x,y)=>{ //parameters
       console .log(x*y)  
})
num(5,5) //arguments



//Object Destructuring
//Destructuring assignment makes it easy to assign array values and object properties to variables.
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
let {firstName,lastName,age} = person
console.log(firstName,lastName,age)

//Array Destructuring...
//Destructuring assignment makes it easy to assign array values and object properties to variables.
const fruits = ["apple","banana","orange","watermelon","mango"]
let [,fruit2,fruit3] = fruits
console.log(fruit2,fruit3)

//The Spread (...) Operator...
//The ... operator expands an iterable (like an array) into more elements:
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];
const year =[...q1,...q2,...q3,...q4];
console.log(year)

//The For/Of Loop...
//variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.
//iterable - An object that has iterable properties.
//Looping over an Array...
const cars = ["BMW", "Volvo", "Mini"];
let text = "";
for (let car of cars){
    console.log(car) 
}
//looping over a string...
let language = "JavaScript";
let text1 = "";
for (let x of language) {
    text1 += x + " ";
}
console.log(text1) */

//javascript Maps...
const fruitss = new Map([
  ["apples", 500],
  ["bananas",300],
  ["orange",200]
]);

let numb = fruitss.get("apples");
console.log(numb)


