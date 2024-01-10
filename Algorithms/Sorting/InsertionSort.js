function insertionSort(arr) {
    const n = arr.length;
  
    for (let i = 1; i < n; i++) {
      // Store the current element to be compared
      const currentElement = arr[i];
  
      // Compare the current element with the sorted part of the array and shift elements if necessary
      let j = i - 1;
      while (j >= 0 && arr[j] > currentElement) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Place the current element in its correct position in the sorted part of the array
      arr[j + 1] = currentElement;
    }
  
    return arr;
  }
  

console.log(insertionSort([-2,6,-6,5,0]))

//BIG O -> O(n^2)