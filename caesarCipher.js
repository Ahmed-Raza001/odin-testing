function caesarCipher(str, shift) {
  return str.split('').map(char => {
    if (/[a-z]/.test(char)) {
      return String.fromCharCode((char.charCodeAt(0) - 97 + shift) % 26 + 97);
    }
    if (/[A-Z]/.test(char)) {
      return String.fromCharCode((char.charCodeAt(0) - 65 + shift) % 26 + 65);
    }
    return char;
  }).join('');
}
module.exports = caesarCipher;
