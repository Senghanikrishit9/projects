// Array.map Method 
const Array1 =[10,20,30,40];

const output = Array1.map(Array1 => Array1 + 2);
console.log(output);


const nav = [23,45,67,89,90];

const out = nav.map(nav => 'nav' + nav);
console.log(nav);




const company = {
   name : "tata",
   categrios : "nanoo"
};
 
const comapnies = company.map((company) => {
   return{
      name : company.name,
      categrios : company.categrios
   }
});
console.log(comapnies);
