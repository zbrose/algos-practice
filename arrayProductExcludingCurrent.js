// export default function arrayProductExcludingCurrent(numbers) {
//   let result = [];

//   for (let i = numbers.length - 1; i >= 0; i--) {
//     for (let j = i - 1; j > -1; j--) {
//       result.push(numbers[j] * numbers[i]);
//     }
//   }

//   return result;
// }

export default function arrayProductExcludingCurrent(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    let value = 0;

    const newArr = numbers.filter((num) => {
      num === numbers[i];
    });

    console.log(newArr);

    // for (const num of newArr) {
    //   value *= num;
    // }

    // result.push(value);
  }

  // return result;
}

console.log(arrayProductExcludingCurrent([1, 2, 3]));
// console.log(arrayProductExcludingCurrent([2, 0, 3]));
// console.log(arrayProductExcludingCurrent([0, 0, -1, 1]));
