// write a function to deep clone an object with circular reference

const data = {
  name: "foo",
  child: null,
};
data.child = data;

// recursion method
const cloneDeepWithLoop = (obj) => {
  if (obj === null || typeof obj === "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(cloneDeepWithLoop);
  }

  const copy = {};
  for (let key in obj) {
    if (obj[key]) {
      copy[key] = cloneDeepWithLoop(obj[key]);
    }
  }
  return copy;
};

// // structuredClone method
// const cloneDeepWithLoop = (obj) => {
//   // Implement the function here
//   return structuredClone(obj);
// };

console.log(data);
console.log(cloneDeepWithLoop(data));
