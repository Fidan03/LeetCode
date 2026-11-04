let reverseVowels = function(s) {
    let vowels = [];
    let result = s.split("");

    for(let char of s){
        if(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(char)){
            vowels.push(char)
        }
    }
    // console.log(vowels);

    vowels = vowels.reverse()
    // console.log(vowels);
    // console.log(result);

    let vowelIndex = 0;
    
    for(let i = 0; i < result.length; i++){
        if(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(result[i])){
            result[i] = vowels[vowelIndex];
            vowelIndex++
        }
    }
    return result.join("")
      
};


console.log(reverseVowels("IceCreAm"));  //"AceCreIm"
console.log(reverseVowels("leetcode"));  //"leotcede"