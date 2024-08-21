let player ={
    name:"Dinesh",
    chips: 145
}
let cards = []
let sum = 0 
let hasBlackJack = false
let isAlive = false
let message =""
 
let messageel = document.getElementById("message-el")
//let sumel = document.getElementById("sum-el")
//let sumel = document.querySelector("#sum-el")  //for id selector
let sumel = document.querySelector(".sum-el")
let cardsel = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomnumber = Math.floor(Math.random() * 13) + 1
    if(randomnumber > 10){
        return 10
    }else if (randomnumber ===1){
        return 10
    }else{
        return randomnumber
    }
}
function startGame(){
    isAlive = true
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()
    cards = [firstcard, secondcard]
    sum = firstcard + secondcard
    renderGame()
}
function renderGame(){
    cardsel.textContent = "Cards: "
    for(i=0 ; i< cards.length; i++){
        cardsel.textContent += cards[i] + " "
    }
    sumel.textContent = "Sum: " + sum
    if(sum <= 20){
        message ="do you want to draw a new card? 🙂"
    }else if(sum === 21){
        message ="Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    }else if(sum>21){
        message ="You're out of the game! 😭"
        isAlive = false
    }else { //another way for else
        message ="You're out of the game! 😭"
        isAlive = false
    }
    messageel.textContent = message
}

function newCard(){
    if (isAlive === true && hasBlackJack ===false){
        let card = getRandomCard() 
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
    }
   


 /* let age = 22
if (age < 21){
    console.log("you can not enter the club!")
}else{
    console.log("Welcome...!")
}
let age1 = 21
if (age1 <= 21){
    console.log("you can not enter the club!")
}else{
    console.log("Welcome...!")
}

let age2 = 100 
if(age2 < 100){
    console.log("Not eligible")
}else if (age2 === 100){
    console.log("Here is your birthday card from the KING!")
}else {
    console.log("Not eligible, you have already gotten one")
} */

/* Boolean 
console.log( 4 === 3) //false
console.log(5 > 2) //true
console.log(12 > 12) // false
console.log(3 < 0) //false
console.log(3 >= 3) //true
console.log(11 <= 11) //true
console.log(3 <= 2) //false */

/*arrays - ordered lists of items

let skills1 = ["GIT & Github", 
                "HTML, CSS, Javascript",
                "java, springboot, python, nodejs", 
                "Mysql, MongoDB",
                "AWS basics"]
    

//array indexes=[] 
//[] = indexes starts with 0 ....like [0],[1],[2],[3]
let skills = ["GIT & Github", 
    "HTML, CSS, Javascript",
    "java, springboot, python, nodejs", 
    "Mysql, MongoDB",
    "AWS basics"]
    console.log(skills.length-1)
console.log(skills[4])
console.log(skills[1])
console.log(skills[0])
console.log(skills[3])
console.log(skills[2])

//adding and removing items from arrays...
let newMessage = "same here!"
skills.push(newMessage)
console.log(skills)
skills.pop()
console.log(skills)

//array with multiple datatypes...
let yourself = ["dinesh", 22, true] 

//Counting .log (count)
//for loop
//   START   FINISH    STEP SIZE
for (count=10; count<21; count +=1){
 console.log(count)
}

//for loops and arrays...
let skills = ["GIT & Github", 
    "HTML, CSS, Javascript",
    "java, springboot, python, nodejs", 
    "Mysql, MongoDB",
    "AWS basics"]

    for(i=0; i<5; i+=1){
        console.log(skills[i])
    }
let cards = [7,3,9]
    for(j=0; j<cards.length; j++){
        console.log(cards[j])
    }

for (counts=10; counts<101; counts +=10){
    console.log(counts)
   }

   // for loops,arrays and DOM...

let sentence = ["Hello","my","name","is","per"] 
let greetingel = document.getElementById("greeting-el")

for(let i=0; i<5; i++){
    greetingel.textContent += sentence[i] +" "
}
    
//returning values in functions...
let player1time = 102
let player2time = 107

function getFastestRaceTime(){
    if(player1time < player2time){
        return player1time
    }else if (player2time < player1time){
        return player2time
    }else{
        return player1time
    }
}

//let getFastestRace = getFastestRaceTime()
//console.log(getFastestRace)

function totalracetime(){
 return player1time + player2time
} 
 
let totaltime = totalracetime()
console.log(totaltime)

// generating random numbers with Math.random()...
let getRandomCard = Math.random()*10
    console.log(getRandomCard) 
    //Math.random()     gives 0.00000 -> 0.99999
    //Math.random()*10    gives 0.00000 -> 9.99999

//flooring the number with Math.random()...
let flooredNumber = Math.floor(3.67273)
console.log(flooredNumber)
//it removes the decimals... 
//Math.floor(3.67273)   gives 3

//using Math.random() and Math.floor() to create a dice...
let randomnumber = Math.floor(Math.random() * 6) + 1
console.log(randomnumber)
//Math.floor(Math.random()*6)    gives 0 / 1 / 2 / 3 / 4 / 5 
//Math.floor(Math.random()*6) + 1   gives  1 / 2 / 3 / 4 / 5 / 6  

//completing our dice function...
function rollDice(){
    let randomnumber = Math.floor(Math.random() * 6) + 1
    return randomnumber
}
console.log(rollDice())


// assign values in the startGame function...
//....
//our new card feature is broken...
//....
//the logical AND operator...

/*let hascompletedcourse = true
let givescertificate = true

if (hascompletedcourse === true && givescertificate ===true){
    generatecertificate()
}

function generatecertificate() {
    console.log( " generating certificate..")
} 

//the logical OR operator...
let hascompletedcourse = true
let givescertificate = true

if (hascompletedcourse === false || givescertificate ===true){
    generatecertificate()
}

function generatecertificate() {
    console.log( " generating certificate..")
}

let likesDocumentaries = true
let likesStartups = true

if(likesDocumentaries ===false || likesStartups === true){
    recommendMovie()
}

function recommendMovie(){
    console.log("Hey, check out this new file we think you will like! ")
}

//only trigger newcard() if you're allowed to

if (isAlive === true && hasBlackJack ===false){

}


//intro to objects...
//objects  - store data in depth - composite / complex data type
//key-value pairs...
 let course = {
    title: "learn CSS Grid for free",
    lessons: 16,
    creater: "dinesh",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html","css"]
 }

 console.log(course.creater)

 
 let airbnb = {
Rooms: "private room in galway",
guests: 4,
isveryneat: true,
avail : ["1 bedroom","2 beds","private half-bath"],
asAlive: "Live like a king in my castle",
reviews: 1268,
ratings : 4.95,
cost: 190,
isnightstay: true
 }

 console.log(airbnb.isnightstay)
 console.log(airbnb.avail)
 console.log(airbnb.ratings)
 console.log(airbnb.Rooms)
*/
