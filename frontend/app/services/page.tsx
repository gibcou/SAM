'use client';

import { useEffect, useState } from 'react';

interface IService {
  _id: string;
  name: string;
  description: string;
  price: number;
}

export default function ServicesPage() {
  const [services, setServices] = useState<IService[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/services')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  return (
    <div className="min-h-screen">
      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map(service => (
            <div key={service._id} className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">{service.name}</h2>
              <p className="mb-4">{service.description}</p>
              <p className="text-xl font-bold">${service.price}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

