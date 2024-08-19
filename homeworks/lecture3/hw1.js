/**
 * there are unlimited numbers of 1c, 5c, 25c, 50c
 * pick 48 coins to have 1 dollar
 * print out 2 solutions
 */
function pickCoins() {
  // implement here
  let solutions = [];
  for (let num50c = 0; num50c <= 48; num50c++) {
    for (let num25c = 0; num25c <= 48 - num50c; num25c++) {
      for (let num5c = 0; num5c <= 48 - num50c - num25c; num5c++) {
        let num1c = 48 - num50c - num25c - num5c;
        let totalCents = 50 * num50c + 25 * num25c + 5 * num5c + 1 * num1c;
        if (totalCents === 100) {
          solutions.push({ num50c, num25c, num5c, num1c });
          if (solutions.length === 2) {
            solutions.forEach((solution) => {
              console.log(
                `50c:${solution.num50c},25c:${solution.num25c},5c:${solution.num5c},1c:${solution.num1c}`
              );
            });
            return;
          }
        }
      }
    }
  }
}

pickCoins();
