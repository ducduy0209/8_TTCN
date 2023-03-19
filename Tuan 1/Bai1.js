const countCharacters = (str) => {
  // Tạo một đối tượng để lưu trữ số lần xuất hiện của từng chữ cái và số
  let charCount = {};

  // Chuyển đổi chuỗi thành chữ thường để đếm các ký tự không phân biệt chữ hoa và chữ thường
  str = str.toLowerCase();

  // Duyệt qua từng ký tự trong chuỗi
  for (let i = 0; i < str.length; i++) {
    // Nếu ký tự là một chữ cái hoặc số
    if (/[a-z0-9]/.test(str[i])) {
      // Tăng số lần xuất hiện của ký tự đó lên 1
      charCount[str[i]] = (charCount[str[i]] || 0) + 1;
    }
  }

  // Trả về đối tượng chứa số lần xuất hiện của từng ký tự
  return charCount;
};

// Sử dụng hàm countCharacters để đếm số lần xuất hiện của từng ký tự trong chuỗi "Hello World 123"
console.log(countCharacters("Hello World 123"));
