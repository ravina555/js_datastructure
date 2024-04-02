class hashTable{
    constructor(size){
        this.size = size;
        this.table = [];
    }

    getHashValue(key){
        let total=0;
        for(let i=0;i<key;i++){
            total += key.charCodeAt(key[i])
        }
        return total %this.size;
    }

    set(key , value){
        let index = this.getHashValue(key);
        let existingPair = this.table[index].findIndex((item)=> item === index);

        if(existingPair){
            existingPair.value = value;
        }else{
            this.table[index].push({key , value})
        }
    }

    get(key){
        let index = this.getHashValue(key);

        let findPair = this.table[index].find((pair)=> pair === index);
    }
}