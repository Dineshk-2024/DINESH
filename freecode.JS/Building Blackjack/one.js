//methods on object...
//using object literals...
const obj1 = {
   name: "dinesh",
   greet : function(){
    console.log(`hello, my name is ${this.name}` );
   }
} 
obj1.greet(); //hello, my name is dinesh

//using ES6 shorthand syntax...
const obj2 = {
    name: "dinesh",
    greet(){
     console.log(`hello, my name is ${this.name}` );
    }
 } 
 obj2.greet(); //hello, my name is dinesh

 //adding methods to an object after creation...
 const obj = {}
    obj.name = "dinesh",
    obj.greet = function(){
     console.log(`hello, my name is ${this.name}` );
    }
 obj.greet(); //hello, my name is dinesh

 //using constructor functions..
function Person(name){
    this.name = name;
    this.greet = function(){
        console.log(`hello, my name is ${this.name}`)
    }
 }
const per = new Person('dinesh');
per.greet(); 

//using prototypes...
function Person1(name){
    this.name = name;
}
    Person1.prototype.greet1= function(){
        console.log(`hello, my name is ${this.name}`)
    };
 
const per1= new Person1('dinesh');
per1.greet1();

//using classes(ES6)
class employee {
    constructor(name){
    this.name = name;
}

     greet2(){
        console.log(`hello, my name is ${this.name}`)
     }
    }

    const employee1 = new employee("dinesh")
    employee1.greet2();