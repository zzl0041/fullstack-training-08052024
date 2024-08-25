/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require('express');
const path = require('path');
const app = express();
const port = 5500;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

app.get(['/', '/home'], (req, res, next) => {
    res.send(htmlString);
});

app.post(['/', '/home'], (req, res, next) => {
    console.log(req.body);
    const queryString = new URLSearchParams(req.body).toString();
    res.redirect(`/home?${queryString}`);
});

app.get('*', (req, res) => {
    res.send('404 Not Found');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));