// write a function to deep clone an object with circular reference
//
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj, map = new Map()) => {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  if (map.has(obj)) {
    return map.get(obj)
  }

  const ans = Array.isArray(obj) ? [] : {}

  map.set(obj, ans)

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      ans[key] = cloneDeepWithLoop(obj[key], map)
    }
  }

  return ans
}
