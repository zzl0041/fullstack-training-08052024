/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here

// ES5
let Singleton5 = (function () {
  let instance;
  function create() {
    let obj = new Object("singleton");
    return obj;
  }

  return {
    get: function () {
      if (instance) {
        return instance;
      }
      else {
        instance = create();
        return instance;
      }
    }
  };
})();
var instance1 = Singleton5.get();
var instance2 = Singleton5.get();

console.log(instance1 === instance2);


// ES6
class Singleton {

  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    this.value = "Singleton";
    Singleton.instance = this;
  }
  get() {
    return this.value;
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2);