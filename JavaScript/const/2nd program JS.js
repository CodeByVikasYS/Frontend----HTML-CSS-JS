//Call back function or higher order function

let num = [4,5,6];

num.forEach((num1) => {                            //But this is only use of forEach loop
    console.log(num1*num1);
}
)


// higher order fucntion

let num1 = [6,7,8];
let  squareCal= (num1) =>
{
  console.log(num1 * num1);                       //This is higher order function in this we have 
}                                                 //used the function as parameter inside the 
                                                  // other function.
                                                  
num1.forEach(squareCal);