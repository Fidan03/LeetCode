let mergeAlternately = function(word1, word2) {
  let i = 0;
  let j = 0;
  let result = [];

  while(i < word1.length || j < word2.length){
    if(i < word1.length && j < word2.length){
        word1[i]
        word2[j]
        result += word1[i] + word2[j]
        i++
        j++
    } else if(i < word1.length && j == word2.length){
        word1[i]
        result += word1[i]
        i++
    } else if(i == word1.length && j < word2.length){
        word2[j]
        result += word2[j]
        j++
    } else {
        return false
    }

  }
  return result
};



console.log(mergeAlternately("abc", "pqr"))
console.log(mergeAlternately("ab", "pqrs"))
console.log(mergeAlternately("abcd", "pq"))