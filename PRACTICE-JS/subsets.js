//find all the subsets of the set

//ask

function generateSubsets(arr){
    var result = []
    for(var item of arr){
      let tempSub = [...result]

      for(var curr of tempSub){
        result.push([...curr, item])
      }
      result.push([item])
    }
    result.push([])
    return result
}

console.log(generateSubsets([1,2,3,4]))