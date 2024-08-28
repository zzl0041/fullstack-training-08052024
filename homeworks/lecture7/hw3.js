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
const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
const PORT = 3000;

const server = http.createServer((req, res) => {
  const { url: reqUrl, method } = req;
  const parsedUrl = url.parse(reqUrl, true);
  // console.log(parsedUrl);
  const {
    pathname,
    query: { title, content },
  } = parsedUrl;

  // console.log(title), console.log(content);

  if (method === "GET") {
    if (pathname === "/") {
      res.end("this is the home page");
    } else if (pathname === "/about") {
      res.end("this is the about page");
    } else if (pathname === "/home.html") {
      fs.readFile(path.join(__dirname, "home.html"), "utf8", (err, html) => {
        if (err) {
          res.end("error");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          let updatedHtml = html;
          if (title && content) {
            updatedHtml = html.replace(
              " <p>Title: {{title}} Content: {{content}}</p>",
              `<p>Title: ${title} Content: ${content}</p>`
            );
          } else {
            updatedHtml = html.replace(
              " <p>Title: {{title}} Content: {{content}}</p>",
              ""
            );
          }
          res.write(updatedHtml);
          res.end();
        }
      });
    } else {
      res.end("this is the 404 page");
    }
  } else if (method === "POST") {
    if (reqUrl === "/create-post") {
      let body = [];
      req.on("data", (chunk) => {
        body.push(chunk);
      });
      req.on("end", () => {
        const parsedBody = Buffer.concat(body).toString();
        // console.log(parsedBody);
        res.statusCode = 302;
        res.setHeader("Location", `/home.html?${parsedBody}`);
        res.end();
      });
    } else {
      res.end("this is the 404 page");
    }
  } else {
    res.end("Unsupported method");
  }
});

server.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
