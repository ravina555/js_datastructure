//print spiral matrix

function spiralMatrixPrint(matrix) {
    const result = [];


   
    while(matrix.length > 0){
        //push first row
        result.push(...matrix.shift());

        //end element of each row
        for(let i=0;i<matrix.length;i++){
            result.push(matrix[i].pop())
        }

        //end line
        result.push(...matrix.pop().reverse());
        console.log(matrix);

        for(let i=matrix.length-1 ; i>=0;i--){
            if(matrix.length > 0){
                result.push(matrix[i].shift())
            }
        }

        
    }
    return result;
}

// Example usage:
const matrix = [
    [1, 2, 3,10],
    [4, 5, 6, 15],
    [7, 8, 9 , 20],
    [100,200,300,400]
];

const result = spiralMatrixPrint(matrix);
console.log(result);
