/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    let res = [];

    // 1. Brute-Force Approach
    for (let c50 = 0; c50 <= 2; c50++) { // The number of c50 must be <= 2
        for (let c25 = 0; c25 <= 4; c25++) {
            for (let c5 = 0; c5 <= 20; c5++) { // or 48 - c50 - c25
                let c1 = 48 - c50 - c25 - c5; // The number of c1 is the rest

                let value = 50 * c50 + 25 * c25 + 5 * c5 + c1;

                if (value === 100) {
                    res.push({ c50, c25, c5, c1 });
                }
            }
        }
    }

    // 2. backtracking O(4^48)
    // function backtrack(c50, c25, c5, c1, coinsUsed, value) {
    //     // end case
    //     if (coinsUsed === 48 && value === 100) {
    //         res.push({ c50, c25, c5, c1 });
    //         return;
    //     }
    //     if (coinsUsed > 48 || value > 100) {
    //         return;
    //     }

    //     if(c50 + c25 + c5 + c1 < 48) {
    //         backtrack(c50 + 1, c25, c5, c1, coinsUsed + 1, value + 50);
    //         backtrack(c50, c25 + 1, c5, c1, coinsUsed + 1, value + 25);
    //         backtrack(c50, c25, c5 + 1, c1, coinsUsed + 1, value + 5);
    //         backtrack(c50, c25, c5, c1 + 1, coinsUsed + 1, value + 1);
    //     }
    // }

    // backtrack(0, 0, 0, 0, 0, 0)

    if(res.length === 0) {
        console.log("No result.");
    } else {
        console.log(res[0]);
        console.log(res[1]);
    }

//     for (let i = 0; i < res.length; i++) {
//         console.log(res[i])
//     }
}
pickCoins();