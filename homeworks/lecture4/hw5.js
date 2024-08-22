// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    const seen = new Map()
    function deepCopy(item){
        if(item === null || typeof item != 'object'){
            return item
        }
        if (seen.has(item)){
            return seen.get(item)
        }
        clone = Array.isArray(item)?[]:{}
        
        seen.set(item) = clone

        for (const key in item){
            if(item.hasOwnProperty(key)){
                clone[key] = deepCopy(item[key])
            }
        }
        return clone
    }
    return deepCopy(obj)
}
