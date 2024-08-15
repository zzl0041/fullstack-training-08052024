// write a function to deep clone an object with circular reference

const data = {
  name: "foo",
  child: null,
};
data.child = data;

const data1 = {
  name: "foo",
  child: {
    childName: "child",
    grandchild: null,
  },
};

data1.child.grandchild = data1;

// recursion method
const cloneDeepWithLoop = (obj) => {
  const record = new Map();
  const deepClone = (data) => {
    // if obj is null or primitive data types
    if (data === null || typeof data !== "object") {
      return data;
    }

    // if obj has been cloned
    if (record.has(data)) return record.get(data);

    // create a new array / object
    const copy = Array.isArray(data) ? [] : {};

    // record the new array / object
    record.set(data, copy);

    // copy individual property to the new array / object
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        copy[key] = deepClone(data[key]);
      }
    }
    // return the new array / object
    return copy;
  };

  return deepClone(obj);
};

console.log(data);
console.log(cloneDeepWithLoop(data));

console.log(data1);
console.log(cloneDeepWithLoop(data1));
