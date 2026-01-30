export default function binarySearch(arr, target) {
  const middleIndex = Math.floor(arr.length / 2);
  let result = -1;

  if (arr[middleIndex] === target) {
    return middleIndex;
  }

  // left
  if (target < arr[middleIndex]) {
    for (let i = 0; i < middleIndex; i++) {
      if (target === arr[i]) return i;
    }
  }

  // right
  if (target > arr[middleIndex]) {
    for (let i = middleIndex + 1; i < arr.length; i++) {
      if (target === arr[i]) return i;
    }
  }

  return result;
}

export default function binarySearch(arr, target) {
  const middleIndex = Math.floor(arr.length / 2);
  console.log(arr, arr[middleIndex]);
  let result;

  if (arr[middleIndex] === target) {
    return middleIndex;
  }

  // if (arr[middleIndex + 1] === target) {
  //   return middleIndex + 1;
  // }

  // if (arr[middleIndex - 1] === target) {
  //   return middleIndex - 1;
  // }

  // left
  if (target < arr[middleIndex]) {
    return binarySearch(arr.slice(0, middleIndex), target);
  }

  // right
  if (target > arr[middleIndex]) {
    return binarySearch(arr.slice(middleIndex + 1), target);
  }


}

// console.log(binarySearch([1, 2, 3, 6, 9, 11], 2));
console.log(binarySearch([1, 2, 3, 6, 9, 11], 11));
// console.log(binarySearch([1, 2, 3, 6, 9, 11], 12));
// console.log(binarySearch([1, 2, 3, 6, 9, 11], 5));
