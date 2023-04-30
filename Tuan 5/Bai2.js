// Mảng số cần phân tích dữ liệu
let numbers = [5, 7, 1, 8, 4, 9, 3, 2];

// Hàm tính tổng các phần tử trong mảng
function sum(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

// Hàm tính trung bình cộng các phần tử trong mảng
function average(array) {
  let total = sum(array);
  let length = array.length;
  return total / length;
}

// Hàm tìm phần tử lớn nhất trong mảng
function max(array) {
  let maxElement = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxElement) {
      maxElement = array[i];
    }
  }
  return maxElement;
}

// Hàm tìm phần tử nhỏ nhất trong mảng
function min(array) {
  let minElement = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minElement) {
      minElement = array[i];
    }
  }
  return minElement;
}

// Hiển thị kết quả phân tích dữ liệu
console.log(`Tổng các phần tử trong mảng là ${sum(numbers)}.`);
console.log(`Trung bình cộng các phần tử trong mảng là ${average(numbers)}.`);
console.log(`Phần tử lớn nhất trong mảng là ${max(numbers)}.`);
console.log(`Phần tử nhỏ nhất trong mảng là ${min(numbers)}.`);
