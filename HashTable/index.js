class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }

    hash(key){
        let total = 0;
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }

        return total % this.size;
    }

    set(key , value){
        let index = this.hash(key);
        this.table[index] = value;
    }

    get(key){
        let index = this.hash(key);
        return this.table[index]
    }

    remove(key){
        let index = this.hash(key);
        this.table[index] = undefined;
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(this.table[i])
            }
        }
    }
}

const Table = new HashTable(50);
console.log(Table)
Table.set('au','australia');
Table.set('name' ,'Bruce');

Table.remove('name');
console.log(Table);


//In this code , we face a problem with collision , as the charCode of name and mane will be the same , and the new value set overwrites the exisiting value
//tp  overcome this , see the program in next file.