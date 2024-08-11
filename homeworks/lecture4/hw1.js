// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true ???? Question: why there is not closing '>'? Why this statement is valid

function checkValidHTML(html) {
  // implement your solution here
  const regex = /<\/?([a-zA-Z]+)>/g;
  const matchesStack = html.match(regex);
  // console.log(matchesStack);
  let left = 0;
  let right = matchesStack.length - 1;
  while (left < right) {
    const curFirstTag = matchesStack[left];
    const curLastTag = matchesStack[right];
    // if curFirstTag is not an opening tag or curLastTag is not a closing tag, return false
    if (curFirstTag[1] === "/" || curLastTag[1] !== "/") return false;
    // if curFirstTag and curLastTag is not the same tag, return false
    if (curFirstTag.slice(1, -1) !== curLastTag.slice(2, -1)) return false;
    left++;
    right--;
  }
  // two pointers stop when point to the same tag in the stack or cross
  // if right < left means no tags remains in the stack
  // if right === left means one tag remains in the stack
  return right < left ? true : false;
}

// testing
console.log(
  checkValidHTML("<html><head><title>My Title</title></head></html>")
);

console.log(
  checkValidHTML("<html><head><title>My Title</title></head></head></html>")
);
