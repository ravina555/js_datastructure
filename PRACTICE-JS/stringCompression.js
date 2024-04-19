/*Input: chars = ["a","a","b","b","c","c","c"]
Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3". */

function compression(nums){
   let pointer=-1;
   let charLength = 0;
   let currentChar='';

   for(let i=0;i<=nums.length;i++){
    if(nums[i] === currentChar){
        charLength++;
        continue;
    }

    nums[pointer++] = currentChar;
    if(charLength > 1){
        let digits = charLength.toString();
        for(let digi of digits){
            nums[pointer++] = digi
        }
    }
    currentChar = nums[i];
    charLength =1;

   }
   return pointer;
}

console.log(compression(['a','a','b','b','c','c','c']))