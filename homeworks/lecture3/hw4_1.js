class Shape {
  constructor() {
    this.type = "shape";
  }
}

class Triangle extends Shape {
  constructor(a, b, c) {
    this.type = "triangle";
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    const s = (this.a + this.b + this.c) / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
}

class Circle extends Shape {
  constructor(radius) {
    this.type = "circle";
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  getCircumference() {
    return Math.PI * this.radius * 2;
  }
}
