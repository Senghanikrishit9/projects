function Rectangle(name, width, height){
    this.name = name;
    this.width = width;
    this.height = height;
    this.area = function() {
        return this.width * this.height;
    };
}

const  rect1 = new Rectangle('rectangle 1',20,40);
const rect2 = new Rectangle('recatangle 2',10,30);

console.log(rect1.name,rect2.height);
console.log(rect1['width']);

// Add property
rect1.color = 'red';

rect1.perimeter = () => 2 * (rect1.width + rect1.height);

// Delete
delete rect2.perimeter;

// check property
console.log(rect1.hasOwnProperty('color'));
console.log(rect2.hasOwnProperty('color'));

// Get keys 
console.log(Object.keys(rect1));

// Get values
console.log(Object.values(rect1));

// Get entries
console.log(Object.entries(rect1));

for( let [keys, values] of Object.entries(rect1)) {
    if(typeof values !== 'function'){
         console.log(`${keys} - ${values}`);
    }
    
}




function home() {
    this.home1 = "home1",
    this.home2 = "home2",
    this.home3 = "home3"
}

let homes = new home();

console.log(homes.home1);



