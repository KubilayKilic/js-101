function palindrome(str) {
  // Verilen string'i düzenle: noktalama işaretleri ve boşlukları kaldır, harfleri küçük hale getir
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // String'i ters çevir
  const reversedStr = cleanedStr.split('').reverse().join('');

  // Temizlenmiş string ile ters çevrilmiş string'i karşılaştır
  return cleanedStr === reversedStr;
}

// Testler
console.log(palindrome("racecar"));     // true
console.log(palindrome("RaceCar"));     // true
console.log(palindrome("race CAR"));    // true
console.log(palindrome("2A3*3a2"));     // true
console.log(palindrome("2A3 3a2"));     // true
console.log(palindrome("2_A3*3#A2"));   // true
console.log(palindrome("hello"));       // false