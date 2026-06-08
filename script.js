let amount = Number(prompt("What is your final amount"))

if(amount>0 && amount <=5000){
    console.log("you cannot get any discount")
}else if(amount>5001 && amount <=7000){
    console.log("you can get 5% discount")
}else if(amount>7001 && amount<=9000){
    console.log("you can get 10% discount")
}else{
    console.log("you can get  20% discount");
}