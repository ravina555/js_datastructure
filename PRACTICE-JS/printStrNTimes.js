//

function printStrNTimes(str , n){
    if(n <= 0 ){
        return " ";
    }else if(n===1){
        return str;
    }else{
        return str + " " + printStrNTimes(str , n-1);
    }

}

console.log(printStrNTimes('ravina',4));