function isStringAnagram(str1, str2) {
  if (str1.length <= 1) return false;
  let count = 0;

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str1.length; j++) {
      if (str1[i] === str2[j]) {
        count++;
        break;
      }
    }
  }

  if (count < str1.length) {
    return false;
  } else {
    return true;
  }
}

console.log(isStringAnagram("hello", "bello"));
console.log(isStringAnagram("silent", "listen"));
console.log(isStringAnagram("bca", "abc"));
console.log(
  isStringAnagram(
    "ashdkfasldfuahsdohfuahsdofhahsdfhasdfh",
    "asdhfashdufuhaousdhoufasjdkhfoauhsodfa"
  )
);
