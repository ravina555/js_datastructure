function CircularQueue(capacity){
    this.items=[capacity];
    this.front = -1;
    this.rear=-1;
    this.capacity = capacity;
    this.currentLength = 0;


    this.isFull= function(){
        return this.currentLength === this.capacity;
    }

    this.isEmpty=function(){
        return this.currentLength === 0;
    }

    this.enqueue=function(elem){
        if(!this.isFull()){
            this.rear = (this.rear+1) % this.capacity;
            this.currentLength+=1;
            this.items[this.rear] = elem;

            if(this.front === -1){
                this.front = this.rear;
            }
        }
    }

    this.dequeue=function(){
        if(this.isEmpty()){
            return null;
        }
        const item = this.items[this.front];
        this.items[item] = null;
        this.front = (this.front + 1) % this.capacity ;
        this.currentLength-=1;

        if(this.isEmpty()){
            this.rear = -1;
            this.front = -1;
        }

        return item;
    }

    this.peek=function(){
        if(!this.isEmpty()){
            return this.items[this.front]
        }

        return null;
    }

    this.print = function(){
        if(this.isEmpty()){
            console.log('the circular queue is empty')
        }else{
            let str='';
            for(let i= this.front ; i !== this.rear ; i= ( i+1)% this.capacity){
                str += this.items[i] + " ";
            }
            console.log(str);
        }
        
    }

}

const circularQueue = new CircularQueue(5);
circularQueue.enqueue(1);
circularQueue.enqueue(3);
circularQueue.print(circularQueue);
