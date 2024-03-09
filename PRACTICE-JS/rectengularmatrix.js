/* Q: Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it. */

function countSquares(matrix){

    let s=[];

    for (var y = 0; y < matrix.length - 1; y++) {
        for (var x = 0; x < matrix[0].length - 1; x++) {
            s.push("" + matrix[y][x] + matrix[y][x + 1] + matrix[y + 1][x] + matrix[y + 1][x + 1]);
        }
    }

    return new Set(s).size;
}

console.log(countSquares([[1,2,3,4],[2,3,4,5],[3,4,5,6]]))