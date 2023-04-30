class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // Phương thức tính diện tích, được ghi đè bởi các lớp con
  getArea() {
    throw new Error("Chưa được cài đặt!");
  }

  // Phương thức di chuyển hình dạng
  move(x, y) {
    this.x += x;
    this.y += y;
  }

  // Phương thức hiển thị thông tin về hình dạng
  getInfo() {
    return `Hình dạng nằm ở (${this.x}, ${this.y})`;
  }
}

class Rectangle extends Shape {
  constructor(x, y, width, height) {
    super(x, y);
    this.width = width;
    this.height = height;
  }

  // Ghi đè phương thức tính diện tích của lớp cha
  getArea() {
    return this.width * this.height;
  }

  // Ghi đè phương thức hiển thị thông tin của lớp cha
  getInfo() {
    return `Hình chữ nhật có kích thước ${this.width} x ${this.height} và nằm ở (${this.x}, ${this.y})`;
  }
}

class Circle extends Shape {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }

  // Ghi đè phương thức tính diện tích của lớp cha
  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  // Ghi đè phương thức hiển thị thông tin của lớp cha
  getInfo() {
    return `Hình tròn có bán kính ${this.radius} và nằm ở (${this.x}, ${this.y})`;
  }
}

// Tạo một danh sách các hình dạng
let shapes = [
  new Rectangle(10, 20, 30, 40),
  new Circle(50, 60, 70),
  new Rectangle(80, 90, 100, 110),
  new Circle(120, 130, 140),
];

// Duyệt qua danh sách hình dạng và hiển thị thông tin của chúng
for (let shape of shapes) {
  console.log(shape.getInfo());
  console.log(`Diện tích: ${shape.getArea()}`);
  shape.move(5, 10);
  console.log(shape.getInfo());
}
