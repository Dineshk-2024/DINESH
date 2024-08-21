let gotoGoa = ( success , failure)=>{
let acc_bal=50000;
if(acc_bal> 15000){
    success("go and enjoy")
}else{
    failure("go to movie")
}
}
gotoGoa((msg)=>{console.log(msg)},(err)=>{console.log(err)})