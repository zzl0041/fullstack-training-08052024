/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    let solutions = 0;
    const coins = [50, 25, 5, 1];
    const target = 100;
    const numberOfCoins = 48;
    for (let i = 0; i <= numberOfCoins; i++) { // 50c
        for (let j = 0; j <= numberOfCoins - i; j++) { // 25c
            for (let k = 0; k <= numberOfCoins - i - j; k++) { // 5c
                let l = numberOfCoins - i - j - k; // 1c
                if (i * coins[0] + j * coins[1] + k * coins[2] + l * coins[3] === target) {
                    solutions++;
                    console.log("Solution " + solutions + ": " + i + "*50c, " + j + "*25c, " + k + "*5c, " + l + "*1c");
                    if (solutions ==2) {
                        return;
                    }
                }
            }
        }
    }
}

pickCoins();