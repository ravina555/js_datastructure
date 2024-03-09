function longestpalindrome(str){

    function expandAroundCorner(start , end){
        while(start > 0 && end < str.length && str[start] ===  str[end]){
            start--;
            end++;
        }
        return str.substring(start +1 , end);
    }
    let longest="";
    for(let i=0;i<str.length;i++){
        let odd = expandAroundCorner(i , i);
        let even = expandAroundCorner(i , i +1);

        if(odd.length > longest.length){
            longest = odd;
        }

        if(even.length > longest.length){
            longest = even;
        }
    }

    return longest;
}

console.log(longestpalindrome('babad'));