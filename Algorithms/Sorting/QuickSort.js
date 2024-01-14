function quickSort(arr){
    let leftArr=[],
    rightArr=[];

    let pivot = arr[0];

    if(arr.length <= 1){
        return arr;
    }

    for(let i=1;i<arr.length;i++){
        if(arr[i] > pivot){
            rightArr.push(arr[i])
        }else{
            leftArr.push(arr[i])
        }
    }

    return [...quickSort(leftArr) , pivot , ...quickSort(rightArr)];
}

console.log(quickSort([-9,2,0,-9,9,8]));

//avg case-> O(nlogn)
//worst case O(n^2)