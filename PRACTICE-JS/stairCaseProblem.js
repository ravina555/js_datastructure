//Given a staircase of 'n' steps , count the number of distanct ways to climb to the top. You can either climb 1 or 2 steps at a time.


function climbingStairs(n){
    let ways =[1 , 2];

    for(let i=2;i<n ;i++){
        ways[i] = ways[i-1] + ways[i-2];
    }

    return ways[n-1];

}

console.log(climbingStairs(3))