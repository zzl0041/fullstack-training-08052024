// testing objects
const myDog = {
  name: "Cooper",
  age: 1,
  breed: "Golden Retriever",
  bark: function () {
    console.log("Woof, woof!");
  },
};

const myCat = {
  name: "Boba",
  personality: "friendly",
};

/*
 * Copy the enumerable properties of p to o, and return o.
 * If o and p have a property by the same name, o's property is overwritten.
 * This function does not handle getters and setters or copy attributes.
 */
// solution #1
function extend(o, p) {
  // implement your code here
  for (let property in p) {
    o[property] = p[property];
  }
  return o;
}
// solution #2
function extend(o, p) {
  // Object.assign method returns the modified target object
  return Object.assign(p, o);
}

// testing extend
// console.log(extend(myCat, myDog));

/*
 * Return a new object that holds the properties of both o and p.
 * If o and p have properties by the same name, the values from o are used.
 */
function union(o, p) {
  // implement your code here
  const newObj = {};
  for (let property in o) {
    newObj[property] = o[property];
  }
  for (let property in p) {
    // already obtained property from o
    if (newObj.hasOwnProperty(property)) continue;
    newObj[property] = p[property];
  }
  return newObj;
}

// testing extend
// console.log(extend(myCat, myDog));

/*
 * Remove properties from o if there is not a property with the same name in p.
 * Return o.
 */
function restrict(o, p) {
  // implement your code here
  for (let property in o) {
    if (!p.hasOwnProperty(property)) {
      delete o[property];
    }
  }
  return o;
}

// testing restrict
// console.log(restrict(myCat, myDog));

/*
 * Return a new object that holds only the properties of o that also appear
 * in p. This is something like the intersection of o and p, but the values of
 * the properties in p are discarded
 */
function intersection(o, p) {
  // implement your code here
  const newObj = {};
  for (const property in o) {
    if (p.hasOwnProperty(property)) {
      newObj[property] = o[property];
    }
  }
  return newObj;
}

// testing intersection
// console.log(intersection(myCat, myDog));
