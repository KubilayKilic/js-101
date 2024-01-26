function rot13(str) {
  // ROT13 şifreleme/dişifreleme için harita oluştur
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const shift = 13;
  const len = alphabet.length;

  // Her bir harfi ROT13'e göre kaydır
  const ciphered = str.split('').map(char => {
    const isUpperCase = char === char.toUpperCase();
    const index = alphabet.indexOf(char.toUpperCase());

    if (index === -1) {
      // Eğer karakter harf değilse (boşluk, noktalama vb.), doğrudan geçir
      return char;
    }

    // Harfi ROT13'e göre kaydır
    let newIndex = (index + shift) % len;
    if (!isUpperCase) {
      newIndex = (newIndex + len) % len;
    }

    return alphabet[newIndex];
  });

  return ciphered.join('');
}

// Örnek kullanım
const encoded = rot13('HELLO ALIENS');
console.log(encoded);  // 'URYYB NYVRAF'
