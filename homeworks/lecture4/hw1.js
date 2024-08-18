// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html> - true

const get_tags = (html) => {
    let stack = [];
    for (let char of html) {
        if (char == '<') {
            // check top of stack is a valid tag
            if (stack.length && (stack[stack.length-1].slice(-1) != '>')) {
                return false;
            }
            stack.push(char);
        }
        else if (char == '>') {
            // check top of stack is a valid tag
            if (!stack.length) {
                return false;
            }
            // check inside a tag and not an empty tag
            else if (stack[stack.length-1].slice(-1) == '<' || stack[stack.length-1].slice(-1) == '>') {
                return false;
            }
            stack[stack.length-1] += char;
        }
        // normal chars
        else {
            // check begining with `<`
            if (!stack.length) {
                return false;
            }
            // check top of stack has `<` begining
            if (stack[stack.length-1].slice(0,1) != '<') {
                return false;
            }
            // skip innertext
            if (stack[stack.length-1].slice(-1) == '>') {
                continue;
            }
            stack[stack.length-1] += char;
        }
    }
    return stack;
}

function checkValidHTML(html) {
    // implement your solution here
    let stack = [];
    for (let char of html) {
        if (char == '<') {
            // check top of stack is a valid tag
            if (stack.length && (stack[stack.length-1].slice(-1) != '>')) {
                return false;
            }
            stack.push(char);
        }
        else if (char == '>') {
            // check top of stack is a valid tag
            if (!stack.length) {
                return false;
            }
            // check inside a tag and not an empty tag
            else if (stack[stack.length-1].slice(-1) == '<' || stack[stack.length-1].slice(-1) == '>') {
                return false;
            }
            stack[stack.length-1] += char;
            // check close tag
            if (stack[stack.length-1].slice(1,2) == '\/') {
                if (stack.length <= 1) {
                    return false;
                }
                // open tag can has attributes, close tag doesn't
                if (stack[stack.length-2].split(/[\s<>]+/).filter(Boolean)[0] != 
                        stack[stack.length-1].split(/[\/<>]+/).filter(Boolean)[0]) {
                    return false;
                }
                // match, remove them
                stack.pop();
                stack.pop();
            }
        }
        // normal chars
        else {
            // check begining with `<`
            if (!stack.length) {
                return false;
            }
            // check top of stack has `<` begining
            if (stack[stack.length-1].slice(0,1) != '<') {
                return false;
            }
            // skip innertext
            if (stack[stack.length-1].slice(-1) == '>') {
                continue;
            }
            stack[stack.length-1] += char;
        }
    }
    return stack.length ? false : true;
}

console.log(checkValidHTML(`<html><head><title>My Title</title></head><body>
    <h1>this is a header</h1>
    <p class='sentence'>this is a sentence</p>
</body></html>`));

console.log(checkValidHTML(`<html><head><title>My Title</title></head></head></html>`));


console.log(get_tags(`<html><head><title>My Title</title></head></head></html>`));
