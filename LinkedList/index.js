function Node(elem){
    this.value = elem;
    this.next = null;
}


function LinkedList(){
    this.head = 0;
    this.value=null;
    this.size = 0;

    this.isEmpty=function(){
        return this.size === 0 ;
    }

    this.getSize= function(){
        return this.size;
    }

    this.prepend=function(elem){
        let node = new Node(elem);
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    this.append=function(elem){
        let node = new Node(elem)
        if(this.isEmpty()){
            this.head = node;
        }else{
            let prev = this.head;
            while(prev.next){
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    this.print=function(){
        if(this.isEmpty()){
            console.log( 'the list is empty')
        }else{
            let current = this.head;
            let listValues='';
            while(current){
                listValues += `${current.value} `
                current = current.next;
            }

            console.log(listValues);
        }
    }

    this.insert=function(value , index){
        if(index < 0 || index > this.size){
            return 'index is invalid';
        }
        if( index===0){
            this.prepend(value);
        }else{
            let node = new Node(value);
            let prev = this.head;
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
            
        }
    }

    this.remove=function(index , value){
        if(index<0 || index> this.size){
            return null;
        }
        let removeNode;
        if(index===0){
            removeNode = this.head;
            this.head = this.head.next;
        }else{
            let prev = this.head;
            for(let i=0;i<index-1;i++){
                prev = prev.next;

            }
            removeNode = prev.next;
            prev.next = removeNode.next;
        }
        this.size--;
        return removeNode.value;
    }

    this.removeValue=function(value){
        if(this.isEmpty()){
            return null;
        }
        if(this.head === value){
            this.head = this.head.next;
            this.size--;
            return 'the node has been deleted';
        }else{
            let prev = this.head;
            while(prev.next && prev.value !== value){
                prev = prev.next;
            }

            if(prev.next){
                const removeNode = prev.next;
                prev.next = removeNode.next;
                this.size--;
                return value;
            }
        }
        return null;
    }

    this.search=function(value){
        if(this.isEmpty()){
            return null;
        }

        let i=0;
        let current= this.head;
        while(current){
            if(current.value ===  value){
                return i;
            }
            current = current.next;
            i++;
        }
        return -1;
    }
    
}

let list = new LinkedList();
console.log(list.isEmpty());

list.append(2);
list.append(3);
list.append(4);
list.insert(8,2);
list.remove(2)
console.log(list.print());