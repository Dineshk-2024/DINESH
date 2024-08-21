let employees=[{id:101,name:"ganesh",sal:55000,
    id:102,name:"suresh",sal:45000
}]
let createEmployee = (emp)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let flag = true 
            employees.push(emp)
            flag===true ? resolve("inserted"):reject("failed");

        }, 4000)
    })
}
let getEmployee=()=>{
    setTimeout(()=>{
        let rows=""
        for(emp of employees){
            rows = rows + `<tr>
            <td>${emp.id}</td>,
            <td>${emp.name}</td>,
            <td>${emp.sal}</td>
            </tr>
            `
            document.getElementById("table_body").innerHTML=rows
        }

    }, 2000)

}
createEmployee({id:103,name:"dinesh",sal:65000})
.then((msg)=>{
    console.log(msg)
    getEmployee()})
.catch((err)=>{
    console.log(err)
})
