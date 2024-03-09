function Node(elem){
    this.value = elem;
    this.next = null;
}

function LinkedList(){
    this.size = 0;
    this.head = 0;
    this.value=null;

    this.isEmpty=function(){
        return this.size === 0
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
        let node = new Node(elem);

        if(this.isEmpty()){
            this.head = node;
        }else{
            let prev =this.head;
            while(prev.next){
                prev = prev.next
            }
            prev.next = node;
        }
        this.size++;
    }

    this.print=function(){
        if(this.isEmpty()){
            console.log('list is empty')
        }else{
            let listValue ='';
            let current = this.head;
            while(current){
                listValue+=`${current.value}`;
                current = current.next;
            }

            console.log(listValue)
        }
    }
    this.insert=function(elem , index){
        
        if(index < 0 || index> this.size){
            console.log('not applicable');
        }

        if(index === 0){
            this.prepend(node);
        }else{
            let node = new Node(elem);
            let prev = this.head;

            for(let i=0;i<index-1;i++){
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            

            this.size++;
        }
    }
}

let list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(30);

list.insert(1,2)

list.print();

