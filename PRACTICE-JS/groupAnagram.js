// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
let anagramArr=[];

    for(let i=0;i<strs.length;i++){
        let sorted = strs[i].split('').sort().join('');

        if(!anagramArr[sorted]){
            anagramArr[sorted] = [strs[i]]
        }else{
            anagramArr[sorted].push(strs[i])
        }
    }

    return  Object.values(anagramArr);
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))