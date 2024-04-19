//recursive

function maxPathSum(root){

    if(root === null){
        return -Infinity;
    }

    //leaves of the tree condition
    if(root.left === null && root.right === null){
        return root.val 
    }
    let maxLeavesValue = Math.max(maxPathSum(root.left) , maxPathSum(root,right))
    return root.val + maxLeavesValue;
}