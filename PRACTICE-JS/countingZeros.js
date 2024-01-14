//if you have a number 1 to 50 the value is 5. just 50 divided by 10. 
//However, if the value is 100. the value is 11. you will get by 100/10 = 10 and 10/10. Thats how you will get in the more zeros in one number like (100, 200, 1000)


function countingZeros(n){
    let count= 0;
    while(n> 0){
        count+=Math.floor(n/10);
        n = n/10;
    }
    return count;
}

console.log(countingZeros(100))