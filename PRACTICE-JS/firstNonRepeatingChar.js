function firstNonRepeatingChar(str){
    let char,
    charObj={};
    for(let i=0;i<str.length;i++){
            charObj[str[i]] = (charObj[str[i]] || 0) + 1 ;
    }

    //console.log(charObj)

    for(let letter in charObj){
        if(charObj[letter] === 1){
            return letter;
        }
    }

}


console.log(firstNonRepeatingChar("the quick brown fox jumps then quickly blow air"))