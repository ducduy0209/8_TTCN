function sortAndRemoveDuplicates(arr) {
  arr.sort((a, b) => a - b); // sắp xếp mảng tăng dần

  let uniqueArr = [arr[0]]; // tạo một mảng mới với phần tử đầu tiên của mảng ban đầu

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      // nếu phần tử hiện tại khác với phần tử trước đó
      uniqueArr.push(arr[i]); // thêm phần tử vào mảng mới
    }
  }

  return uniqueArr; // trả về mảng mới đã được sắp xếp và loại bỏ các phần tử trùng lặp
}

let arr = [5, 3, 8, 1, 9, 3, 5, 2, 8];
let sortedArr = sortAndRemoveDuplicates(arr);
console.log(sortedArr); // [1, 2, 3, 5, 8, 9]
