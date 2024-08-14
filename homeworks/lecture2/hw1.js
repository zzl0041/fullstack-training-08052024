/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    // spread operator
    // return { ...o, ...p }; // not work because it will return a new object
    // 1. built-in
    // Object.assign(o, p);
    // 2. for ... in
    // for (let prop in p) { // iterate over all enumerable properties of p
    //     if (p.hasOwnProperty(prop)) { // make sure property belongs to p, not inherit
    //         o[prop] = p[prop]; // copy to o
    //     }
    // }
    // 3. forEach
    Object.keys(p).forEach(function(prop) { // Object.key(): Loop through an object's keys
        o[prop] = p[prop];
    });

    return o;
}

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    return { ...p, ...o }; // 先将对象 p 的所有属性复制到新对象中，然后再将对象 o 的属性复制到这个新对象中。
}

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    for (let prop in o) { // iterate over all enumerable properties of o
        if (!p.hasOwnProperty(prop)) { // if p doesn't have this property
            delete o[prop];
        }
    }
    return o;
}

/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    const res = {};
    for (let prop in o) {
        if (p.hasOwnProperty(prop)) {
            res[prop] = o[prop];
        }
    }
    return res;
}

// FOR TESTING
// Base configuration
const baseConfig = {
    host: 'localhost',
    port: 8080,
    useSSL: false
  };
  
  // New settings to extend the base configuration
  const newSettings = {
    port: 3000, // Change the port
    useSSL: true, // Enable SSL
    timeout: 5000 // Add a new property
  };
  
  // Extend the base configuration with the new settings
  extend(baseConfig, newSettings);
  
  console.log(baseConfig);
  
  union(baseConfig, newSettings);
  
  console.log(baseConfig);
  
  restrict(baseConfig, newSettings);
  
  console.log(baseConfig);
  
  intersection(baseConfig, newSettings);
  
  console.log(baseConfig);