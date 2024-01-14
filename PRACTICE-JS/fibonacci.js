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

//algorithm series


function fibo(n){
    let fib =[0 , 1];

    for(let i=2;i<n ;i++){
        fib[i]= fib[i-1] + fib[i-2];

    }
    return fib;
}

console.log(fibo(5))

//fibonacci num

function getFibonacciNum(n){
    if( n < 2){
        return n;
    }
    return getFibonacciNum(n -1) + getFibonacciNum( n -2);
}

console.log(getFibonacciNum(6))