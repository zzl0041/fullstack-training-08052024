function Shape() {
  this.type = "shape";
}

Shape.prototype.getType = function () {
  return this.type;
};

function Triangle(a, b, c) {
  this.type = "triangle";
  this.a = a;
  this.b = b;
  this.c = c;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

// your code goes here
// 1. implement a method getPerimeter for Triangle class
// 2. implement a method getArea for Triangle class
Triangle.prototype.getPerimeter = function () {
  return this.a + this.b + this.c;
};

Triangle.prototype.getArea = function () {
  const s = (this.a + this.b + this.c) / 2;
  return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
};

// 3. implement a new class Circle. this class should inherit from Shape class, and have a radius property.
// 4. implement a method area for Circle class
// 5. implement a method circumference for Circle class
function Circle(radius) {
  this.type = "circle";
  this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.getArea = function () {
  return Math.PI * this.radius * this.radius;
};

Circle.prototype.getCircumference = function () {
  return Math.PI * this.radius * 2;
};

// 6. change all code above to use ES6 class syntax
// See hw4_1.js
