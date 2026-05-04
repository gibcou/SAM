const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3001;

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/shines-autos')
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Service Schema
const ServiceSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number
});

const Service = mongoose.model('Service', ServiceSchema);

app.get('/', (req, res) => {
  res.send('Hello from the Shines Autos Meticulously backend!');
});

// API endpoint to get all services
app.get('/api/services', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
