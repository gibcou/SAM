const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

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

// Booking Schema
const BookingSchema = new mongoose.Schema({
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
  date: Date,
  name: String,
  email: String
});

const Booking = mongoose.model('Booking', BookingSchema);

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

// API endpoint to create a new booking
app.post('/api/bookings', async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

