/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    let res = []
    for (let i = 0; i <= 2; i++) {
        // 50c
        for (let j = 0; j <= 4; j++) {
            //25c
            for (let p = 0; p <= 20; p++) {
                //5c
                let q = 48 - i - j - p; // 1c
                if (50 * i + 25 * j + 5 * p + q === 100) {
                    res.push([i, j, p, q]); // 50c, 25c, 5c, 1c
                }
                if (res.length == 2) {
                    return res;
                }
            }
        }
    }
}

console.log(pickCoins());