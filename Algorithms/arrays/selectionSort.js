const nums = [21, 6, 7, 4, 23, 5, 87, 3];

// function selectionSort(nums) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] < nums[minIndex]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex !== i) {
//       [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]; // swap values
//     }
//   }
//   return nums;
// }

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      // this loop sets the new lowest number
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // if this runs, we got thru the array and there is a new minimum value that is placed in front of our initial minimum value
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

console.log("selection sort:", selectionSort(nums));
