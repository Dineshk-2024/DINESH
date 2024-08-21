class user{
    current_year=2024;
    cal_age(year){
        return this.current_year - year;
    }
}
let u1 = new user();
console.log(u1.cal_age(1983))
