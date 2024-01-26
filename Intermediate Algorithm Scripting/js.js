//Sum All Numbers in a Range

//! 1.Yöntem Max-Min ile

function sumAll(arr) {

  //maksimum ve minimumu math ile bul
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  //aradaki toplamı sıfır olarak başlat
  let sumBetween = 0;

  //i'yi minimuma eşitle ve maksa eşit olana kadar devam et.
  for (let i = min; i <= max; i++) {
    //bulduğun i'leri toplayarak devam et.
    sumBetween += i;
  }
  //toplamları döndür.
  return sumBetween;
}

console.log(sumAll([1, 8])); //36

//! 2.Yöntem formül ile

const sumAll = arr => {
  // başlangıç değerini ve bitiş değerini tanımla.
  const startNum = arr[0];
  const endNum = arr[1];
 
  //kaç sayı olduğunu mutlak olarak hesapla, örneğin 1-8 = 7 + 1 1-8 arasında 8 sayı vardır, 1 ve 8 dahil.
  const numCount = Math.abs(startNum - endNum) + 1;

  // 1 + 8 * 8 / 2 formülünü işlem sırasına göre uygular = 36
  const sum = ((startNum + endNum) * numCount) / 2;
  return sum;
};

console.log(sumAll([1, 8]));


//Diff Two Arrays

