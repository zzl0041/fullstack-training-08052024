/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    const solutions = new Array();
    for (let cc50 = 0;  cc50 <= 2; cc50++){
        for (let cc25 = 0; cc25 <= 4; cc25 ++){
            for (let cc5 = 0; cc5<= 20; cc5++){
                const cc = 48 - cc5 - cc25 - cc50;
                const ans = cc50 * 50 + cc25 * 25 + cc5 * 5 + cc
                if(ans === 100 && cc >= 0){
                    solutions.push({cc50,cc25,cc5,cc})
                }
                if(solutions.length == 2){
                    break;
                }
            }
        }

    }
    console.log(solutions)
}

pickCoins();