let employees = [
    {Id:101,Name:"dinesh",sal:555000},
    {Id:103,Name:"ganesh",sal:655000}
    ]

    let createEmployee=(emp)=>{
        employees.push(emp)
    }

    let getEmployeses = ()=>{
        let rows = ''
        for(emp of employees){
        rows +=`<tr>
                <td>${emp.Id}</td>
                <td>${emp.Name}</td>
                <td>${emp.sal}</td>
                </tr>`
            }
            document.getElementById('table_body').innerHTML=rows;
        }
        createEmployee({Id:103,Name:"Laxman",sal:100000},getEmployeses)
