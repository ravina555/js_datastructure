function depthFirstValues(root){
    if(root === null){
        return []
    }
    const queue=[root];
    let values=[];

    if(stack.length > 0){
        let current = queue.pop();
        values.push(current.val);

        if(current.right !== null){
            values.push(current.val)
        }
        if(current.left !== null){
            values.push(current.val)
        }

    }
    return values;
}

//recursive approach

function depthFirstValues(root){
    if(root === null){
        return [];
    }

    let leftTreeValues = depthFirstValues(root.left);
    let rightTreeValues = depthFirstValues(root.right);

    return [root.val , ...leftTreeValues , ...rightTreeValues];
}
