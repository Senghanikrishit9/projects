function Shape(name) {
    this.name = name;
};

Shape.prototype.logname = function () {
    console.log(`shape Name : ${this.name}`);

}

function Rectangle(name, height, width) {
    Shape.call(this, name);

    this.height = height;
    this.width = width;
};
// Inhertis shape prototype
Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.logname = function(){
    console.log(`rectangle Name : ${this.name}`);
    
}

function circle(name, radius) {
    Shape.call(this, name);
    this.radius = radius;
};

const rect = new Rectangle("rectangle", 40, 40);
// console.log(rect);

const circle1 = new circle("krishit", 20);
// console.log(circle1);

rect.logname();

