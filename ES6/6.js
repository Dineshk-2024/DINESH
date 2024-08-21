//let..
var  x = 10;
{  
  let x = 2; 
}
document.getElementById("demo").innerHTML = x;
  
//const..
var  x = 10;
{  
  const x = 2;
}
document.getElementById("demo").innerHTML = x;


//arrow function ...
const x = (x,y) => x*y;
document.getElementById("demo").innerHTML = x(5, 5);

//object distructuring...
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  // Destructuring Assignment
  let { firstName, age } = person;
  
  // Display Data
  document.getElementById("demo").innerHTML =
  firstName + " is " + age + " years old."; 

//Array Destructuring....
const fruits = ["apple","banana","orange","watermelon","mango"]
let [,fruit2,fruit3] = fruits
document.getElementById("demo").innerHTML= fruit2+", " +fruit3  

//The Spread (...) Operator...
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];
const year =[...q1,...q2,...q3,...q4];
document.getElementById("demo").innerHTML = year 

const numbers = [23,55,21,87,56];
let maxValue = Math.max(...numbers);
document.getElementById("demo").innerHTML = maxValue; 

//the for/of loop...
const cars = ["bmw","volvo","mini"] ;
let text = "";
 for (car of cars){
    text += car + "<br>";
 }
 document.getElementById("demo").innerHTML = text;  */

 ////javascript Maps...
 const fruitss =new Map([
  ["apples", 500],
  ["bananas",300],
  ["orange",200]
]);

let numb = fruitss.get("apples");
document.getElementById("demo").innerHTML = "there "+ "are "+ numb+ " " +  "apples."
