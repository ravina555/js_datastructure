function minimumSizeIsland(grid){
    let visited =new Set();
    let minSize =Infinity;
    for(let r=0;r<grid.length;r++){
        for(let c=0;c<grid[0].length;c++){
            if(explore(grid , r , c , visited) === true){
                let size = explore(grid , r , c , visited);
               if(size > 0 && minSize > size){
                minSize = size;
               }
            }
        }
    }
    
    return minSize;
}

function explore(grid , r ,c, visited){
    let rowsInBound = r >= 0 && r < grid.length;
    let colInBound = c >= 0 && c < grid.length;

    if(!rowsInBound || !colInBound){
        return false;
    }
    if(grid[r][c] === 'w'){
        return false
    }
    let current = r + ',' + c;
    if(visited.has(current)){
        return false
    }
    visited.add(current);
    let size =1;
    size += explore(grid , r-1 , c, visited);
    size += explore(grid , r+1 , c, visited);
    size += explore(grid , r , c-1 , visited);
    size += explore(grid , r , c+1 , visited);

    return size;
}


console.log(minimumSizeIsland([['w','l','w','w','w'],['w','l','w','w','w'],['w','w','w','l','w'],['w','l','l','w','w'],['l','w','w','l','l'],['l','l','w','w','w']]));