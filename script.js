Math.PI = 4
console.log(Math.PI);

let descriptor = Object.getOwnPropertyDescriptor(Math,'PI');
console.log(descriptor);

const reatobj = {
    name : 'Reactangle 1',
    width : 10,
    hight : 10
}

 descriptor = Object.getOwnPropertyDescriptor(reatobj,'name');
console.log(descriptor);


