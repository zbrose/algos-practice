/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let map = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let sum = 0;
  for (i = s.length; i--; ) {
    let current = map.get(s[i]);
    let next = map.get(s[i - 1]);

    if (current > next) {
      sum += current - next;
      i--;
    } else sum += current;
  }
  return sum;
};

console.log(romanToInt("III")); // 3
console.log(romanToInt("IV")); // 4
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994

// whats the symbol
// what the value of the sysmbol

// calculate the values of the symbol
