class Wallet {
    constructor(){
        this._balnace = 0;
    }
 deposit(amount){
    this._balnace += amount;
 }  
 
 withdraw(amount){
    this._balnace-= amount;
 }
 getBalance(){
    return this._balnace;
 }

}

const Wallet = new wallet();
Wallet.deposit(300);
Wallet.withdraw(50);
console.log(Wallet.getBalance());
