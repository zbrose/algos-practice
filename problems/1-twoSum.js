/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// var twoSum = function (nums, target) {
//   // an array to push indices into
//   const indices = [];
//   //loop through the numbers
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         indices.push(nums.indexOf(nums[i]));
//       }
//     }
//   }
//   return indices;
// };

var twoSum = function (nums, target) {
  //create a hash table
  hashTable = [];
  //loop through array of nums
  for (let i = 0; i < nums.length; i++) {
    //subtract target from nums indices
    let difference = target - nums[i];
    //if difference is not in the hashtable
    if (!(difference in hashTable)) {
      //put it in there
      hashTable[nums[i]] = i;
    } else return [hashTable[difference], i];
  }
};

// console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));
// console.log(twoSum([7, 3, 3, 8, 7, 9], 14));
