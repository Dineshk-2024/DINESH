class account{
    /*acc_id;
    acc_Name;
    acc_bal;*/
    min_bal = 500;
    constructor(id, Name, amount){
        this.acc_id = id;
        this.acc_Name = Name;
        this.acc_bal = amount;
    }
    deposit_amount(amount){
        this.acc_bal = this.acc_bal + amount
    }
    withdrawl(amount){
        this.acc_bal = this.acc_bal  - amount
    }
    get_bal(){
    return this.acc_bal - this.min_bal
    }
}

let a1 = new account (101,"rahul",5000)
let a2 = new account (102,"soniya",6000)
let a3 = new account (103,"modi",7000)
a1.deposit_amount(150)
a1.withdrawl(15)
console.log(a1.get_bal())
a2.deposit_amount(150)
a2.withdrawl(15)
console.log(a2.get_bal())
a2.deposit_amount(150)
a2.withdrawl(15)
console.log(a2.get_bal()) 