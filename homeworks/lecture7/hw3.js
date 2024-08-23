/**
 * For sample code web-server.js, make the following changes:
 * Once submitting in home.html, stay on the same page and display the submitted data.
 * 
 * Hint:
 * 1. put the data of the submitted form in the query string of the url
 * 2. before res.end() in POST method, redirect to the home.html page with the query string
 *  - i.e. res.statusCode = 302; res.setHeader('Location', '/home.html?name=John&age=20');
 * 3. you need to figure out how to parse the query string in the home.html page
 * 4. after writing the html content, you need to write the query string in the html as well
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

htmlString = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>home</title>
    </head>
    <body>  
        <form id="personal_info" method="post">
        name: <input type="text" name="name"><br>
        age: <input type="text" name="age">
        <input type="submit" value="submit">
        </form>

        <script>
            (function prefill_form(){
                const urlParams = new URLSearchParams(window.location.search);
                const name = urlParams.get('name');
                const age = urlParams.get('age');
                document.getElementById("personal_info").elements.name.value = name;
                document.getElementById("personal_info").elements.age.value = age;
            })();
        </script>
    </body>
</html>
`

const server = http.createServer((request, response) => {
  const { url, method } = request;
  if (method === 'GET') {
    if (url === '/' || url.startsWith('/home')) {
        response.end(htmlString);
    } 
    else {
        response.end('404 Not Found');
    }
  } 
  else if (method === 'POST') {
    if (url === '/' || url.startsWith('/home')) {
      let body = [];
      request.on('data', chunk => {
        body.push(chunk);
      });
      request.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        response.statusCode = 302; 
        response.setHeader('Location', '/home?' + parsedBody);
        response.end(htmlString);
      });
    } 
    else {
      response.end('404 Not Found');
    }
  } 
  else {
    response.end('Unsupported method');
  }
});

server.listen(5500, () => {
  console.log('Server is running on port 5500');
});
