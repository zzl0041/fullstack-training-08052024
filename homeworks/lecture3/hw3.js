function counter() {
  let sum = 0

  return (val) => {
    if (val !== undefined) {
      sum += val
    }
    return sum
  }
}

let count = counter()
console.log(count(3)) // Output: 3
console.log(count(5)) // Output: 8 (3 + 5)
console.log(count()) // Output: 8
