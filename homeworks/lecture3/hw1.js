/**
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
  // implement here
  const coins = [50, 25, 5, 1];
  const res = [];

  function dfs(amount, cur_coins, cur_index) {
    if (res.length === 2) {
      return;
    }

    if (amount === 100 && cur_coins.length === 48) {
      res.push([...cur_coins]);
      return;
    }

    for (let i = cur_index; i < 4; i++) {
      const cur_coin = coins[i];
      amount += cur_coin;
      cur_coins.push(cur_coin);
      if (amount <= 100 && cur_coins.length <= 48) {
        dfs(amount, cur_coins, i);
      }
      amount -= cur_coin;
      cur_coins.pop();
    }
  }

  dfs(0, [], 0);
  console.log(res);
}

pickCoins();
