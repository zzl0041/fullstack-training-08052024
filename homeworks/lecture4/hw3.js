/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here
// const Singleton = (function() {
//     let instance;

//     function insideSingleton() {
//         if (instance) {
//             return instance;
//         }

//         // Initialize instance properties and methods here
//         this.property = {'a': 'inside property'};
//         instance = this;
//     }

//     insideSingleton.prototype.inside_method = function() {
//         console.log('inside method');
//     };

//     return insideSingleton;
// })();

// const instance1 = new Singleton();
// const instance2 = new Singleton();
// console.log(instance1 === instance2); // Output: true
// console.log(instance1);
// instance1.inside_method(); 


class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        this.property = {'a': 'inside property'};
        Singleton.instance = this;
    }

    method() {
        console.log(Singleton);
    }
}

const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2); // Output: true
instance1.method(); // This is a method in the singleton instance.
