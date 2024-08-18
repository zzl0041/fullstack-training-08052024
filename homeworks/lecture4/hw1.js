// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
  const stack = [];
  const tagRegex = /<\/?([a-zA-Z]+)[^>]*>?/g; // regex for both opening and closing tags
  let match;
  while ((match = tagRegex.exec(html)) !== null) {
    let tag = match[0];
    let tagName = match[1];
    // closing tag
    if (tag.startsWith("</")) {
      if (stack.length === 0 || stack.pop() !== tagName) {
        return false;
      }
    } else if (!tag.endsWith("/>")) {
      stack.push(tagName);
    }
  }
  return stack.length === 0;
}

console.log(
  checkValidHTML("<html><head><title>My Title</title></head></html>")
); // true
console.log(
  checkValidHTML("<html><head><title>My Title</title></head></head></html>")
); // false
console.log(checkValidHTML("<html><head><title>My Title</title></head></html")); // true
