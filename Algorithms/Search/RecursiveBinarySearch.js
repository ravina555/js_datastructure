//Given a sorted array of n elements and a target element t , find index of t , if not present return -1;

function findIndexOfElem(arr , target){
    return search (arr , target , 0 , arr.length -1)
}

function search(arr , target , leftIndex , rightIndex){
    if(leftIndex > rightIndex){
        return -1
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if(arr[middleIndex] === target){
        return middleIndex;
    }else if( arr[middleIndex] < arr[rightIndex]){
        return search(arr , target , middleIndex + 1 , rightIndex)
    }else{
        return search(arr , target , leftIndex , middleIndex - 1)
    }
}

console.log(findIndexOfElem([-10,2,3,4,5],41))

//Big  O = o(logn)