// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;


const data0 = {
    name: 'foo0',
    child: null
}
const data1 = {
    name: 'foo1',
    child: null
}
const data2 = {
    name: 'foo2',
    child: null
}
data0.child = data1;
data1.child = data2;
data1.child = data0;

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    if (typeof obj != "object") return obj;
    let clone = {name: obj.name, child: null};
    let head = clone;
    let ptr = obj.child;
    while (ptr && (ptr.name != obj.name)) {
        clone.child = {name: ptr.name, child: null};
        clone = clone.child;
        ptr = ptr.child;
    }
    // add circular reference
    clone.child = head;
    return head;
}

console.log(data0);
console.log(cloneDeepWithLoop(data0));
