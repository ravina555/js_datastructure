//To find the largest elements fro the 2 dimensional array 

function largestFromArray(arr){
   let max = 0;
   for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        if(arr[i][j]> max){
            max = arr[i][j];
        }
    }
   }

   return max;

}

console.log(largestFromArray([[1,2,3,4],[5,6,7,9],[45,76,2,1],[89,90,87,9]]));