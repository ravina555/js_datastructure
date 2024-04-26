//find path between 2 nodes 

function undirectedGraph(edges , node1 , node2){
    const graph=buildGraph(edges);
    return hasPath(graph ,node1 , node2 , new Set())
   
}

function hasPath(graph , src , dest , visitedNode){
    if(src === dest){
        return true;
    }
    if(visitedNode.has(src)){
        return false;
    }
    visitedNode.add(src);
    for(let neighbour of graph[src]){
        if(hasPath(graph,neighbour,dest , visitedNode) === true){
            return true;
        }
    }
    return false;

}
function buildGraph(edges){
    let graph=[];
    for(let edge of edges){
        const [a , b] = edge;
        if(!(a in graph)){
            graph[a]=[];
        }

        if(!(b in graph)){
            graph[b]=[];
        }

        graph[a].push(b);
        graph[b].push(a);
    }
return graph;
}
const edges=[
    ['i','j'],
    ['k' , 'i'],
    ['m' , 'k'],
    ['k' , 'l'],
    ['o','n']
]
console.log(undirectedGraph(edges , 'j' , 'm'));

