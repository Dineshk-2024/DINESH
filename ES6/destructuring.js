let state = {
    p_id:"p101",
    p_name:"iPhone",
    user : {
        uid:101,
        Name:'rahul'
    },
    loc : ['wind','BNG']
}

let {user}= state
let {Name}=user
console.log(Name)

let {p_name} = state
console.log (p_name)

//wap - swap no-with 3rd variable
var a= 10
var b= 20
var c;
c=a;
a=b;
b=c;

console.log(a)
console.log(b) 

//wap - swap no-without 3rd variable
//array destructuring..
var a = 10;
var b = 20;
[a,b] = [b,a]

console.log(a)
console.log(b)