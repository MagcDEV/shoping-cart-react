const express = require('express');
const bodyParser = require('express');
const mongoose = require('mongoose');
const shortid = require('shortid');

const app = express();
app.use(bodyParser);

mongoose.connect('mongodb://localhost/react-shopping-cart-db', {
  usenewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const Product = mongoose.model(
  'products',
  new mongoose.Schema({
    _id: { type: shortid.generate },
    title: String,
    description: String,
    image: String,
    price: Number,
    available: [String],
  })
);

app.get('/api/products', async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});
