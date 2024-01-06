//find character occurences

function characterOccurences(str , char){
    let count =0;

    for(let i=0;i<str.length;i++){
        if(str.toLowerCase().charAt(i)=== char){
            count++;
        }
    }
    console.log(count);
    return count;

}

characterOccurences("Testing","t")