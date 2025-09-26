const arr = [23, 1, 10, 5, 2];

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j = i - 1; // j is one value behind i
    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentValue;
  }
  return arr;
};

console.log(insertionSort(arr));

/*

	1. current value starts at the 1st index, j set to previous index
	2. while j is less than or equal to 0 and the value at j is less than the current value, loop
		1. set the value at j+1 to the value at j
		2. decrement j
	3. set the value at j + 1 to the current value


FIRST:
	arr = [23, 1, 10, 5, 2];

	i = 1

	1. currentValue is arr[i](1), j = 0
	2. j(0) is equal to zero AND arr[j](23) is greater than currentValue (1), enter loop
		1. arr[j + 1](1) = arr[j](23) [23, 23, 10, 5, 2]
		2. j-- (-1)
	3. arr[j+1](23) = currentValue(1)

SECOND:	
	arr = [1, 23, 10, 5, 2];

	i = 2

	1. currentValue is arr[i](10), j = 1
	2. j(1) is equal to zero AND arr[j](23) is greater than currentValue(10), enter loop
		1. arr[j + 1](10) = arr[j](23) 
		2. j-- (0)
		3. arr = [1, 23, 23, 5, 2]
	2. j(0) is equal to zero BUT arr[j](1) is less than currentValue(10), do not enter
	3. arr[j+1](23) = currentValue(10)

THIRD: 
	arr = [1, 10, 23, 5, 2];

	i = 3

	1. currentValue is arr[i](5), j = 2
	2. j(2) >= 0 AND arr[j](23) > currentValue(5), enter loop
		1. arr[j + 1](5) = arr[j](23) 
		2. j--(1)
		3. arr = [1, 10, 23, 23, 2]
	2. j(1) >= 0 AND arr[j](10) > currentValue(5), enter loop
		1. arr[j + 1](23) = arr[j](10) 
		2. j--(0)
		3. arr = [1, 10, 10, 23, 2]
	2. j(0) === 0 && arr[j](1) is less than currentValue(5), do not enter
	3. arr[j+1](10) = currentValue(5)
	
	4. arr = [1, 5, 10, 23, 2]


	etc.

*/
