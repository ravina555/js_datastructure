class HashTable{
    constructor(size){
        this.table = new Array(size).fill(null).map(() => []);;
        this.size = size;
    }

    hash(key){
        let total =0;
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i);
        }
        return total % this.size 
    }

    set(key , value){
        const index = this.hash(key);

        // Check if key already exists in the bucket
        const existingPair = this.table[index].find(pair => pair.key === key);

        if (existingPair) {
            existingPair.value = value; // Update value if key already exists
        } else {
            this.table[index].push({ key, value });
        }
    }

    get(key){
        let index = this.hash(key);
         // Search for the key in the bucket
         const pair = this.table[index].find(pair => pair.key === key);

         return pair ? pair.value : undefined;
    }

    remove(key){
        const index = this.hash(key);

        // Filter out the key-value pair from the bucket
        this.table[index] = this.table[index].filter(pair => pair.key !== key);
    }
}

// Example usage
const customHashtable = new HashTable(50);

customHashtable.set("key1", "value1");
customHashtable.set("key2", "value2");
customHashtable.set("key3", "value3");

console.log(customHashtable.get("key1"));  // Output: "value1"
console.log(customHashtable.get("key2"));  // Output: "value2"
console.log(customHashtable.get("key3"));  // Output: "value3"

customHashtable.remove("key2");
console.log(customHashtable.get("key2")); 