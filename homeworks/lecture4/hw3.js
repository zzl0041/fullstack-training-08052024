/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here
// ES5 NO class syntax
var Singleton = (function() {
  var instance;

  function Singleton() {
    if(instance) {
      return instance;
    }
    instance = this;
    this.data = 'Singleton instance';
  }
  return Singleton;
})();


// ES6
class Singleton {
  constructor() {
    // The instance exists
    if(Singleton.instance) {
      return Singleton.instance;
    }
    // not exist
    Singleton.instance = this;
    this.data = 'Singleton instance(es6)';
  }
}

const instance1 = new Singleton();
console.log(instance1)
const instance2 = new Singleton();
console.log(instance2)
console.log(instance1 === instance2); 