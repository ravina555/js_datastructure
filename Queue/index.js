function checkQueueMethods(item=[]){
    this.enqueue=function(elem){
        return item.push(elem)
    };

    this.dequeue=function(){
        return item.shift();
    };
    this.isEmpty=function(){
        return item.length === 0 
    };
    this.peek=function(){
        if(!item.isEmpty()){
            return item[0]
        }
        return null;
    };


    this.size=function(){
        return item.length;
    };

    this.print=function(){
        console.log( item.toString());
    }
}

const queue = new checkQueueMethods();
queue.enqueue(6);
queue.enqueue(3);
queue.enqueue(1);
queue.print();
queue.dequeue();
queue.size();
queue.print();

//optimized solution

function Queue(){
    this.item={};
    this.rear=0;
    this.front=0;

    this.enqueue=function(elem){
        this.item[this.rear]= elem;
        this.rear++;
    }

    this.dequeue=function(){
        delete this.item[this.front];
        return this.front++;
    }

    this.isEmpty=function(){
        return this.front - this.rear === 0
    }

    this.size = function(){
        return this.items.length;
    }

    this.peek=function(){
        return this.item[this.front]
    }

    this.print=function(){
        console.log(this.item);
    }
}

const optimizedQueue = new Queue();
console.log(optimizedQueue);
optimizedQueue.enqueue(2);
optimizedQueue.enqueue(4);
optimizedQueue.print();
optimizedQueue.dequeue();
optimizedQueue.print();
optimizedQueue.peek();
