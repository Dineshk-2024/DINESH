let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2 
let sumel = document.getElementById("sum-el")
function add(){
    let result  = num1  + num2 
   sumel.textContent = "SUM : " + result
}
function sub(){
    let result  = num1 - num2
  sumel.textContent = "SUM : " + result 
}
function mul(){
    let result  = num1 * num2
    sumel.textContent = "SUM : " + result
}
function div(){
    let result  = num1 / num2
    sumel.textContent = "SUM : " + result
}