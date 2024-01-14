//given an array of element , find the index of elem if present

function searchElemIndex(arr, t){
    for(let i=0;i<=arr.length;i++){
        if(arr[i] ===  t){
            return i;
        }
    }
    return 'not found';
}

console.log(searchElemIndex([1,3,4,6],3))

//time complexity 
//Big O -> o(n)