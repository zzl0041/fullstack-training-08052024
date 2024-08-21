// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    // Using stack
    const stack = [];
    for(let i = 0; i < html.length; i++) {
        if(html[i] === '<') {
            // Find the end of the tag
            let j = i + 1;
            let isClosingTag = false;

            if (html[j] === '/') {
                isClosingTag = true;
                j++;
            }

            // Get the tag name
            let tagName = '';
            while (html[j] !== '>' && j < html.length) {
                tagName += html[j];
                j++;
            }

            if (isClosingTag) {
                // Check if the top of the stack matches this closing tag
                if (stack.length === 0 || stack.pop() !== tagName) {
                    return false;
                }
            } else {
                // Push the opening tag onto the stack
                stack.push(tagName);
            }

            // Move index to the end of the current tag
            i = j;
        }
    }
    return stack.length === 0;
}

// Examples:
console.log(checkValidHTML('<html><head><title>My Title</title></head></html>')); // true
console.log(checkValidHTML('<html><head><title>My Title</title></head></head></html>')); // false
console.log(checkValidHTML('<html><head><title>My Title</title></head></html')); // true