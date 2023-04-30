// Định nghĩa một lớp đối tượng
class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.interests = [];
  }

  // Thêm sở thích mới
  addInterest(interest) {
    this.interests.push(interest);
  }

  // Lấy danh sách sở thích
  getInterests() {
    return this.interests;
  }

  // Lấy tên đầy đủ
  getFullName() {
    return this.name;
  }

  // Lấy địa chỉ đầy đủ
  getFullAddress() {
    return `${this.address.street}, ${this.address.city}, ${this.address.state} ${this.address.zip}`;
  }
}

// Định nghĩa một lớp đối tượng con kế thừa từ lớp Person
class Student extends Person {
  constructor(name, age, address, major) {
    super(name, age, address);
    this.major = major;
  }

  // Lấy chuyên ngành
  getMajor() {
    return this.major;
  }

  // Thay đổi chuyên ngành
  setMajor(major) {
    this.major = major;
  }
}

// Tạo đối tượng Student mới
let student = new Student(
  "John Smith",
  20,
  {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
  "Computer Science"
);

// Thêm sở thích mới cho sinh viên
student.addInterest("music");

// Thay đổi chuyên ngành của sinh viên
student.setMajor("Electrical Engineering");

// Hiển thị thông tin về sinh viên
console.log(`Tên: ${student.getFullName()}`);
console.log(`Tuổi: ${student.age}`);
console.log(`Địa chỉ: ${student.getFullAddress()}`);
console.log(`Chuyên ngành: ${student.getMajor()}`);
console.log(`Sở thích: ${student.getInterests().join(", ")}`);
