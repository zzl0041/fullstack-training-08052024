const express = require('express');
const connectDB = require('./db');
const app = express();
const port = 3000;

const itemRouter = require('./router/item');
const Item = require('./models/Item');
connectDB();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/api', itemRouter);

app.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.render('index', { items });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

app.listen(port, () => {
  console.log(`HW1 app is listening at http://localhost:${port}`);
});
