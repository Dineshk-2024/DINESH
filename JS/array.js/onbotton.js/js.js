
function changeColor(event){
    var color ="green";
    event.style.backgroundColor=color;
}
function handleOnBlur(x){
    x.value = x.value.toUpperCase()
}
function handleOnFocus(x){
    x.style.color = "yellow";
    x.style.backgroundColor = "red";  
}

