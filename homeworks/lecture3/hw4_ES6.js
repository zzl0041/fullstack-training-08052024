class Shape {
  constructor() {
    this.type = "shape";
  }
}

class Triangle extends Shape {
  constructor(a, b, c) {
    super();
    this.type = "triangle";
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter() {
    return (this.a + this.b + this.c).toFixed(2);
  }

  getArea() {
    const s = (this.a + this.b + this.c) / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)).toFixed(2);
  }
}

// ------ testing for Triangle object ------
const triangle = new Triangle(2, 2, 3);
console.log(triangle.getPerimeter());
console.log(triangle.getArea());

class Circle extends Shape {
  constructor(radius) {
    super();
    this.type = "circle";
    this.radius = radius;
  }

  getArea() {
    return (Math.PI * this.radius * this.radius).toFixed(2);
  }

  getCircumference() {
    return (Math.PI * this.radius * 2).toFixed(2);
  }
}

// ------ testing for Circle object ------
const circle = new Circle(3);
console.log(circle.getArea());
console.log(circle.getCircumference());
