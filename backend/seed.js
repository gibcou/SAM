const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number
});

const Service = mongoose.model('Service', ServiceSchema);

const services = [
  {
    name: 'Reconditioning & Detailing',
    description: 'Deep cleaning and restoring your car\'s interior and exterior to like-new condition.',
    price: 250
  },
  {
    name: 'Paint Correction',
    description: 'Removing imperfections from your car\'s paint, such as swirl marks, scratches, and oxidation.',
    price: 400
  },
  {
    name: 'Paint Protection Film',
    description: 'Unparalleled protection for your car\'s paint against rocks, debris, and other hazards.',
    price: 800
  },
  {
    name: 'Ceramic Coatings',
    description: 'Provide your vehicle with a long-lasting, durable layer of protection.',
    price: 600
  }
];

mongoose.connect('mongodb://localhost:27017/shines-autos')
  .then(() => {
    console.log('MongoDB connected...');
    return Service.insertMany(services);
  })
  .then(() => {
    console.log('Data seeded');
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
    mongoose.connection.close();
  });
