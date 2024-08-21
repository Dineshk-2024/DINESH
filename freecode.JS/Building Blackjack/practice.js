 const Person = {
    name:"dinesh",
    age:22,
    country: "india",
    greet(){
        console.log(`${this.name} is ${this.age} years old and live in ${this.country}`)
    }
}

Person.greet()

//if else with and operator
let age = 2

if (age<6){
    console.log("free")
}else if (age>6 && age<17){
    console.log("child discount")
}else if(age>18 && age<26){
    console.log("student discount")
}else if(age>27 && age<66){
    console.log("full price")
}else{
    console.log("senior citizen discount")
}

//loops and arrays...
console.log("The 5 largest countries in the world")
let largecountries = ["china","india","usa","indonesia","pakistan"]

 for(i=0; i<largecountries.length; i++){
    console.log(largecountries[i])
} 

let largecountriess = ["Tuvalu","india","usa","indonesia","Monaco"]
newcountry = "pakistan"
largecountriess.pop(newcountry)
largecountriess.push(newcountry)
newcountries = "china"
largecountriess.shift(newcountries)
largecountriess.unshift(newcountries)
console.log(largecountriess)

largecountriess.pop()
largecountriess.push("pakistan")
largecountriess.shift()
largecountriess.unshift("china")
console.log(largecountriess)


//logical operator...
let dayOfMonth = 31
let weekday = "wednesday"

if (dayOfMonth === 3 || weekday === "wednesday"){
    console.log("done")
}

let dayOfMonth1 = 31
let weekday1 = "wednesday"

if (dayOfMonth1 === 31 && weekday1 === "wednesday"){
    console.log("done1")
}

//rock ,papper,scissor...
let hands = ["rock","paper","scissor"]
function gethand(){
        let ramdomindex = Math.floor (Math.random() * 3)
        return hands[ramdomindex]
}
console.log(gethand())
/*let handss = ["rock","paper","scissor"]
function gethands(){
        let ramdomindex = Math.floor (Math.random() * 3)
        return handss[ramdomindex]
}
console.log(gethands()) */

