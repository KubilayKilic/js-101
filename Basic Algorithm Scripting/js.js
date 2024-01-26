//Convert Celsius to Fahrenheit

function convertCtoF(celsius) {

  let fahrenheit = celsius * 9 / 5 + 32 ;

  return fahrenheit;
}

convertCtoF(30); // 86F değerini döndürür.

//Reverse a String

function reverseString(str) {

  let reversed = str.split('').reverse().join('');
  //split = ['h', 'e', 'l', 'l', 'o']
  //reverse = ['o', 'l', 'l', 'e', 'h']
  //join = "olleh"

  return reversed;
}

reverseString("hello");

//Factorialize a Number

function factorialize(num) {

  if(num == 0 || num == 1){
    return 1;
  } else{
    return num * factorialize(num-1);
  }
}

factorialize(5); //5*4*3*2*1 = 120,,

//Find the Longest Word in a String

function findLongestWordLength(str) {

  // Cümleyi boşluklardan ayırarak bir diziye çevirir.
  let words = str.split(' '); // ["The", "quick", "brown"]... gibi.

  // En uzun kelimenin uzunluğunu saklamak için bir değişken oluşturur.
  let longestword = 0; 

  // Her kelimeyi kontrol et
  for (let i = 0; i < words.length; i++) {

    // Eğer kelimenin uzunluğu mevcut en uzun kelimenin uzunluğundan büyükse,
    // bu kelimenin uzunluğunu en uzun kelime olarak güncelle
    if (words[i].length > longestword) {
      longestword = words[i].length;
    }
  }

  // En uzun kelimenin uzunluğunu döndür
  return longestWordLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//Return Largest Numbers in Arrays

function largestOfFour(arr) {
  // Her bir alt dizi için en büyük sayıları saklamak için boş bir dizi oluştur
  let newArr = [];

  // Her bir alt diziye eriş
  for (let i = 0; i < arr.length; i++) {

    // Alt dizinin ilk elemanını en büyük sayı olarak başlat
    let maxNumber = arr[i][0];

    // Alt dizinin diğer elemanlarını kontrol et
    for (let j = 1; j < arr[i].length; j++) {

      // Eğer mevcut eleman, en büyük sayıdan daha büyükse, en büyük sayıyı güncelle
      if (arr[i][j] > maxNumber) {
        maxNumber = arr[i][j];
      }
    }

    // Her bir alt dizi için bulunan en büyük sayıyı yeni dizimize ekle
    newArr.push(maxNumber);
  }

  // Tüm alt dizilerin en büyük sayılarını içeren diziyi döndür
  return newArr;
}

// Fonksiyonu kullanarak örnek bir dizi içindeki her alt dizinin en büyük sayısını bulma
let result = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

console.log(result); // Sonuç: [5, 27, 39, 1001]

//Confirm the Ending

function confirmEnding(str, target) {
  let targetLength = target.length;
  let strLength = str.length;

  // Eğer hedef string, verilen string'in sonundaki karakterlerle eşleşiyorsa
  for (let i = 0; i < targetLength; i++) {
    if (str[strLength - targetLength + i] !== target[i]) {
      return false; // Eğer eşleşmeyen bir karakter bulunursa, false döndür
    }
  }

  return true; // Eğer tüm karakterler eşleşiyorsa, true döndür
}

confirmEnding("Bastian", "n");

//Repeat a String Repeat a String

function repeatStringNumTimes(str, num) {
  let accumulatedStr = "";

  for (let i = 0; i < num; i++) {
    accumulatedStr += str;
  }

  return accumulatedStr;
}

//Truncate a String

function truncateString(str, num) {
  
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

//Finders Keepers

function findElement(arr, func){

  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}

findElement([1,2,3,4], num => num % 2 === 0);

//isBoolean

function isBoolean(value) {
  return typeof value === 'boolean';
}

console.log(isBoolean(true));      // true
console.log(isBoolean(false));     // true
console.log(isBoolean(42));        // false
console.log(isBoolean("true"));    // false

//Title Case a Sentence

function titleCase(str) {
  // Stringi küçük harfe çevir ve kelimelere ayır
  const words = str.toLowerCase().split(" ");

  // Her kelimenin ilk harfini büyük harfe çevir
  const titleCaseWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

  // Bağlaçları da büyük harfe çevir
  const titleCaseSentence = titleCaseWords.join(" ");

  return titleCaseSentence;
}

console.log(titleCase("title Case a Sentence")); // "Title Case A Sentence"

//Slice and Splice

function frankenSplice(arr1, arr2, n) {
  return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

//Falsy Bouncer

function bouncer(arr) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) filteredArr.push(arr[i]);
  }
  return filteredArr;
}

bouncer([7, "ate", "", false, 9]);

//Where do I Belong

function getIndexToIns(arr, num) {

  const sortedArray = arr.sort((a,b) => a - b);

  let index = 0;

  while (index < sortedArray.length && num > sortedArray[index]){
    index ++;
  }
  return index;
}

// Örnek kullanımlar:
console.log(getIndexToIns([1, 2, 3, 4], 1.5));   // 1
console.log(getIndexToIns([20, 3, 5], 19));       // 2
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // 3


//Swap

//a-b negatifse a, b'den önce
//a-b pozisifse a, b'den sonra

örnekArray = [1, 25, 55, 2, 1500, 3, 42, 6, 8, 80];

/*
  1. Adım: (1 ve 25) negatif swap yok
  [1, 25, 55, 2, 1500, 3, 42, 6, 8, 80]

  2. Adım: (25 ve 55) negatif swap yok
  [1, 25, 55, 2, 1500, 3, 42, 6, 8, 80]

  3. Adım: (55 ve 2) pozitif swap yap
  [1, 25, 2, 55, 1500, 3, 42, 6, 8, 80]

  4. Adım: (55 ve 1500) negatif swap yok
  [1, 25, 2, 55, 1500, 3, 42, 6, 8, 80]

  5. Adım: (1500 ve 3) pozitif swap yap
  [1, 25, 2, 55, 3, 1500, 42, 6, 8, 80]

  .
  .
  .
*/

//Mutations

function mutation(arr) {
  const test = arr[1].toLowerCase();
  const target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

//Chunk array

function chunkArrayInGroups(arr, size) {
  // Adım 1: Sonuç dizisini oluştur
  let resultArray = [];

  // Adım 2: Döngü ile grupları oluştur
  for (let i = 0; i < arr.length; i += size) {
    // Adım 3: Alt diziyi oluştur
    let group = arr.slice(i, i + size);

    // Adım 4: Sonuç dizisine ekle
    resultArray.push(group);
  }

  // Adım 5: Sonuç dizisini döndür
  return resultArray;
}

// Örnek kullanım:
const result = chunkArrayInGroups([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log(result); // [[1, 2, 3], [4, 5, 6], [7, 8]]