//To find a first pair whose sum is zero

function getSumPairZero(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=1;j<arr.length;j++){
            if(arr[i] + arr[j] ===  0){
                return [arr[i], arr[j]];
            }
        }
    }
}

const result = getSumPairZero([-5,-4,-3,-2,-1,0,1,2,3,4,5])
console.log(result)