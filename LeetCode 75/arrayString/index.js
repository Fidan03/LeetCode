let compress = function(chars) {
    if (chars.length === 1) return 1

    let count = 1;
    let writeIndex = 0;

    for(let i = 0; i < chars.length; i++){
        if(chars[i] === chars[i+1]) count++
        else chars[count]

        chars[writeIndex] = chars[i];
        // if(count > 1)
    }
};

console.log(compress(["a","a","b","b","c","c","c"]));
console.log(compress(["a"]));
console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]));