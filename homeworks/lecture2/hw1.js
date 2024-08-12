const myDog = {
    name: 'Cooper',
    age: 1,
    breed: 'Golden Retriever',
    bark: function () {
      console.log('Woof, woof!');
    }
  };

const myCat = {
    name:'mimi', 
    age: 2,
    breed: "Britsh Shorhair",
    color: "Gold"
}



/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    // implement your code here
    for(let property in p) {
        o[property] = p[property];
    };
    return o;

}

// console.log(extend(myCat, myDog))

// result:
// { name: 'Cooper',
//     age: 1,
//     breed: 'Golden Retriever',
//     color: 'Gold',
//     bark: [Function: bark] }


/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    // implement your code here
    let newObj = {};
    for (let property in o) {
        newObj[property] = o[property];
    }

    for(let property in p) {
        if(o.hasOwnProperty(property)) {
            continue; //do not use break
        } else {
            newObj[property] = p[property];
        };
    };
    return newObj;
}

// console.log(union(myCat, myDog))

// result
// { name: 'mimi',
//     age: 2,
//     breed: 'Britsh Shorhair',
//     color: 'Gold',
//     bark: [Function: bark] }

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // implement your code here
    for(let property in o) {
        if(!(p.hasOwnProperty(property))) {
            delete o[property]
        };
    };
    return o;
}

// console.log(restrict(myDog, myCat))

// result
// { name: 'Cooper', age: 1, breed: 'Golden Retriever' }

/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    // implement your code here
    let newObj = {};
    for(let property in o) {
        if(p.hasOwnProperty(property)) {
            newObj[property] = o[property];
        };
    };
    return newObj;
}

//console.log(intersection(myCat, myDog));

// result
// { name: 'mimi', age: 2, breed: 'Britsh Shorhair' }