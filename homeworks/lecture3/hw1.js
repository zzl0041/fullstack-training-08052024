/**
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    const numberOfCoins = 48;
    const target = 100;
    const solutions = [];

    for (let c50 = 0; c50 <= numberOfCoins; c50++) {
        for (let c25 = 0; c25 <= numberOfCoins - c50; c25++) {
            for (let c5 = 0; c5 <= numberOfCoins - c50 - c25; c5++) {
                const c1 = numberOfCoins - c50 - c25 - c5;
                if (c50 * 50 + c25 * 25 + c5 * 5 + c1 * 1 == target) {
                    solutions.push({ c50, c25, c5, c1 });
                    console.log(
                        "Solution",
                        solutions.length,
                        ":",
                        solutions[solutions.length - 1]
                    );
                    if (solutions.length == 2) {
                        return;
                    }
                }
            }
        }
    }
    console.log("Less than two solutions found.");
}
pickCoins();

// Solution 1 : { c50: 0, c25: 0, c5: 13, c1: 35 }
// Solution 2 : { c50: 0, c25: 1, c5: 7, c1: 40 }
