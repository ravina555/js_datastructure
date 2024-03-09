function boxBlur(image) {
    
    let arr = [];
    
    for (let y = 0; y < image.length - 2; y++) {
        let line = [];
        for (let x = 0; x < image.length - 2; x++) {
            let sum = 0;
            for (let a = y; a < y + 3; a++) {
                for (let b = x; b < x + 3; b++) {
                    console.log(image[a][b])
                    sum = sum + image[a][b];
                }
            }
            line.push(Math.floor(sum / 9));
        }
        arr.push(line);
    }
    return arr;
}

console.log(boxBlur([1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]))