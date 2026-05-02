// 1. Question 
class student{
    constructor(name,marks){
        this.name = name;
        this.marks = marks
    }

    getResult(){
        if(this.marks>40){
            return `${this.name} is passed with the marks of ${this.marks}`
        }else{
            return`${this.name} is fail with the marks of ${this.marks}`
        }
    }
}

const details = new student("krishit",50)
console.log(details.getResult());

// 2 . question

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        return `${this.owner}, your new balance is ${this.balance}`;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            return `Insufficient balance. You have only ${this.balance}`;
        } else {
            this.balance -= amount;
            return `${this.owner}, you withdrew ${amount}. Remaining balance: ${this.balance}`;
        }
    }

    checkBalance() {
        return `Current balance: ${this.balance}`;
    }
}

const acc = new BankAccount("krishit", 5000);

console.log(acc.deposit(1000));  
console.log(acc.withdraw(2000));  
console.log(acc.checkBalance());

// 3 . questions

class Rectangle{
    constructor(height,width){
        this.height = height;
        this.width = width;
    }

    area(){
        return this.height * this.width
    }

    perimeter(){
        return  2 * (this.height + this.width)
    }
}

const react = new Rectangle(40,50);
console.log(react.area());
console.log(react.perimeter());

// 4. Question
 class user{
    constructor(username,password){
        this.username = username;
        this.password = password
    }

    login(password){
        if(password === this.password){
            return "login succesfull"
        }else{
            return "wrong password"
        }
    }
 }


 const  user1 = new user("krishit","1234")
 console.log(user1.login('1234'));
console.log(user1.login("0000"));

// 5 . Questions
class Product{
    constructor(name,price,quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    totalPrice(){
        return this.price *  this.quantity
    }

    updateQuantity(q){
        this.quantity = q;
        return `Quantity upadated to ${this.quantity}`
    }
}

const Product1 = new Product("maag",20,20);
console.log(Product1.totalPrice());
console.log(Product1.updateQuantity(10));

 



