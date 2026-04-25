class Rectangle{
    constructor(name,height,width){
        this.name = name,
        this.height = height,
        this.width = width
    }
    area (){
        return this.height * this.width
    }

    perimeter(){
        return (this.width + this.height)
    }
    isSqaure(){
        return this.height === this.width
    }
}
const square = new Rectangle("square",20,20)
console.log(square.area());
console.log(square.perimeter());
console.log(square.isSqaure());



