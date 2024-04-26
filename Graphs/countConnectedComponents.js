const graph={0:[8,1,5],1:[0],5:[0,8],8:[0,5],2:[3,4],3:[2,4],4:[3,2]};


function countConnectedComponents(graph){
    let count=0;
    let visited = new Set();
    for(let nodes in graph){
        if(explore(graph , nodes , visited) === true){
            count++;
        }
    }
    return count;
}

function explore(graph , nodes, visited){
    if(visited.has(String(nodes))){
        return false
    }
    visited.add(String(nodes));
    for(let node of graph[nodes]){
        explore(graph , node, visited)
    }
    return true;
}


console.log(countConnectedComponents(graph))
