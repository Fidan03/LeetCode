let gcdOfStrings = function(str1, str2) {
    let len1 =  str1.length;
    let len2 = str2.length;
    let candidate = ""

    if (len1 > len2){
        candidate = str2;
    } else {
        candidate = str1;
    }

    for(let i = 0; i < candidate.length; i--){
        if(str1.includes(candidate) || str2.includes(candidate)){
         candidate
        } else {
            return ""
        }
    }
};


// console.log(gcdOfStrings("ABCABC", "ABC"))
// console.log(gcdOfStrings("ABABAB", "ABAB"))
// console.log(gcdOfStrings("LEET", "CODE"))
console.log(gcdOfStrings("AAAAAB", "AAA"))