// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
  const stack = []
  const tagPattern = /<\/?([a-zA-Z][a-zA-Z0-9]*)\b[^>]*>/g

  if (html[html.length - 1] !== '>') {
    html += '>'
  }

  let match

  while ((match = tagPattern.exec(html)) !== null) {
    const tag = match[1]
    if (match[0][1] === '/') {
      if (stack.length === 0 || stack.pop() !== tag) {
        return false
      }
    } else {
      stack.push(tag)
    }
  }

  return stack.length === 0
}

// console.log(
//   checkValidHTML(
//     `
//       <html>
//         <head>
//           <title>My Title</title>
//         </head>
//       </html>
//       `
//   )
// )
