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
// 2. implement a method getArea for Triangle class

Triangle.prototype.getPerimeter = function (){
    return this.a + this.b + this.c;
}

Triangle.prototype.getArea = function (){
    const s = this.getPerimeter() / 2;
    return Math.sqrt(s * (s - this.a)*(s - this.b)*(s - this.c));
}

// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
// 4. implement a method area for Circle class
// 5. implement a method circumference for Circle class

function Circle(radius) {
    this.type = 'circle';
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.getArea = function (){
    return Math.PI * Math.pow(this.radius, 2);
}

Circle.prototype.getCircumference = function (){
    return 2 * Math.PI * this.radius;
}


// Example usage:
const triangle = new Triangle(3, 4, 5);
console.log(triangle.getType());      // Output: "triangle"
console.log(triangle.getPerimeter()); // Output: 12
console.log(triangle.getArea());      // Output: 6

// Example usage:
const circle = new Circle(5);
console.log(circle.getType());           // Output: "circle"
console.log(circle.getArea());           // Output: 78.53981633974483 
console.log(circle.getCircumference());  // Output: 31.41592653589793 

//6. change all code above to use ES6 class syntax

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
        const s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this.a)*(s - this.b)*(s - this.c));
    }

}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.type = 'circle';
        this.radius = radius;
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

const triangleNew = new Triangle(3, 4, 5);
console.log(triangleNew.getType());           // Output: "triangle"
console.log(triangleNew.getPerimeter());      // Output: 12
console.log(triangleNew.getArea());           // Output: 6

const circleNew = new Circle(5);
console.log(circleNew.getType());             // Output: "circle"
console.log(circleNew.getArea());             // Output: 78.53981633974483
console.log(circleNew.getCircumference());    // Output: 31.41592653589793 