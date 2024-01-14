//conver 2D- 3D dimensional array to flat array 

function flatArr(arr){
    let flat = arr.reduce((acc , curr)=>{
        return [...acc , ...curr]
    },[])

    return flat;
}

console.log(flatArr([[1,2,3],[3,4],[5,8]]))