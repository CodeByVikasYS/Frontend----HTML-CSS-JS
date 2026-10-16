const num = [1,2,3,4,5,6,7,8];

let len = num.length;
let evenCount = 0;
let oddCount = 0;
for(let i = 0; i < len; i++){
    if(num[i] % 2 === 0){
        evenCount = evenCount + 1;
    }
    else{
        oddCount = oddCount + 1;
    }
}

console.log("The number of even numbers present in your array [" , num.join(" ") , "] are ", evenCount);

console.log("The number of odd numbers present in your array [" , num.join(" ") , "] are ", oddCount);