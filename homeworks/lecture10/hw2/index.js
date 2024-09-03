const express = require('express');
const router = require('./routers/todo');

const port = 3000;

const connectDB = require('./db');
connectDB();

const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/', router);
app.use('/api', router);

app.listen(port, () => {
    console.log(`Todo app listening at http://localhost:${port}`);
});