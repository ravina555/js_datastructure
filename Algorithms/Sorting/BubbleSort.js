//Given an array , sort
//bubble sort

function bubbleSort(arr) {
    const n = arr.length;
  
    // Outer loop for the number of passes
    for (let i = 0; i < n - 1; i++) {
      // Inner loop for each pass
      for (let j = 0; j < n - 1 - i; j++) {
        // Compare adjacent elements and swap if necessary
        if (arr[j] > arr[j + 1]) {
          // Swap arr[j] and arr[j + 1]
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
  
    return arr;
  }

console.log(bubbleSort([-6, 4 , 8 , -2 , 20 , 9]));

//big O = O(n^2)
