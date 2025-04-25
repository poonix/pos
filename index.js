const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const productRoutes = require('./routes/product');
app.use('/api/products', productRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
