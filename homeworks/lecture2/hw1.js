/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    // implement your code here

    // 1. built-in
    // return Object.assign(o, p);

    // 2. for in
    // for (let prop in p) {
    //     if (p.hasOwnProperty(prop)) {
    //         o[prop] = p[prop];
    //     }
    // }

    // 3. forEach, this avoid hasOwnProperty check
    Object.keys(p).forEach(prop => o[prop] = p[prop]);
    return o;
}

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    // implement your code here
    return {...p, ...o};
}

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // implement your code here
    Object.keys(o).forEach(prop => (!p.hasOwnProperty(prop)) && (delete o[prop]));
    return o;
}

/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    // implement your code here
    let new_o = {...o};
    Object.keys(p).forEach(prop => new_o.hasOwnProperty(prop) ? delete new_o[prop] : new_o[prop] = p[prop]);
    return new_o;
}

