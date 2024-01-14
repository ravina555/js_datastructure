//find first duplicate from array

function firstDuplicate(arr){
    let data={};

    for(let item of arr){
        if(data[item]){
            return item;
        }else{
            data[item] = item;
        }
    }

    return -1;
   
}



console.log(firstDuplicate([1,2,3,1,3]));