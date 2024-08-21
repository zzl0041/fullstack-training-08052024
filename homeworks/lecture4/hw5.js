// write a function to deep clone an object with circular reference
// 
const data = {
    name: 'foo',
    child: null
}
data.child = data; // circular reference, cannot use JSON.parse and JSON.stringify

const cloneDeepWithLoop = (obj, map = new WeakMap()) => {
    // Implement the function here
    if(obj === null || typeof obj !== 'object') {
        return obj;
    }
    if(map.has(obj)) {
        return map.get(obj);
    }
    const objCopy = {};
    map.set(obj, objCopy);

    Object.keys(obj).forEach(key => {
        objCopy[key] = cloneDeepWithLoop(obj[key], map);
    });
    return objCopy;
}

const copy = cloneDeepWithLoop(data);
console.log(data.name);
console.log(copy.name);
console.log(copy.child === copy);