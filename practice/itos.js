var str;
let img2Str= ()=>{
    let imageFile = document.getElementById("img").files[0];
    let reader=new FileReader();
    reader .readAsDataURL(imageFile);
    reader.addEventListener("load",()=>{
        if (reader.result){
            str = reader.result;
            console.log(reader.result);
            document.getElementById("data_Tag").innerHTML =reader.result

        }
    })
}    

let str2Img = ()=>{
    document.getElementsByTagName('img')[0].src=str;
}