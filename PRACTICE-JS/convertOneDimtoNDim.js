//convert one dimensional array to N dimensioanl array

function nDimArr(arr,num){
    let group =[];
    while(arr.length > 0){
        group.push(arr.slice(0 , num));
        arr = arr.slice(num);
    }
    return group;
}

console.log(nDimArr([2,3,4,5,6],3))