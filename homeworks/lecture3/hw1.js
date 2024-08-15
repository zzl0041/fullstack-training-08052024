/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    let solutions = [];
  
    for (let w = 0; w <= 1; w++) {
      for (let z = 0; z <= 2; z++) {
        let remainingCoins = 48 - w - z;
        let remainingCents = 100 - (w * 50 + z * 25);
        
        for (let y = 0; y <= remainingCoins; y++) {
          let x = remainingCoins - y;
          if (x + 5 * y === remainingCents) {
            solutions.push({x: x, y: y, z: z, w: w});
            if (solutions.length === 2) return solutions;
          }
        }
      }
    }
    return solutions;
}



  console.log(pickCoins());