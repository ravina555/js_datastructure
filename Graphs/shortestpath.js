function shortestpath(edges , src , dest){
    const graph = makeGraph(edges);
    const queue = [[src , 0]];
    let visited =new Set(src);
    
    while(queue.length > 0){
        const [current , distance] = queue.shift();

        if(current === dest){
            return distance;
        }
        for(let neighbour of graph[current]){
            if(!(visited.has(neighbour))){
                visited.add(neighbour);
                queue.push([neighbour , distance + 1])
            }
            
        }
    }
    return -1;


}

function makeGraph(edges){
    let graph =[];
    for(let edge of edges){
        const [a , b] = edge;
        if(!(a in graph)){
            graph[a] =[]
        }
        if(!(b in graph)){
            graph[b] =[]
        }

        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

const edges =[['w','x'],['x','y'],['z','y'],['z','v'],['w','v']];

console.log(shortestpath(edges , 'w' , 'z'));