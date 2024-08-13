/**
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */

function pickCoins() {
  const coins = [1, 5, 25, 50]
  const ans = []
  process(coins, 0, ans, 0, [])
  return ans
}

const process = (coins, index, ans, count, arr) => {
  if (ans.length === 2) {
    return
  }

  if (count === 100 && arr.length === 48) {
    ans.push([...arr])
    return
  }

  if (index === coins.length || arr.length === 48 || count > 100) {
    return
  }

  arr.push(coins[index])
  process(coins, index, ans, count + coins[index], arr)

  arr.pop()
  process(coins, index + 1, ans, count, arr)
}

console.log(pickCoins())
