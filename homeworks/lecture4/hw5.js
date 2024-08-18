// write a function to deep clone an object with circular reference
//
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
  const map = new Map();

  const deepClone = (obj) => {
    if (obj === null || typeof obj !== "object") {
      return obj;
    }
    if (map.has(obj)) {
      return map.get(obj);
    }
    const clone = Array.isArray(obj) ? [] : {};
    map.set(obj, clone);
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clone[key] = deepClone(obj[key]);
      }
    }
    return clone;
  };
  return deepClone(obj);
};

const data = {
  name: "foo",
  child: null,
};
data.child = data;
const clone = cloneDeepWithLoop(data);
console.log(clone); // <ref *1> { name: 'foo', child: [Circular *1] }
