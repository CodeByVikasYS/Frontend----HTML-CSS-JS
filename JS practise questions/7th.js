const a = 5;
const b = 6;

const greater = (a,b) => {
    if(a>b){
        return `${a} is greater than ${b}`;
    }
    else{
        return `${b} is greater than ${a}`;
    }
}

const compare = greater(a,b);

console.log(compare);