    class Account{
        min_Bal=500;
        acc_Bal=0;
        deposit_Amount(amount){
            this.acc_Bal = this.acc_Bal+amount
        }
        get_Bal(){
           return this.acc_Bal = this.acc_Bal;
        }
    }
    let a1=new Account();
    a1.deposit_Amount(15000)
    let a2=new Account();
    a2.deposit_Amount(50000);
    let bal1=a1.get_Bal()
    console.log(bal1)
    let bal2=a2.get_Bal()
    console.log(bal2)


