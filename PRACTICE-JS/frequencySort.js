//sort by frequency of the letters

function frequencySort(str){
    let count={};
    let res='';

    for(let letter of str){
        count[letter] = (count[letter] || 0) + 1;
    }



    let sortedStr = Object.keys(count).sort((a, b)=> count[b] - count[a]);
    
    for(let item of sortedStr){
        for(let i=0;i<count[item];i++){
            res+=item;
        }
    }

    return res;
}

console.log(frequencySort('aaAABBBCccbbc'))