function largestComponent(graph){
    let largest=0;
    let visited = new Set();
    for(let node in graph){
        const size = explore(graph , node , visited);
        if(size > largest){
            largest = size;
        }
    }
    return largest;

}

function explore(graph , node , visited){
    if(visited.has(String(node))){
        return false;
    }
    visited.add(String(node));
    let size =1;
    for(let edge of graph[node]){
        size+=explore(graph , edge , visited)
    }
    return size;
}

const graph={0:[8,1,5],1:[0],5:[0,8],8:[0,5],2:[3,4],3:[2,4],4:[3,2]};

console.log(largestComponent(graph));