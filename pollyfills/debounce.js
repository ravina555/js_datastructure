// let i = 0;
// function increment() {
//   i++;
// }
// const debouncedIncrement = debounce(increment, 100);

// // t = 0: Call debouncedIncrement().
// debouncedIncrement(); //

//impplementation of debounce function

function debounce(func , wait=0){
    let timeout =null;

    return function(...args){
        clearTimeout(timeout);
        timeout = setTimeout(()=>{
            func.apply(this , args)
        },wait)
    }
}