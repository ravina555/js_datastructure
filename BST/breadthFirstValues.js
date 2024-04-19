function breadthFirstValues(root){
    if(root === null){
        return [];
    }
    let values=[];
    let queue=[root];
    while(queue.length > 0){
        let current = queue.shift();
        values.push(current.val);
        if(current.left !== null){
            queue.push(current.left)
        }

        if(current.right !== null){
            queue.push(current.right)
        }
    }

    return values;
}
