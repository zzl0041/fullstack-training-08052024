const express = require('express');
const cors = require('cors'); 
const router = require('./routers/todo');

const port = 3000;

const connectDB = require('./db');
connectDB();

const app = express();
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);
app.use('/api', router);

app.listen(port, () => {
    console.log(`Todo app listening at http://localhost:${port}`);
});