'use client';

import { useEffect, useState } from 'react';

interface IService {
  _id: string;
  name: string;
  description: string;
  price: number;
}

export default function BookingPage() {
  const [services, setServices] = useState<IService[]>([]);
  const [selectedService, setSelectedService] = useState('');
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/services')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    const response = await fetch('http://localhost:3001/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ service: selectedService, date, name, email })
    });

    if (response.ok) {
      setMessage('Your booking has been submitted successfully!');
      setSelectedService('');
      setDate('');
      setName('');
      setEmail('');
    } else {
      setMessage('There was an error submitting your booking. Please try again.');
    }
  };

  return (
    <div className="min-h-screen">
      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-12">Book Your Appointment</h1>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg">
          {message && <p className="text-center mb-4">{message}</p>}
          <div className="mb-4">
            <label htmlFor="service" className="block text-lg font-medium mb-2">Select a Service</label>
            <select
              id="service"
              value={selectedService}
              onChange={e => setSelectedService(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
              required
            >
              <option value="" disabled>Select a service</option>
              {services.map(service => (
                <option key={service._id} value={service._id}>{service.name}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-lg font-medium mb-2">Select a Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-medium mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 border border-gray-600"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded transition duration-300">
            Book Now
          </button>
        </form>
      </main>
    </div>
  );
}


