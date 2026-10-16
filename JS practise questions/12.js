num = [10 ,20, 30 ,40 ,50];

let largest = 0;
let len = num.length;

for(let i = 0; i <= len; i++){
    if(num[i] > largest){
        largest = num[i];
    }
    else{
        continue;
    }
}

console.log("The largest element in the array is ",largest);