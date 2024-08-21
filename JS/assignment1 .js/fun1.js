//fat arrow function..
let add2 =(a,b)=>{
    console.log(a+b)
}
add2(10,30)


let add3 = (a,b,c) => {
       return(a+b+c)
}
let r1=add3(10,20,30)
console.log(r1)
let r2=add3(44,34,65)
console.log(r2)



//named function introduction...
function sampleFun(a,b){
    console.log(a+b)
}
sampleFun(10,20)

//function Return
/*function sample(x,y){
    return x+y
}
console.log(sample(440,20))*/
function sample(x,y){
    return x+y
}
var x= sample(440,20)
console.log(x)

//Anonymous Function
//if there is no name for function it is anonymous function..
var num=function (){
 console.log("anonymous function")
} 
num()

//callback function 
//one function executed after anonther function will with same function call...
function mainfun(getcallfun){
    console.log("mainfunction executed")
    getcallfun()
}
function callback(){
    console.log ("callback function executed")
}
mainfun(callback);

//self invoking function
//there is function inside open and close()bracket and call the function with()bracket...
(function key(){
    console.log("invoking function")
})()

let add5 = (a,b)=> a+b;
console(add(1,2))

//setTimeout
setTimeout(() => {
    console.log("setTimeout execute");
}, 4000);
//setInterval
setInterval(() => {
    console.log("setInterval execute");
}, 4000);

//constructor function
var mul=new Function("a","b","c","return a*b*c") 
console.log(mul(5,5,5));

//arrow function...
const add = (a,b)=>{
    console.log(a+b)
}
add(10,20)