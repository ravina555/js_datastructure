//bfs

function minVal(root){
    let minVal= Infinity;
    if(root === null){
        return "dosen't exist"
    }
    let queue = [root];

    while(queue.length > 0){
        let current = queue.shift();
        if(current.val < minVal ){
            minVal = current.val
        }
        if(current.left !== null){
            queue.push(current.left)
        }

        if(current.right !== null){
            queue.push(current.right)
        }
    }
    return minVal;
}


//recursion

function minVal(root){
    if(root === null){
        return "dosen't exist"
    }
    return Math.min(root.val , minVal(root.left) , minVal(root.right));
}