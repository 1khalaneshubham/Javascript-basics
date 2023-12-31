let Marks = 90;
// let Marks = 20;

if(Marks >= 33 && Marks >= 80){
    console.log("Pass")
    console.log("A+")
}
console.log("++++++++++++++++++++++++++++++++++++++++++++++")
if(Marks >= 33 || Marks >= 80){
    console.log("Pass")
    console.log("A")
}
console.log("++++++++++++++++++++++++++++++++++++++++++++++")
if(!(Marks <= 33)){
    console.log("Pass")
    console.log("B++")
}
console.log("++++++++++++++++++++++++++++++++++++++++++++++");
if(!(Marks > 33 && Marks <= 80) || !false){
    console.log("Pass")
    console.log("B++")
}