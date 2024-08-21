/* let fruit = ["apple","orange","apple","apple","orange"];
let appleshelf = document.getElementById("apple-shelf");
let orangeshelf = document.getElementById("orange-shelf");

function sortfruit(){
    for(let i=0 ; i<fruit.length; i++){
        if(fruit[i] === "apple"){
        appleshelf.textContent += "apple"
    }else if (fruit[i]=== "orange"){
        orangeshelf.textContent += "orange"
    }
}
}
sortfruit() */

let fruit = ["apple", "orange", "apple", "apple", "orange"];
let appleshelf = document.getElementById("apple-shelf");
let orangeshelf = document.getElementById("orange-shelf");

function sortfruit() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "apple") {
            appleshelf.textContent += "apple ";
        } else if (fruit[i] === "orange") {
            orangeshelf.textContent += "orange ";
        }
    }
}

sortfruit();
