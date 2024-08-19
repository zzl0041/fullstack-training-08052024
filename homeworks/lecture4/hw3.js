/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here

// ES6
class Singleton {
    constructor() {
        if(Singleton.instance) {
            return Singleton.instance;
        }

        Singleton.instance = this;
        return this;
    }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2);

// ES5
function Singleton1(){
    if(Singleton1.instance) {
        return Singleton1.instance;
    }
    Singleton1.instance = this;
    return this;
}

const instance3 = new Singleton1();
const instance4 = new Singleton1();

console.log(instance3 === instance4);