// Tạo số ngẫu nhiên từ 1 đến 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

// Khởi tạo số lần đoán và mảng lưu trữ các số đã đoán
let guessCount = 0;
const guesses = [];

// Hàm kiểm tra số đã đoán có hợp lệ hay không
function isValidGuess(guess) {
  if (isNaN(guess)) {
    alert("Vui lòng nhập một số!");
    return false;
  }
  if (guess < 1 || guess > 100) {
    alert("Vui lòng nhập một số từ 1 đến 100!");
    return false;
  }
  if (guesses.includes(guess)) {
    alert("Bạn đã đoán số này rồi!");
    return false;
  }
  return true;
}

// Hàm kiểm tra số đã đoán có chính xác hay không
function checkGuess(guess) {
  guesses.push(guess);
  guessCount++;

  if (guess === secretNumber) {
    alert(
      `Bạn đã đoán chính xác số bí mật ${secretNumber} sau ${guessCount} lần đoán!`
    );
    return true;
  }

  if (guessCount === 10) {
    alert(`Bạn đã hết số lần đoán. Số bí mật là ${secretNumber}.`);
    return true;
  }

  let message =
    "Số của bạn là quá " + (guess < secretNumber ? "nhỏ" : "lớn") + ".";
  message += ` Bạn còn ${10 - guessCount} lần đoán.`;
  alert(message);
  return false;
}

// Vòng lặp chính của trò chơi
while (true) {
  let guess = prompt("Hãy đoán một số từ 1 đến 100:");
  if (guess === null) {
    break;
  }
  guess = parseInt(guess);
  if (isValidGuess(guess)) {
    if (checkGuess(guess)) {
      break;
    }
  }
}
