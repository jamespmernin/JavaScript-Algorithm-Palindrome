const palindrome = str => {
  return str.toLowerCase().replace(/[\W_]/g, '') === str.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join(''); // source: https://itnext.io/11-way-to-check-for-palindromes-in-javascript-85dbfe7dfb5d
}

console.log(palindrome("a man a plan a canal panama"))

module.exports = {
  palindrome
}