function diffArray(arr1, arr2) {
  const newArr = [];

  function onlyInFirst(first, second) {
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

// Örnek kullanım
const result = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(result); // Çıktı: [4]


//Seek and Destroy

function destroyer(arr, ...args) {
  // Filter the array to keep only elements not present in args
  return arr.filter(item => !args.includes(item));
}

// Example usage:
const result = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(result); // Output: [1, 1]

//Wherefore art thou

function whatIsInAName(collection, source) {

  const souceKeys = Object.keys(source);

  return collection.filter(obj => {
    for (let i = 0; i < sourceKeys.length; i++) {
      if (obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}

//Spinal Tap Case

function spinalCase(str) {
  // Replace underscores and spaces with dashes
  str = str.replace(/[_\s]/g, '-');
  
  // Convert camelCase to spinal-case
  str = str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  
  return str;
}

// Örnek kullanım
const result = spinalCase("Hello World ThisIsSpinalCase");
console.log(result); // hello-world-this-is-spinal-case

//Pig Latin

function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}

translatePigLatin("consonant");

//Search and Replace

function myReplace(str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    // Change the after word to be uncapitalized before we use it.
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after);

  return str;
}

// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

//DNA Pairing

function pairElement(str) {
  // Define the base pairs
  const basePairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  // Convert the string to an array of characters
  const strArray = str.split("");

  // Map each character to its base pair
  const result = strArray.map(char => [char, basePairs[char]]);

  return result;
}

// Örnek kullanım
const result = pairElement("GCG");
console.log(result); // [["G", "C"], ["C", "G"], ["G", "C"]]

//Missing letters

function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    // Check if the next character is not consecutive
    if (str.charCodeAt(i + 1) !== str.charCodeAt(i) + 1) {
      // Return the missing letter
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
  // If all letters are present, return undefined
  return undefined;
}

// Örnek kullanım:
const result = fearNotLetter("abce");
console.log(result); // Çıktı: "d"

//Sorted Union

function uniteUnique(arr) {
  // Toplam argüman sayısını al
  const totalArgs = arguments.length;

  // Birleştirilmiş array'i oluştur
  const unitedArray = [];

  // Her bir argüman array'ini gez
  for (let i = 0; i < totalArgs; i++) {
    // Her bir elemanı kontrol et
    for (let j = 0; j < arguments[i].length; j++) {
      // Eğer unitedArray içinde yoksa ekle
      if (!unitedArray.includes(arguments[i][j])) {
        unitedArray.push(arguments[i][j]);
      }
    }
  }

  return unitedArray;
}

// Örnek kullanım:
const result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(result); // Çıktı: [1, 3, 2, 5, 4]

//Convert HTML Entities

function convertHTML(str) {

  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}

convertHTML("Dolce & Gabbana");

//Sum All Odd Fibonacci Numbers

function sumFibs(num) {

  // Fibonacci dizisini oluşturan fonksiyon
  function generateFibonacci(n) {
    const fibonacciArray = [0, 1];

    for (let i = 2; i <= n; i++) {
      const newVals = fibonacciArray[i - 2] + fibonacciArray[i - 1];
      fibonacciArray.push(newVals);
    }

    return fibonacciArray;
  }

  // Tek Fibonacci sayılarını toplamak için fonksiyon
  function sumOddFibonacci(fibonacciArray) {
    let sum = 0;

    for (let i = 0; i < fibonacciArray.length; i++) {
      const currentTerm = fibonacciArray[i];

      if (currentTerm % 2 !== 0 && currentTerm <= num) {
        sum += currentTerm;
      }
    }

    return sum;
  }

  // Verilen num değeri için Fibonacci dizisini oluştur
  const fibonacciArray = generateFibonacci(num);

  // Tek Fibonacci sayılarını topla ve sonucu döndür
  const result = sumOddFibonacci(fibonacciArray);
  return result;
}

// Test
const result = sumFibs(1000);
console.log(result);  // Çıktı: 1785

//Sum All Primes

function sumPrimes(num) {
  // Bir sayının asal olup olmadığını kontrol eden fonksiyon
  function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return number > 1;
  }

  // Asal sayıları toplamak için değişken
  let sum = 0;

  // 2'den başlayarak num'a kadar olan sayıları kontrol et
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}

// Test
const result = sumPrimes(10);
console.log(result);  // Çıktı: 17 (2 + 3 + 5 + 7)

//Smallest Common Multiple en küçük ortak kat

// İki sayının en küçük ortak katını bulan fonksiyon
function findLCM(a, b) {
  // En küçük ortak böleni bulmak için yardımcı bir fonksiyon
  function findGCD(x, y) {
    while (y !== 0) {
      const temp = y;
      y = x % y;
      x = temp;
    }
    return x;
  }

  // En küçük ortak kat hesaplaması
  const gcd = findGCD(a, b);
  const lcm = (a * b) / gcd;

  return lcm;
}

// Verilen aralıktaki tüm ardışık sayılara tam bölünebilen en küçük ortak katı bulan fonksiyon
function smallestCommons(arr) {
  // Aralıktaki sayıları sırala
  const [min, max] = arr.sort((a, b) => a - b);

  // İki sayı arasındaki tüm ardışık sayılara tam bölünebilen en küçük ortak katı bul
  let result = min;
  for (let i = min + 1; i <= max; i++) {
    result = findLCM(result, i);
  }

  return result;
}

// Test
const result = smallestCommons([1, 3]);
console.log(result);  // Çıktı: 6


//fonksiyonu sağlayan değerleri döndür

function dropElements(arr, func) {
  // Diziyi baştan itibaren kontrol et
  for (let i = 0; i < arr.length; i++) {
    // Koşulu sağlayan ilk elemanı bulduysak, geri kalanını kesip döndür
    if (func(arr[i])) {
      return arr.slice(i);
    }
  }

  // Koşulu hiçbir eleman sağlamazsa, boş bir dizi döndür
  return [];
}

// Test
const result = dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});

console.log(result);  // Çıktı: [3, 4]

//iç içe geçmiş bir diziyi düzleştirme

function steamrollArray(arr) {
  // Düzleştirilmiş diziyi tutmak için bir değişken oluştur
  const flattenedArray = [];

  // İç içe geçmiş diziyi düzleştiren yardımcı bir fonksiyon
  function flatten(element) {
    // Eğer eleman bir dizi ise, tekrar et
    if (Array.isArray(element)) {
      // Diziyi iç içe geçmiş elemanlarıyla birleştirerek tekrar et
      for (let i = 0; i < element.length; i++) {
        flatten(element[i]);
      }
    } else {
      // Eleman bir dizi değilse, düzleştirilmiş diziyi oluştur
      flattenedArray.push(element);
    }
  }

  // İlk çağrıyı gerçekleştir
  arr.forEach(flatten);

  return flattenedArray;
}

// Test
const result = steamrollArray([1, [2], [3, [[4]]]]);
console.log(result);  // Çıktı: [1, 2, 3, 4]

//Binary to eng

function binaryAgent(binaryString) {
  // Boşlukla ayrılmış ikili diziyi alfabeye çevirerek İngilizce cümle oluştur
  const englishSentence = binaryString
    .split(' ')  // Boşlukla ayrılmış ikili diziyi parçala
    .map(binary => String.fromCharCode(parseInt(binary, 2)))  // Her ikili diziyi alfabeye çevir
    .join('');  // Alfabeye çevrilen karakterleri birleştirerek cümleyi oluştur

  return englishSentence;
}

// Test
const result = binaryAgent('01001001 00100000 01101100 01101111 01110110 01100101');
console.log(result);  // Çıktı: "I love"

//check truthy

function truthCheck(collection, pre) {
  // Her bir nesne için kontrol gerçekleştir
  for (let i = 0; i < collection.length; i++) {
    // Dot notation ile veya [] notation ile nesnenin özelliğine eriş
    // ve değerini kontrol et
    if (!collection[i][pre]) {
      // Eğer değer falsy ise, false döndür
      return false;
    }
  }

  // Tüm öğelerin özellik değeri truthy ise, true döndür
  return true;
}

// Test
const result = truthCheck([
  { user: "Tinky-Winky", age: 0 },
  { user: "Dipsy", age: 3 },
  { user: "Laa-Laa", age: 1 },
  { user: "Po", age: 4 }
], "age");

console.log(result);  // Çıktı: false

//Arguments Optional

function addTogether() {
  // Argümanların hepsi sayı mı kontrol et
  function isValidNumber(num) {
    return typeof num === 'number';
  }

  // İki argüman varsa, topla
  if (arguments.length === 2) {
    const arg1 = arguments[0];
    const arg2 = arguments[1];

    if (isValidNumber(arg1) && isValidNumber(arg2)) {
      return arg1 + arg2;
    } else {
      return undefined;
    }
  } else if (arguments.length === 1) {
    // Bir argüman varsa, bir sonraki argümanı bekleyen bir fonksiyon döndür
    const arg1 = arguments[0];

    if (isValidNumber(arg1)) {
      return function(arg2) {
        if (isValidNumber(arg2)) {
          return arg1 + arg2;
        } else {
          return undefined;
        }
      };
    } else {
      return undefined;
    }
  } else {
    // Hiç argüman yoksa veya fazla argüman varsa, undefined döndür
    return undefined;
  }
}

// Test 1
console.log(addTogether(2, 3));  // Çıktı: 5

// Test 2
const sumTwoAnd = addTogether(2);
console.log(sumTwoAnd(3));  // Çıktı: 5


//Make a Person

const Person = function(first, last) {
  let firstName = first;
  let lastName  = last;

  this.getFirstName = function() {
    return firstName;
  };

  this.getLastName = function() {
    return lastName;
  };

  this.getFullName = function() {
    return this.getFirstName() + " " + this.getLastName();
  };

  this.setFirstName = function(first) {
    return firstName = first;
  };

  this.setLastName = function(last) {
    return lastName = last;
  };

  this.setFullName = function(first, last) {
    this.setFirstName(first);
    this.setLastName(last);
    return this.getFullName();
  };
};

const bob = new Person("Bob", "Ross");
console.log(bob.getFullName());

//Orbital Period

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const a = 2 * Math.PI;
  const newArr = [];

  const getOrbPeriod = function(obj) {
    const c = Math.pow(earthRadius + obj.avgAlt, 3);
    const b = Math.sqrt(c / GM);
    const orbPeriod = Math.round(a * b);
    // create new object
    return {name: obj.name, orbitalPeriod: orbPeriod};
  };

  for (let elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }

  return newArr;
}

// test here
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);