// function Shape() {
//     this.type = 'shape';
// }

// Shape.prototype.getType = function() {
//     return this.type;
// }

// function Triangle(a, b, c) {
//     this.type = 'triangle';
//     this.a = a;
//     this.b = b;
//     this.c = c;
// }

// Triangle.prototype = Object.create(Shape.prototype);
// Triangle.prototype.constructor = Triangle;

// // your code goes here
// // 1. implement a method getPerimeter for Triangle class
// Triangle.prototype.getPerimeter = function() {
//     return this.a + this.b + this.c;
// }
// // 2. implement a method getArea for Triangle class
// Triangle.prototype.getArea = function() {
//     const p = this.getPerimeter() / 2;
//     return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
// }

// // 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
// function Circle(r) {
//     this.type = 'circle';
//     this.r = r;
// }
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

// // 4. implement a method area for Circle class
// Circle.prototype.area = function() {
//     return Math.PI * this.r * this.r;
// }

// // 5. implement a method circumference for Circle class
// Circle.prototype.circumference = function() {
//     return Math.PI * 2 * this.r;
// }

// 6. change all code above to use ES6 class syntax

class Shape {
    constructor() {
        this.type = 'shape';
    }
    getType() {
        return this.type;
    }
}

class Triangle extends Shape {
    constructor(a, b, c) {
        super();
        this.type = 'triangle';
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const p = this.getPerimeter() / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    }
}

class Circle extends Shape {
    constructor(r) {
        super();
        this.type = 'circle';
        this.r = r;
    }
    area() {
        return Math.PI * this.r * this.r;
    }
    circumference() {
        return Math.PI * 2 * this.r;
    }
}

const newTriangle = new Triangle(3, 4, 5);
console.log(newTriangle.getType());
console.log(newTriangle.getPerimeter());
console.log(newTriangle.getArea());

const newCircle = new Circle(4);
console.log(newCircle.getType());
console.log(newCircle.r)
console.log(newCircle.area());
console.log(newCircle.circumference());