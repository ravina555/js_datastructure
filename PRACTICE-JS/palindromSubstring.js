/*
Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

 

Example 1:

Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
Example 2:

Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
*/


function countStr(str){
    let totalCount = 0;
    for(let i=0;i<str.length;i++){
        totalCount+= extendPalindrome(str , i , i);
        totalCount+= extendPalindrome(str , i , i+1)
    }
    return totalCount
   
}

function extendPalindrome(str , start , end){
    let count=0;

    while(start >=0 && end < str.length && str[start] ===  str[end]){
        count++;
        start--;
        end++;
    }
    return count;
}

console.log(countStr("abc"))