//reusing the existing class functionallity and extending /adding new features
//

/*class Parent{
  assets='100cr'
}

class Child extends Parent{

}

let c1 = new Child()
console.log(c1) 

class Parent{
    m1(){
        console.log("m1 method")
    }
    m2(){
        console.log("m2 method")
    }
}
class Child extends Parent{
    m3(){
        console.log("m3 method")
    }
}
let c2 = new Child()
console.log(c2)
c2.m1();
c2.m2();
c2.m3(); 


class Parent{
    constructor(){ 
        console.log("parents class -constructor")
    }
}
class Child extends Parent {
    constructor(){
        super()
        console.log("child class -constructor")
    }
}

new Child() */


class Account{

}

class SA extends Account{
    constructor(){
        super()
        console.log("SA class -constructor")
    }
}

new SA()
