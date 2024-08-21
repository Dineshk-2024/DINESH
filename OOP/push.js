let prices = [98,198,298,398,498]

let new_prices = []
for(price of prices){
    new_prices.push(price+1)
}
console.log(prices)
console.log(new_prices)


prices.map((price)=>{
    console.log(price)
})

prices.forEach((price)=>{
    console.log("ge",price)
})