
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-dark">About Us</h2>
          <p className="text-lg text-gray-600 mt-2">A Livelihood and Agribusiness Movement</p>
          <div className="w-24 h-1 bg-brand-yellow mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-brand-light p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-brand-brown mb-4">Who We Are</h3>
            <p className="text-gray-700">
              LCEN is a movement born in Cagayan Valley dedicated to empowering farmers, homemakers, and youth through sustainable poultry farming. We bridge the gap between agripreneurship and community empowerment.
            </p>
          </div>
          <div className="bg-brand-light p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-brand-brown mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To equip and empower Cagayan families with the knowledge, tools, and support to start and sustain profitable poultry businesses, creating livelihoods that last and communities that grow.
            </p>
          </div>
          <div className="bg-brand-light p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-brand-brown mb-4">Our Vision</h3>
            <p className="text-gray-700">
              A Cagayan where every farmer can earn and live well from the land they work on — connected through one network of shared knowledge, trust, and opportunity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
