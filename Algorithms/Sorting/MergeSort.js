function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    //split arrays into 2 halves
    let middleIndex = Math.floor(arr.length / 2);
    let leftArr = arr.slice( 0 , middleIndex);
    let rightArr = arr.slice(middleIndex);

    //recursively sort
    const leftSortedArr = mergeSort(leftArr),
    rightSortedArr = mergeSort(rightArr);

    return merge(leftSortedArr , rightSortedArr);
}

function merge(leftSortedArr , rightSortedArr){
    let result = [],
    leftIndex = 0,
    rightIndex = 0;


    while(leftIndex < leftSortedArr.length && rightIndex< rightSortedArr.length){
        if(leftSortedArr[leftIndex] < rightSortedArr[rightIndex]){
            result.push(leftSortedArr[leftIndex]);
            leftIndex++;
        }else{
            result.push(rightSortedArr[rightIndex]);
            rightIndex++;
        }

    }

    return result.concat(leftSortedArr.slice(leftIndex), rightSortedArr.slice(rightIndex));
}

console.log(mergeSort([1,23,5,23,-9,-5]))