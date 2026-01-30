// Time Complexity - wort case O(n2)

function quickSort(arr) {
  // base case:	because we are recursively passing in arrays as they're getting smaller.
  if (arr.length <= 1) {
    return arr;
  }

  // define the pivot element and array partitions (sub arrays)
  const pivot = arr[0];
  const left = [];
  const right = [];

  // loop through array and compare pivot element to the element at i
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // combine partitions with pivot element and recusively call.
  // spread operator copies value of array here
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [11, 9, 12, 7, 3];
console.log(quickSort(arr));
