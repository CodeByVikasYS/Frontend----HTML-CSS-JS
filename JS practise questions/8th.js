// for(i =0; i <= 10; i++){
//     console.log(i);                 // Through this code the numbers are printed in next line.
// }


//Now we are writing the code so that we can print the number in one line.

let num = [];

for(let i = 0; i <= 10; i++){
    num.push(i);
}

console.log(num.join("     "));