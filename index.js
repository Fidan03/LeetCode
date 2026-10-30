let canPlaceFlowers = function(flowerbed, n) {
    let count = 0;

  for(let i = 0; i < flowerbed.length; i++){
    // console.log(flowerbed[i]);
    
    if((i === 0 || flowerbed[i-1] === 0) && (i === flowerbed.length - 1 || flowerbed[i+1] === 0) && flowerbed[i] === 0){
        flowerbed[i] = 1;
        count++;
        // console.log(flowerbed);

        if(count >= n){
            return true
        }
    }
  }
  return false
};


console.log(canPlaceFlowers([1,0,0,0,1], 1))
console.log(canPlaceFlowers([1,0,0,0,1], 2))