//Finding a missing elements in an array and then add with existing elements. 

function missingElementInArray(arr){
    let result =[];
    for (let i=1;i<=7;i++){
        if(!arr.includes(i)){
            result.push(i);
        }
    }

    return [...arr , ...result].sort();
}

console.log(missingElementInArray([1,2,6]))

//

function missingNUmber(arr){
    let missingNumArr=[];
    for(let i=1;i<=10;i++){
        if(!arr.includes(i)){
            missingNumArr.push(i);
        }
    }
    return missingNumArr;

}

console.log(missingNUmber([1, 2, 3, 4, 5, 6, 7, 8, 10]));