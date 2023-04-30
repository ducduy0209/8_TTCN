// Danh sách các từ để đoán
const words = [
  "javascript",
  "programming",
  "computer",
  "developer",
  "algorithm",
];

// Chọn ngẫu nhiên một từ từ danh sách
let chosenWord = words[Math.floor(Math.random() * words.length)];

// Tạo một mảng rỗng để lưu trữ các ký tự đoán
let guessedLetters = [];

// Số lần đoán sai tối đa trước khi thất bại
const maxWrongGuesses = 6;

// Số lần đoán sai hiện tại
let wrongGuesses = 0;

// Hàm để kiểm tra xem một ký tự có nằm trong từ được chọn hay không
function isLetterInWord(letter) {
  return chosenWord.includes(letter);
}

// Hàm để hiển thị từ đang được đoán và các ký tự đã đoán đúng
function displayWord() {
  let wordDisplay = "";
  for (let i = 0; i < chosenWord.length; i++) {
    if (guessedLetters.includes(chosenWord[i])) {
      wordDisplay += chosenWord[i] + " ";
    } else {
      wordDisplay += "_ ";
    }
  }
  console.log(wordDisplay);
}

// Hàm để kiểm tra xem người chơi đã thắng hay chưa
function isGameWon() {
  for (let i = 0; i < chosenWord.length; i++) {
    if (!guessedLetters.includes(chosenWord[i])) {
      return false;
    }
  }
  return true;
}

// Hàm để bắt đầu trò chơi
function startGame() {
  console.log("Welcome to the word guessing game!");

  // Hiển thị số lượng ký tự trong từ được chọn
  console.log(`The word has ${chosenWord.length} letters.`);

  // Hiển thị từ đang được đoán với các ký tự đã đoán đúng (chưa có ký tự nào đoán đúng ban đầu)
  displayWord();

  // Vòng lặp để chơi đến khi người chơi thắng hoặc thua
  while (wrongGuesses < maxWrongGuesses) {
    // Yêu cầu người chơi đoán một ký tự
    let guess = prompt("Guess a letter:").toLowerCase();

    // Kiểm tra xem ký tự đã được đoán trước đó chưa
    if (guessedLetters.includes(guess)) {
      console.log(`You already guessed the letter ${guess}. Try again!`);
      continue;
    }

    // Thêm ký tự đoán vào mảng guessedLetters
    guessedLetters.push(guess);

    // Kiểm tra xem ký tự đoán có nằm trong từ được chọn hay không
    if (isLetterInWord(guess)) {
      console.log(`You guessed correctly!`);
      displayWord();
      if (isGameWon()) {
        console.log(`Congratulations! You won! The word was ${chosenWord}.`);
        return;
      }
    } else {
      console.log(`Sorry, ${guess} is not in the word.`);
      wrongGuesses++;
      console.log(`You have ${maxWrongGuesses - wrongGuesses} guesses left.`);
    }
  }

  // Hiển thị thông báo người chơi thua và từ được đoán là gì
  console.log(`Sorry, you lost. The word was ${chosenWord}.`);
}

// Bắt đầu trò chơi
startGame();
