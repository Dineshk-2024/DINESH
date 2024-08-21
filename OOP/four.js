class Employee{
    org_Name="TCS"

    get_Details(){
       console.log("Displaying Details")
   }
}

let e1=new Employee()
let e2=new Employee()

console.log(e1)
console.log(e1.org_Name)
e1.get_Details()


console.log(e2)
console.log(e2.org_Name)
e2.get_Details()