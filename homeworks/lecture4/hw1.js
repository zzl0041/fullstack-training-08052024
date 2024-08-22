// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    const s = [];
    const pattern = /<\/?([a-zA-Z]+)>/g;
    let part;
    while((part = pattern.exec(html))!=null){
        const tag = part[0];
        const name = part[1];
        if(tag.startsWith('</'))
            if(s.length == 0 || s.pop() != name)
                return false
        else s.push(name);
    }
    return s.length == 0;
}
console.log(checkValidHTML('<html><head><title>My Title</title></head></head></html>'));
