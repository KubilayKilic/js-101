function convertToRoman(num) {
  // Roma rakamları ve karşılık gelen değerleri
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  let result = '';

  // Verilen sayıyı Roma rakamına çevir
  for (let key in romanNumerals) {
    while (num >= romanNumerals[key]) {
      result += key;
      num -= romanNumerals[key];
    }
  }

  return result;
}

// Test
console.log(convertToRoman(3999));  // "MMMCMXCIX"

/* 

key = 'M': 3999 >= 1000 olduğu için, 'M' eklenir, num 2999 olur.
key = 'M': 2999 >= 1000 olduğu için, 'M' eklenir, num 1999 olur.
key = 'M': 1999 >= 1000 olduğu için, 'M' eklenir, num 999 olur.
key = 'CM': 999 >= 900 olduğu için, 'CM' eklenir, num 99 olur.
key = 'XC': 99 >= 90 olduğu için, 'XC' eklenir, num 9 olur.
key = 'IX': 9 >= 9 olduğu için, 'IX' eklenir, num 0 olur.

*/