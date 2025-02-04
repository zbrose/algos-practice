/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const reversed = x.toString().split("").reverse().join("");

  if (x == reversed) {
    return true;
  } else return false;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(1011));
console.log(isPalindrome(10101010105));
console.log(isPalindrome(1000000001));
