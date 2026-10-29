let gcdOfStrings = function(str1, str2) {
    let len1 =  str1.length;
    let len2 = str2.length;
    let candidate = "";

    if (len1 > len2){
        candidate = str2;
        // len = len1 / len2;
    } else {
        candidate = str1;
        // len = len2 / len1;
    }

    let len = candidate.length;

    for(let i = len; i >= 1; i--){
        if(( len1 % i === 0 && len2 % i === 0) && (candidate.repeat(len1 / i) === str1 && candidate.repeat(len2 / i) === str2)){
            return candidate
        } else {
            candidate = candidate.slice(0, i);
            // len--
        }
    }
    return ""
    
};


// console.log(gcdOfStrings("ABCABC", "ABC"))
console.log(gcdOfStrings("ABABAB", "ABAB"))
// console.log(gcdOfStrings("LEET", "CODE"))
// console.log(gcdOfStrings("AAAAAB", "AAA"))