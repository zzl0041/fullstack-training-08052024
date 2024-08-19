// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html> - true

function checkValidHTML(html) {
    // implement your solution here
    // '/<' match for '<'
    // '\/?' match for 0 or 1 '/'
    // '([[a-zA-Z][a-zA-Z0-9]*])' match for any string that
    // starts with a letter and follow by 0 or more letter and 
    // number digits like 'div', 'h1', 'p'
    // '\s*' match for 0 or more white spaces
    // '[^>]*' match for any character except the '>' to 
    // capture prameters inside the HTML tage like class="container" id="main"
    // '>' match for '>'
    // 'g' perform global search

    const tagPattern = /<\/?([a-zA-Z][a-zA-Z0-9]*)\s*[^>]*>/g;
    const stack = [];
    let match;

    // go through the html and match the regex pattern for tags
    while ((match = tagPattern.exec(html)) !== null) {
        const tag = match[1];

        // check open or close tag
        if (match[0][1] !== '/') {
            // push the opening tag to the stack
            stack.push(tag);
        } else {
            // check the stack for closing tags
            if (stack.length === 0 || stack.pop() !== tag) {
                return false;
            }
        }
    }

    // return true if all the tag are matched
    return stack.length === 0;
}

console.log(checkValidHTML('<html><head><title>My Title</title></head></html>'));           //true
console.log(checkValidHTML('<html><head><title>My Title</title></head></head></html>'));    //false
console.log(checkValidHTML('<html><head><title>My Title</title></head></html>'));           //true