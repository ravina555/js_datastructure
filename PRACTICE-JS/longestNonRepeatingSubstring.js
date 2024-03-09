/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(str) {
    let left=0;
    let maxSize=0;
    let set = new Set();

    if(str.length === 0 ){
        return 0
    }

    if(str.length === 1){
        return 1;
    }

    for(let i=0;i<str.length;i++){
        while(set.has(str[i])){
            set.delete(str[left]);
            left++;
        }
        set.add(str[i]);
        maxSize = Math.max(maxSize , set.size)
    }
    return maxSize;

};

console.log(lengthOfLongestSubstring('pwwkew'));