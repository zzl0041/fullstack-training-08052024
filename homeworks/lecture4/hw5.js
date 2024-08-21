// write a function to deep clone an object with circular reference
//
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
  // Implement the function here
  const map = new Map();

  const cloneHelper = (item) => {
    if (typeof item != "object" || item === null) {
      return item;
    }

    if (map.has(item)) {
      return map.get(item);
    }

    const result = Array.isArray(item) ? [] : {};

    map.set(item, result);

    for (let key in item) {
      if (item.hasOwnProperty(key)) {
        result[key] = cloneHelper(item[key]);
      }
    }

    return result;
  };

  return cloneHelper(obj);
};

// const data = {
//   name: "foo",
//   child: null,
// };
// data.child = data;

// const clonedData = cloneDeepWithLoop(data);
// console.log(clonedData);
// console.log(clonedData.child === clonedData);
