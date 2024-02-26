//Given a sorted array of n elements and a target element t , find index of t , if not present return -1;

function findIndexByBinarySearch(arr , t){
    let left =0;
    let right = arr.length -1;

    while(left <= right){
        let middlePoint = Math.floor((left + right ) / 2);

        if(arr[middlePoint] === t){
            return middlePoint;
        }else if(arr[middlePoint] < t){
            left = middlePoint + 1
        }else{
            right = middlePoint - 1;
        }
    }

    return -1
    
}

console.log(findIndexByBinarySearch([6,4,6,7,8,9] , 6))