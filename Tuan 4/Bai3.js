function findPrimes(arr) {
  let primes = []; // mảng chứa các số nguyên tố
  let count = 0; // số lượng số nguyên tố trong mảng

  // kiểm tra từng phần tử trong mảng
  for (let i = 0; i < arr.length; i++) {
    let isPrime = true; // giả sử phần tử hiện tại là số nguyên tố

    // kiểm tra xem phần tử hiện tại có phải là số nguyên tố hay không
    for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
      if (arr[i] % j === 0) {
        // nếu phần tử chia hết cho một số khác 1 và chính nó
        isPrime = false; // không phải số nguyên tố
        break;
      }
    }

    // nếu phần tử là số nguyên tố, thêm vào mảng primes và tăng biến đếm
    if (isPrime && arr[i] > 1) {
      primes.push(arr[i]);
      count++;
    }
  }

  return { primes: primes, count: count }; // trả về một đối tượng chứa mảng số nguyên tố và số lượng số nguyên tố trong mảng
}

let arr = [2, 5, 7, 10, 11, 13, 17, 20, 23];
let result = findPrimes(arr);
console.log(result.primes); // [2, 5, 7, 11, 13, 17, 23]
console.log(result.count); // 7
