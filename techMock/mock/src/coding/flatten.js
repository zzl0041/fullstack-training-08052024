function flattenArray(arr, depth = Infinity){
  return arr.flat(depth);
}
function contains(haystack, needle) {
  if (haystack === needle) return true;
  if (typeof haystack !== "object" || haystack === null) return false;

  if (Array.isArray(haystack)) {
      return haystack.some((item) => contains(item, needle)); // Check each array element
  }

  for (const key in haystack) {
      if (contains(haystack[key], needle)) return true;
  }

  return false;
}

const obj = {
  data: {
      info: {
          stuff: {
              thing: {
                  moreStuff: {
                      magicNumber: 44,
                      something: "foo2",
                      list: [10, 20, 30, { deep: "bar" }]
                  }
              }
          }
      }
  }
};

console.log(contains(obj, 44));       // true
console.log(contains(obj, "foo2"));   // true
console.log(contains(obj, "foo"));    // false
console.log(contains(obj, "bar"));    // true (inside nested array)
console.log(contains(obj, 20));       // true (inside array)
console.log(contains(obj, 100));      // false

console.log(flattenArray([[1, 2], [3, 4], [5, 6]])); // [1, 2, 3, 4, 5, 6]