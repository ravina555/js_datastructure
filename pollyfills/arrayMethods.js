//map
Array.prototype.map=function(cb){
    const result=[];

    for(let i=0;i<this.length;i++){
        result.push(cb(this[i] , i , this))
    }

    return result;
}



//forEach
Array.prototype.forEach = function(cb){
    for(let i=0;i<this.length;i++){
        cb(this[i] , i , this);
    }
}

//filter
Array.prototype.filter=function(cb){
    const result=[];
    for(let i=0;i<this.length;i++){
        if(cb(this[i] , i , this)){
            result.push(this[i])
        }
    }
    return result;
}

//find
Array.prototype.find=function(cb){
    for(let i=0;i<this.length;i++){
        if(cb(this[i] , i , this)){
            return this[i]
        }
    }
    return undefined;
}

//findIndex
Array.prototype.findIndex=function(cb){
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)){
            return i
        }
    }
    return -1;
}

//some
Array.prototype.some=function(cb){
    for(let i=0;i<this.length;i++){
        if(cb(this[i] , i , this)){
            return true;
        }
    }
    return false;
}

//every
Array.prototype.every=function(cb){
    for(let i=0;i<this.length;i++){
        if(!cb(this[i] , i , this)){
            return false
        }
    }
    return true;
}

//reduce
Array.prototype.reduce=function(cb , initialValue){
    let acc = initialValue;
    for(let i=0;i<this.length;i++){
        if(acc){
            acc = cb.call(undefined , acc , this[i] , i , this)
        }else{
            acc = this[i]
        }
    }
    return acc;
}

    const arr = [1, 2, 3, 4]; 
    console.log(arr.reduce((total, elem) => total + elem)); 


