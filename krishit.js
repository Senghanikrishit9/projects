// Array challange

// challange first

const people = [
  {
    firstname: "krishit",
    lastname: "senghani",
    email: "krishitsenghani22@gmail.com",
    Phonenum: 7383623637,
    Age: 19,
  },
  {
    firstname: "krish",
    lastname: "senghani",
    email: "krishsenghani79@gmail.com",
    Phonenum: 7433983536,
    Age: 19,
  },
  {
    firstname: "Adrash",
    lastname: "senghani",
    email: "Adrashsenghani84@gmail.com",
    Phonenum: 8401672436,
    Age: 56,
  },
  {
    firstname: "jay",
    lastname: "senghani",
    email: "jaysenghani23@gmail.com",
    Phonenum: 8645893409,
    Age: 67,
  },
];
 
const youngpeople  = people.filter((people) => people.Age <= 25)
console.log(youngpeople);

// challage second

const number = [2,-30,50,20,12,-9,7]
const postivenum = number.filter((number) => number > 0)
console.log(postivenum);
const nagativenum = number.filter((number => number < 0))
console.log(nagativenum);

// change third 

const words = ['coders','programmer','developer'];

const cwords = words.map((words) =>{
   return words[0].toUpperCase() + words.slice();
})
console.log(cwords);