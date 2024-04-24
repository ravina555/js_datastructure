//Depth first travese


function depthFirstPrint(graph , source){
    let stack = [source];
    while(stack.length > 0){
        let current = stack.pop();
        for(let neighbour of graph[current]){
            stack.push(neighbour);
        }
    }
}

//solve the same using recursive function

function depthFirstSearch(graph , source){
    console.log(source);
    for(let neighbour of graph[source]){
        depthFirstSearch(graph , neighbour);
    }
}

const graph={
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
}

depthFirstPrint(graph , a);