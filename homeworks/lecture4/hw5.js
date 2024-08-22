// write a function to deep clone an object with circular reference
// 
const data = {
    name: 'foo',
    child: null
}
data.child = data;

const cloneDeepWithLoop = (obj, pass = new Map()) => {
    // Implement the function here
    if (obj === null || typeof obj != 'object') {
        return obj;
    }

    if (pass.has(obj)) {
        return pass.get(obj);
    }

    const clone = Array.isArray(obj) ? [] : {};

    pass.set(obj, clone);

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = cloneDeepWithLoop(obj[key], pass);
        }
    }

    return clone;
}

const data1 = cloneDeepWithLoop(data);
console.log(data1);
console.log(data1.child === data1);