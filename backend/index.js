const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb+srv://Gibson:Sm00thF0x!97@sam.yzl2zle.mongodb.net/?appName=SAM')
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
