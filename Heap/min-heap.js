class MinHeap{
    constructor(){
        this.heap=[];
    }
    parent(i){
        return Math.floor((i - 1)/2);
    }
    leftChild(i){
        return 2*i + 1
    }
    rightChild(i){
        return 2* i + 2
    }
    insert(value){
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1)
    }
    bubbleUp(i){
        while( i > 0 && this.heap[i] < this.heap[this.parent(i)]){
            [this.heap[i], this.heap[this.parent(i)]] = [this.heap[this.parent(i)], this.heap[i]];
            i = this.parent(i)
        }
    }
    extractMin() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
    
        const min = this.heap[0]; 
        this.heap[0] = this.heap.pop();
        this.heapify(0);
        return min;
    }
    heapify(i) {
        const left = this.leftChild(i);
        const right = this.rightChild(i);
        let smallest = i;
    
        if (left < this.heap.length && this.heap[left] < this.heap[i]) {
            smallest = left;
        }
    
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }
    
        if (smallest !== i) {
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            this.heapify(smallest);
        }
    }
    
}

const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(20);
minHeap.insert(15);
minHeap.insert(40);
minHeap.insert(50);

console.log(minHeap.heap); // Output: [10, 20, 15, 40, 50]

console.log(minHeap.extractMin()); // Output: 10
console.log(minHeap.heap); // Output: [15, 20, 50, 40]

console.log(minHeap.extractMin()); // Output: 15
console.log(minHeap.heap); // Output: [20, 40, 50]