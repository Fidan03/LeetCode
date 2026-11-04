let reverseWords = function(s) {
    let string = s.trim().split(/\s+/);
    return string.reverse().join(" ")
};

console.log(reverseWords("the sky is blue"));  //"blue is sky the"
console.log(reverseWords("  hello world  "));  //"world hello"
console.log(reverseWords("a good   example"));  //"example good a