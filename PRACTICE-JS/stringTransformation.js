//Uppercase of each first letter of a words 
//first character to upper case in a sentence

let sentence = "India is my country";

let words = sentence.split(" ").map((item , index , arr)=>{
    return item[0].toUpperCase() + item.slice(1);
}).join(" ")



console.log(words);



