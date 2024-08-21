let createEmployee =(    callback)=>{
    setTimeout(()=>{
        console.log("gm")
        callback()
    }, 4000)
}

let getEmployee =()=>{
setTimeout(()=>{
    console.log("ga")
}, 2000)
}

createEmployee(     getEmployee) 