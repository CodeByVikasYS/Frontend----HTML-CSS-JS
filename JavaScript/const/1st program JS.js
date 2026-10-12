function countVowels(word){
    a = word.length;
    word = word.toLowerCase();
    count= 0;

    for(i = 0; i < a; i++)
    {
        if("aeiou".includes(word[i]))
        {
            count++;
        }
        else
        {
            continue;
        }
    }

    return count;
}
a = countVowels("Vikas");
console.log(a);
b = countVowels("Sweety");
console.log(b);



//       -------------------------------             OR               --------------------------//

function countVowels1(word1){
    let a = word1.length;   
    word1 = word1.toLowerCase();
    let count1= 0;

    for(i = 0; i < a; i++)
    {
        if(word1[i] == "a" || word1[i] == "e" || word1[i] == "i" || word1[i] == "o" || word1[i] == "u" )
        {
            count1++;
        }
        else{
            continue;
        }
    }

    return count1;
}
let c = countVowels1("Vikas");
console.log(c);
let d = countVowels1("Sweety");
console.log(d);
