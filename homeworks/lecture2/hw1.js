/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    for (let property in p) {
        o[property] = p[property];     
    }
    return o
}
// console.log(extend({a: 1, b: 2}, {b: 3, c: 4})); 

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    // implement your code here
    let result = {};
    for (let property in p) {
        result[property] = p[property];
    }
    for (let property in o) {
        result[property] = o[property];
    }
    return result;
}

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // implement your code here
    for (let property in o) {
        if (!(property in p)) {
            delete o[property];
        }
    }
    return o;
}
// let o = {a: 1, b: 2, c: 3};
// let p = {a: 1, d: 4};
// restrict(o, p);
// console.log(o); 

/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    // implement your code here
    let result = {};
    for (let property in o) {
        if (property in p) {
            result[property] = o[property];
        }
    }
    return result;
}