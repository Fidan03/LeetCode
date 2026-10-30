let reverseVowels = function(s) {
    let vowels = [];

    for(let char of s){
        if(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(char)){
            vowels.push(char)
        }
    }
    // console.log(vowels);

    vowels = vowels.reverse()
    // console.log(vowels);
    
    for(let i = 0; i < s.split("").length; i++){
        if(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(s.split("")[i])){
            s[i] = vowels[i]
            s.replace(vowels[i])
            return s
        }
    }
};


console.log(reverseVowels("IceCreAm"));  //"AceCreIm"
// console.log(reverseVowels("leetcode"));  //"leotcede"