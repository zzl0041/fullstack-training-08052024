/** 
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
    // implement here
    // we have 100 c initially
    let pickCoinsOnesMore = (() => {
        let coins = {
            '1': 100,
            '5': 0,
            '25': 0,
            '50': 0
        };
        let total = 100;
        let five_to_25 = true;
        let one_to_5 = true;
        let exists = true;
    
        while (total > 48) {
            if (five_to_25 && coins['5']  == 5) {
                coins['25']  += 1;
                coins['5'] -= 5;
                total -= 4;
                if (total < 48) {
                    // backtrace
                    coins['25']  -= 1;
                    coins['5'] += 5;
                    total += 4;
                    five_to_25 = false;
                }
            }
            else if (one_to_5 && coins['1']  >= 5) {
                coins['5']  += 1;
                coins['1'] -= 5;
                total -= 4;
                if (total < 48) {
                    // backtrace
                    coins['5']  -= 1;
                    coins['1'] += 5;
                    total += 4;
                    one_to_5 = false;
                }
            }
            else if (coins['25']  >= 5) {
                coins['50']  += 1;
                coins['25'] -= 1;
                total -= 1;
            }
            else {
                exists = false;
                break;
            }
        }

        return exists && coins;
    })();

    let pickCoinsFivesMore = (() => {
        let coins = {
            '1': 100,
            '5': 0,
            '25': 0,
            '50': 0
        };
        let total = 100;
        let five_to_25 = true;
        let one_to_5 = true;
        let exists = true;
    
        while (total > 48) {
            if (one_to_5 && coins['1']  >= 5) {
                coins['5']  += 1;
                coins['1'] -= 5;
                total -= 4;
                if (total < 48) {
                    // backtrace
                    coins['5']  -= 1;
                    coins['1'] += 5;
                    total += 4;
                    one_to_5 = false;
                }
            }
            else if (five_to_25 && coins['5']  == 5) {
                coins['25']  += 1;
                coins['5'] -= 5;
                total -= 4;
                if (total < 48) {
                    // backtrace
                    coins['25']  -= 1;
                    coins['5'] += 5;
                    total += 4;
                    five_to_25 = false;
                }
            }
            else if (coins['25']  >= 5) {
                coins['50']  += 1;
                coins['25'] -= 1;
                total -= 1;
            }
            else {
                exists = false;
                break;
            }
        }
        
        return exists && coins;
    })();

    return [pickCoinsOnesMore, pickCoinsFivesMore];
}


console.log(pickCoins());