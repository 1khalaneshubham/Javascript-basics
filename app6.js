let str = "apple";
// let str = "an";
// let str = "baddddd";

if((str[0] === 'a') && (str.length > 3)){
    console.log("Good String");
}else{
    console.log("Not Good String");
}

console.log("************************************");

let num = 12;

if(( num%3===0 ) && (num+1 == 15) || (num-1 == 11)){
    console.log("Safe");
} else {
    console.log("Unsafe");
}