//best time to buy and sell stocks , you are given an array prices where prices[i] is the price of stock on the given ith day.
//you want ot maximaz your profit by buying a stock on single day and choosing to sell the stock on another day .
//return the maximum profit , if you cannot achieve profit , return 0;


//bad solution
// function stockMarket(profits){
//     let prof = 0;

//     for(let i=0;i<profits.length -1 ;i++){
//         for(let j=i+1;j<profits.length;j++){
//             if(profits[j] - profits[i] > prof){
//                 prof = profits[j] - profits[i];
//             }
//         }
//     }
//     return prof;
// }

// console.log(stockMarket([7,1,5,3,6,4]));

//better sol
//follows greedy alogorithm

function stockMarket(profit){
    let minStockPurchasePrice = profit[0];
    let minProfit = 0;

    for(let i=1;i<profit.length;i++){
        if(profit[i] < minStockPurchasePrice){
            minStockPurchasePrice = profit[i]
        }

        let currentProfit = profit[i] - minStockPurchasePrice;

        minProfit = Math.max(minProfit , currentProfit);
    }

    return minProfit;

}

console.log(stockMarket([7,1,5,3,6,4]))