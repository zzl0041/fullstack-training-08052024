// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    const map = new Map(); 
    const clone = (obj) => {
        if (map.has(obj)) {
            return map.get(obj);
        }
        const copy = Array.isArray(obj) ? [] : {};
        map.set(obj, copy);
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                copy[key] = clone(obj[key]);
            }
        }
        return copy;
    };
    return clone(obj);
}

const data = {
    name: 'foo',
    child: null
};
data.child = data;
const clonedData = cloneDeepWithLoop(data);
console.log(clonedData);