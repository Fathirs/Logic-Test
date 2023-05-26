//Buat fungsi dengan menampilkan bilangan cacah kelipatan 3 atau 7 sebanyak N, serta menampilkan huruf Z saat bilangan tersebut kelipatan 3 dan 7.

function displayNumbers(N) {
    let output = '';
    for (let i = 1; i <= N; i++) {
      if (i % 3 === 0 && i % 7 === 0) {
        output += 'Z';
      } else if (i % 3 === 0 || i % 7 === 0) {
        output += i.toString();
      }
      if (i !== N) {
        output += ', ';
      }
    }
    console.log(output);
  }
  displayNumbers(13);


//Buat fungsi pencarian ‘sang gajah’, ‘serigala’, ‘harimau’

function searchAnimals(text) {
    const pattern = /sang gajah|serigala|harimau/ig;
    const matches = text.match(pattern);
    const output = matches.join(' - ');
    console.log(output);
  }
    const inputText = 'Berikut adalah kisah sang gajah. Sang gajah memiliki teman serigala bernama DoeSang. Gajah sering dibela oleh serigala ketika harimau mendekati gajah.';
    searchAnimals(inputText);

/*Buatlah fungsi pengecekan kata sandi, dengan ketentuan sebagai 
Kata sandi minimal 8 karakter
Kata sandi maksimal 32 karakter
Karakter awal tidak boleh angka
Harus memiliki angka
Harus memiliki huruf kapital dan huruf kecil*/

function checkPassword(password) {
    const regexNumber = /\d/;
    const regexCapitalLetter = /[A-Z]/;
    const regexSmallLetter = /[a-z]/;
  
    if (password.length < 8) {
      return 'Kata sandi minimal 8 karakter';
    }
    if (password.length > 32) {
      return 'Kata sandi maksimal 32 karakter';
    }
    if (password[0].match(/\d/)) {
      return 'Karakter awal tidak boleh angka';
    }
    if (!regexNumber.test(password)) {
      return 'Harus memiliki angka';
    }
    if (!regexCapitalLetter.test(password) || !regexSmallLetter.test(password)) {
      return 'Harus memiliki huruf kapital dan huruf kecil';
    }
    
    return 'Kata sandi valid';
  }
    console.log(checkPassword('5andiwara'));
    console.log(checkPassword('sandiwar4'));
    console.log(checkPassword('Sandiwar4'));




/*Buat fungsi pengecekan bilangan cacah terkecil yang tidak ada dari data yang diinputkan*/
function findSmallestMissingNumber(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    let smallestMissing = 1;
  
    for (let i = 0; i < sortedArr.length; i++) {
      if (sortedArr[i] === smallestMissing) {
        smallestMissing++;
      }
    }
  
    return smallestMissing;
  }
    console.log(findSmallestMissingNumber([5, 2, 8, 4, 3, 10])); // Output: 1
    console.log(findSmallestMissingNumber([2, 3, 4, 6])); // Output: 1
    console.log(findSmallestMissingNumber([8, 6, 7, 12])); // Output: 1


/* Buat pola berikut sesuai inputan N, dengan N adalah bilangan ganjil*/
function createPattern(N) {
    if (N % 2 === 0) {
      return 'Harus bilangan ganjil';
    }
  
    if (N === 1) {
      return 'X';
    }
  
    const pattern = createPattern(N - 2);
  
    const outerRow = 'X'.repeat(N);
    const innerRow = 'XO'.repeat((N - 1) / 2) + 'X';
    
    return outerRow + '\n' + pattern.replace(/X/g, innerRow) + '\n' + outerRow;
  }
    console.log(createPattern(5));
    console.log(createPattern(3));
    console.log(createPattern(7));
    console.log(createPattern(2));
