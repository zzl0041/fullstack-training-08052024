/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    // implement your code here
    for (prop in p){
        if (!o.hasOwnProperty(prop)){
            o.prop = p.prop
        }   
    }
    return o
}

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    // implement your code here
    const a = new object()
    for (prop in o){
        a[prop] = o[prop]
    }
    for (prop in p){
        if (!a.hasOwnProperty(prop)){
            a[prop] = p[prop]
        } 
    }
    return a
}

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // implement your code here
    for (prop in o){
        if (!p.hasOwnProperty){
            o.removeProp(prop)
        }
    }
    return o   
}

/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    // implement your code here
    const a = new object()
    for(prop in o){
        if (p.hasOwnProperty(prop)){
            a[prop] = o[prop]
            p[prop] = null
        }
    }
    return a
}