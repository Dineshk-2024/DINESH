class account{
    acc_id = 101;
    acc_name = "dinesh"
    acc_bal = 55000;
    open_account(){
            console.log("account opened successfully")
    }
    deposit_amount(amount){
        console.log(`amount-${amount} - Deposited successfully`)
    }
    withdrwal_amount(amount){
        console.log("amount withdrawl successfully")
    }
    }
    let a1=new account()
    a1.open_account();
    a1.deposit_amount(500);
    a1.withdrwal_amount(1000) 