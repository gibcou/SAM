
export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl font-bold mb-4">Shines Autos Meticulously</h1>
        <p className="text-xl mb-8">The best auto detailing and paint protection in Bozeman, MT.</p>
        <div>
          <a href="/services" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">Our Services</a>
          <a href="/booking" className="ml-4 bg-transparent hover:bg-blue-500 text-blue-500 hover:text-white border border-blue-500 font-bold py-3 px-6 rounded-full transition duration-300">Book Now</a>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Make it New... Keep it New.</h2>
          <p className="text-lg">
            At Shines Autos Meticulously, we are dedicated to providing the highest quality of automotive detailing and paint correction services. Our goal is to restore your vehicle to a like-new condition and ensure it stays that way. We use only the best tools and techniques to give your car a showroom shine that will turn heads.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Reconditioning & Detailing</h3>
              <p>Deep cleaning and restoring your car's interior and exterior to like-new condition.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Paint Correction</h3>
              <p>Removing imperfections from your car’s paint, such as swirl marks, scratches, and oxidation.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Paint Protection Film</h3>
              <p>Unparalleled protection for your car's paint against rocks, debris, and other hazards.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

