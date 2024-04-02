//Breadth-first-search
class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right= null;
    }

    

}
function BFS(){
    let currentNode = this.root;
    let result=[];
    let queue=[];
    queue.push(currentNode);

    while(queue.length > 0){
        currentNode = queue.shift();
        result.push(currentNode.value);

        if(currentNode.left){
            queue.push(currentNode.left)
        }

        if(currentNode.right){
            queue.push(currentNode.right);
        }
    }

    return result;
}