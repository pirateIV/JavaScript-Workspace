class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // getter
  get area() {
    return this.calcArea()
  }
  // Method
  calcArea() {
    return this.height * this.width
  }
  *getSides() {
    yield this.height
    yield this.width
  }

}

// Expression: the class is anonymous but is assigned to a variable

class 