function fibonacciSeries(num){

    let n1=0,n2=1,nextNum,arr=[];

    arr.push(n1);
    arr.push(n2);

    for(let i=0;i<num;i++){
        nextNum = n1+n2;
        arr.push(nextNum);

        n1=n2,
        n2=nextNum;
    }
    console.log(arr);
    return arr;
    

}

fibonacciSeries(9);