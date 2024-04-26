//dfs

function hasPath(graph , source , dest){
    let stack=[source];
    while(stack.length > 0){
        let current = stack.pop();
        if(current === dest){
            return true
        }
        for(let neighbour of graph[current]){
            stack.push(neighbour);
        }
    }
    return false;
}

//recursive function 
function hasPath(graph , source , dest){
    if(source === dest){
        return true;
    }
    for(let neighbour of graph[source]){
        if(hasPath(graph , neighbour , dest) === true){
            return true;
        }
    }
    return false;
}

//bfs
function hasPath(graph , source , dest){
    let stack=[source];
    while(stack.length > 0){
        let current = stack.shift();
        if(current === dest){
            return true
        }
        for(let neighbour of graph[current]){
            stack.push(neighbour);
        }
    }
    return false;
}

const graph={
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
}
console.log(hasPath(graph ,'a' ,'e'))