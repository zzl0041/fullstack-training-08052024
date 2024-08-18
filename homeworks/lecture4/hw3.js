/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 *
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here
function SingletonES5() {
  if (SingletonES5.instance) {
    return SingletonES5.instance;
  }
  SingletonES5.instance = this;
}
const instance1 = new SingletonES5();
const instance2 = new SingletonES5();
console.log(instance1 === instance2); // Output: true

class SingletonES6 {
  constructor() {
    if (SingletonES6.instance) {
      return SingletonES6.instance;
    }
    SingletonES6.instance = this;
  }
}
const instance3 = new SingletonES6();
const instance4 = new SingletonES6();
console.log(instance3 === instance4); // Output: true
