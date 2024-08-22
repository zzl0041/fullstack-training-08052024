/**
 * implement debounce function
 * explain: `func` will be called after `delay` ms. if `func` is called again before `delay` ms, the timer will be reset
 * @example
 * // after 1s, print 'hello'
 * // However, if `printHello` is called again before 1s, the timer will be reset
 * const printHello = () => console.log('hello')
 * const debouncedFn = debounce(printHello, 1000)
 * debouncedFn()
 * debouncedFn() // timer reset to 1s
 * 
 * @param {function} func
 * @param {number} delay
 * @returns {function}
 */
function debounce(func, delay) {
  // your code here
  let id;

  return function(...args) {
    if(id) {
      clearTimeout(id);
      console.log('function debounced!')
    }

    id = setTimeout(() => {
      func.apply(this, args);
    }, delay)
  };
}
const printHello = () => console.log('hello from debounced')
const debouncedFn = debounce(printHello, 1000)
debouncedFn()
debouncedFn()
debouncedFn()
debouncedFn()

/**
 * implement throttle function
 * explain: `func` will be called every `delay` ms. if `func` is called again before `delay` ms, the call will be ignored
 * @example
 * // after 1s, print 'hello'
 * // However, if `printHello` is called again before 1s, the call will be ignored
 * const printHello = () => console.log('hello')
 * const throttledFn = throttle(printHello, 1000)
 * throttledFn()
 * throttledFn() // ignored                                                                                                                                                                           12q
 * 
 * @param {function} func
 * @param {number} delay
 * @returns {function}
 */

function throttle(func, delay) {
  // your code here
  let id;

  return function(...args) {
    if(!id) {
      func.apply(this, args);
      id = setTimeout(() => {
        id = null;
      }, delay);
    } else {
      console.log('function called in throttle!')
    }
  }
}

const printHello1 = () => console.log('hello from throttle')
const throttledFn = throttle(printHello1, 1000)
throttledFn()
throttledFn() // ignored  
throttledFn() // ignored  
throttledFn() // ignored  