// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
  let stack = [];
  let i = 0;

  while (i < html.length) {
    if (html[i] === "<") {
      // Detect the start of a tag
      let isClosingTag = html[i + 1] === "/";
      let tagStart = isClosingTag ? i + 2 : i + 1;
      let tagEnd = html.indexOf(">", tagStart);

      if (tagEnd === -1) {
        return false;
      }

      let tagName = html.slice(tagStart, tagEnd).trim();

      if (!isClosingTag) {
        stack.push(tagName);
      } else {
        if (stack.length === 0 || stack.pop() !== tagName) {
          return false;
        }
      }
      i = tagEnd + 1;
    } else {
      i++;
    }
  }
  return stack.length === 0;
}

console.log(
  checkValidHTML("<html><head><title>My Title</title></head></html>")
);
console.log(
  checkValidHTML("<html><head><title>My Title</title></head></head></html>")
); // false
console.log(
  checkValidHTML("<html><head><title>My Title</title></head></html>")
); // true
