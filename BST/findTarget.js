//dfs

function findTarget(root , t){
    if(root === null){
        return false;
    }
    let queue=[root];

    while(queue > 0){
        let current = queue.pop();
        if(current.val === t){
            return true;
        }

        if(current.right !== null){
            queue.push(current.right);
        }
        if(current.left !== null){
            queue.push(current.val)
        }
    }
    return false;
}

//recursive dfs

function findTarget(root , t){
    if(root === null){
        return false;
    }

    if(root.val === t){
        return true;
    }
    return findTarget(root.left , t) || findTarget(root.right , t)
}

//bfs


function findTarget(root , t){
    if(root === null){
        return false;
    }
    let queue=[root];

    while(queue > 0){
        let current = queue.shift();
        if(current.val === t){
            return true;
        }

        if(current.left !== null){
            queue.push(current.val)
        }

        if(current.right !== null){
            queue.push(current.right);
        }
       
    }
    return false;
}