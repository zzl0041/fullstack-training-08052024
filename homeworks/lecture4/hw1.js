// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    const pattern = /<\/?([a-zA-Z]+)>/g;
    let stack = [];
    let tags;

    while ((tags = pattern.exec(html)) !== null) {
        let tag = tags[1];
        let pair = tags[0].startsWith('</');
        if (pair) {
            if (stack.length === 0 || stack.pop() !== tag) {
                return false;
            }
        }
        else {
            stack.push(tag);
        }
    }
    return stack.length === 0;
}

