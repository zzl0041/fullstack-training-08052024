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
class SingletonES6 {
  static instance = null;
  constructor() {
    if (SingletonES6.instance === null) {
      SingletonES6.instance = this;
    }

    return SingletonES6.instance;
  }
}

// testing SingletonES6
const instance1 = new SingletonES6();
const instance2 = new SingletonES6();
console.log(instance1 === instance2); // Output: true

// ES5
const SingletonES5 = (function () {
  let instance = null;
  return function Singleton() {
    // has been initialized
    if (instance === null) {
      instance = this;
    }
    return instance;
  };
})();

// testing SingletonES5
const instance3 = new SingletonES5();
const instance4 = new SingletonES5();
console.log(instance3 === instance4); // Output: true
