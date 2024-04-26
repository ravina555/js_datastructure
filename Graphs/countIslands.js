function countIslands(grid){
    let count=0;
    let visited=new Set();
    for(let r=0;r<grid.length;r++){
        for(c=0;c<grid[0].length;c++){
            if(explore(grid ,r,c,visited) === true){
                count++;
            }
        }
    }
    return count;
}

function explore(grid , r ,c , visited){
    let rowInBounds = r >= 0 && r < grid.length;
    let colInBounds = c >= 0 && c < grid.length;

    if(!rowInBounds || !colInBounds){
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

    explore(grid , r-1 , c , visited);
    explore(grid , r , c -1 , visited);
    explore(grid , r, c+1 , visited);
    explore(grid , r+1 , c , visited);
    return true
}


console.log(countIslands([['w','l','w','w','w'],['w','l','w','w','w'],['w','w','w','l','w'],['w','l','l','w','w'],['l','w','w','l','l'],['l','l','w','w','w']]))