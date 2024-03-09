function isAnagram(str , str1){
    let sortedStr = str.split('').sort().join('');
    let sortedStr1 = str1.split('').sort().join('');

    if(sortedStr !== sortedStr1){
        return false;
    }

    return true;
}

console.log(isAnagram('madam' ,'mmdaa'))