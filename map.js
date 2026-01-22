// Array.prototype.myMap = function (callbackFn, thisArg) {
//   const results = [];

//   for (let k = 0; k < this.length; k++) {
//     let result = callbackFn.call(thisArg, this[k], k, this);
//     console.log(result);

//     results.push(result);
//   }

//   return results;
// };

// console.log([1, , 3, 4].myMap((i) => i * i));

const arr = [1, , 3, 4];

const obj = new Object(arr);

arr.forEach(function (item, index) {
  console.log(Object.hasOwn(arr, index));
});
