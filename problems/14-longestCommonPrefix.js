function longestCommonPrefix(strings) {
  if (strings.length === 0) return ""; // if array is empty return early

  let prefix = strings[0]; // get first word

  for (let i = 1; i < strings.length; i++) {
    // loop through strings
    while (strings[i].indexOf(prefix) !== 0) {
      // loop through letters of strings, if false, slice from prefix until position 0 is found
      if (prefix === "") return "";
      prefix = prefix.slice(0, -1);
    }
  }
  return prefix;
}

const strings = ["flower", "flow", "flight"];
const strings2 = ["dog", "racecar", "car"];

console.log(longestCommonPrefix(strings2));

// WHAT I LEARNED
// I was thinking we were comparing indivdual letters, when we are actually comparing fragments of the first word against the entierty of the other word.
// then we are only slicing the first word until we reach common word fragements - i.e FLOWer to FLOW
