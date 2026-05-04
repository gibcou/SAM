export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Reconditioning & Detailing</h2>
            <p className="mb-4">
              Our detailing process is a comprehensive and thorough cleaning and restoration of your vehicle. We go beyond a simple wash and wax to bring your car to a like-new condition.
            </p>
            <ul className="list-disc list-inside">
              <li>Deep Interior Cleaning</li>
              <li>Steam Cleaning</li>
              <li>Upholstery & Carpet Shampooing</li>
              <li>Exterior Hand Wash & Dry</li>
              <li>Clay Bar Treatment</li>
              <li>High-Quality Wax & Sealants</li>
            </ul>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Paint Correction</h2>
            <p className="mb-4">
              We restore your vehicle's paint to its original, near-flawless condition by removing imperfections such as swirl marks, scratches, and oxidation. This not only improves appearance but also protects the paint.
            </p>
             <ul className="list-disc list-inside">
              <li>Multi-Stage Paint Correction</li>
              <li>Scratch & Swirl Removal</li>
              <li>Oxidation Removal</li>
              <li>Headlight Restoration</li>
              <li>Engine Bay Detailing</li>
            </ul>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Paint Protection Film (PPF)</h2>
            <p className="mb-4">
              Protect your vehicle's paint from rock chips, scratches, insect acids, and other road debris with a high-quality, self-healing, transparent urethane film.
            </p>
            <ul className="list-disc list-inside">
              <li>Full Front End Protection</li>
              <li>Full Car Wraps</li>
              <li>High-Impact Area Coverage</li>
              <li>Self-Healing Film</li>
              <li>10-Year Warranty</li>
            </ul>
          </div>
           <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Ceramic Coatings</h2>
            <p className="mb-4">
             Provide your vehicle with a long-lasting, durable layer of protection. Ceramic coatings create a hard, hydrophobic surface that protects against environmental contaminants, UV rays, and chemical stains.
            </p>
            <ul className="list-disc list-inside">
              <li>Professional Grade Ceramic Pro</li>
              <li>Enhanced Gloss and Shine</li>
              <li>Hydrophobic Properties</li>
              <li>Protection from UV damage & oxidation</li>
              <li>Easier cleaning and maintenance</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
