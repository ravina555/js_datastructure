//dfs

function dfsSum(root){
    let sum =0;
    if(root === null){
        return 0;
    }
    let queue=[root];
    if(queue.length > 0){
        let current = queue.pop();
        sum+=current.val;

        if(current.right !== null){
            queue.push(current.right)
        }

        if(current.left !== null){
            queue.push(current.left)
        }
    }
    return sum;
}

//recursive

function dfsSum(root){
    if(root === null){
        return 0;
    }

    return root.val + dfsSum(root.left) + dfsSum(root.right);
}