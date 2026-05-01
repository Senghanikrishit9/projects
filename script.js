// 1. Normal Methods
class Rectangle{
    constructor(name,height,width){
        this.name = name;
        this.height = height;
        this.width = width
    }

    area(){
        return this.height * this.width
    }
   static getclass(){
        return 'Reactangle'
    }
    
}

const react = new Rectangle('react',10,10);
console.log(react.area());
console.log(Rectangle.getclass());


class name{
    constructor(name){
        this.name = name;
    }

    sayhello(){
        return `hello  to ${this.name}`
    }
}

const nan = new name("krishit");
console.log(nan.sayhello());

// 2. Static Method

class MathUtils{
    static add(a,b){
        return a + b;
    }
}

console.log(MathUtils.add(5,6));
