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

    function clone(obj) {
        // base case
        if (typeof obj !== 'object' || obj === null) {
            return obj;
        }
        // check if obj is already been cloned
        // if yes, return the reference to that clone
        if (map.has(obj)) {
            return map.get(obj);
        }

        // instantiate the clone
        const newObj = Array.isArray(obj) ? [] : {};
        // put the clone in the map as value
        // the key is where the clone is from
        map.set(obj, newObj); 

        // clone each property from obj
        for (let key in obj) {
            // making sure the property is not from it's
            // prototype chain
            if (obj.hasOwnProperty(key)) {
                // Recursively clone properties
                newObj[key] = clone(obj[key]); 
            }
        }

        // Return the cloned object
        return newObj;
    }

    return clone(obj);
}
const data = {
    name: 'foo',
    child: null
}
data.child = data;

deepCopy = cloneDeepWithLoop(data)
console.log(deepCopy.child)     //{ name: 'foo', child: [Circular] }

deepCopy.name = 'boo'
console.log(deepCopy.child)     //{ name: 'boo', child: [Circular] }




