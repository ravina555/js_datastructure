//find longest common str in array

function longestCommonStr(arr){
    let result="";

    //sort array to find longest common string
    let sortedArr = arr.sort((a,b)=>a.length - b.length);
    
    //loop through every letter from first arr[0] array element
    for(let i=0;i<sortedArr[0].length;i++){
        for(let j=i+1;j<sortedArr[0].length;j++){

            let substr = sortedArr[0].substring(i,j);
            if(arr.every((item)=>item.includes(substr))){
                if(substr.length > result.length){
                    result+=substr;
                }
            }
        }
    }
    console.log(result);
    return result;
}

longestCommonStr(["ab","ap","ppale", "praicot", "appetizer"])