const marks = 90;
let grade = "";

if(marks >= 90){
    grade = "A";
}
else if(75 <= marks<90){
    grade = "B";
}
else if(50 <= marks< 74){
    grade = "C";
}
else{
    grade = "D";
}

console.log("you are awarder with grade" , grade);