function Shape() {
    this.type = 'shape';
}

Shape.prototype.getType = function() {
    return this.type;
}

function Triangle(a, b, c) {
    this.type = 'triangle';
    this.a = a;
    this.b = b;
    this.c = c;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

// your code goes here
// 1. implement a method getPerimeter for Triangle class
Triangle.prototype.getPerimeter = function() {
    return this.a + this.b + this.c;
};

// 2. implement a method getArea for Triangle class
Triangle.prototype.getArea = function() {
    let half_perimeter = this.getPerimeter() / 2;
    return Math.sqrt(half_perimeter*(half_perimeter - this.a)*(half_perimeter - this.b)*(half_perimeter - this.c));
};

const triangle = new Triangle(3, 4, 5);
console.log(triangle.getType());
console.log(triangle.getPerimeter());  // Outputs: 12
console.log(triangle.getArea());  // Outputs: 6

// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
function Circle(radius) {
    this.type = 'circle';
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

// 4. implement a method area for Circle class
Circle.prototype.getArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
}

// 5. implement a method circumference for Circle class
Circle.prototype.getPerimeter = function() {
    return 2 * Math.PI * this.radius;
}

const circle = new Circle(3);
console.log(circle.getType());
console.log(circle.getPerimeter());  // Outputs: 6pi
console.log(circle.getArea());  // Outputs: 9pi

// 6. change all code above to use ES6 class syntax

// class Shape {
//     constructor(type) {
//         this.type = type;
//     }
//     getType() {
//         return this.type;
//     }
// }

// class Triangle extends Shape {
//     constructor(a, b, c) {
//         super('triangle');
//         this.a = a;
//         this.b = b;
//         this.c = c;
//     }
//     getPerimeter() {
//         return this.a + this.b + this.c;
//     }
//     getArea() {
//         let half_perimeter = this.getPerimeter() / 2;
//         return Math.sqrt(half_perimeter*(half_perimeter - this.a)*(half_perimeter - this.b)*(half_perimeter - this.c));
//     }
// }

// class Circle extends Shape {
//     constructor(radius) {
//         super('circle');
//         this.radius = radius;
//     }
//     getPerimeter() {
//         return 2 * Math.PI * this.radius;
//     }
//     getArea() {
//         return Math.PI * Math.pow(this.radius, 2);
//     }
// }


// const triangle = new Triangle(3, 4, 5);
// console.log(triangle.getType());
// console.log(triangle.getPerimeter());  // Outputs: 12
// console.log(triangle.getArea());  // Outputs: 6

// const circle = new Circle(3);
// console.log(circle.getType());
// console.log(circle.getPerimeter());  // Outputs: 6pi
// console.log(circle.getArea());  // Outputs: 9pi
