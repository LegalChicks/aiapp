
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-white bg-gray-500">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/farm/1600/900')" }}
      ></div>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
          Legal Chicks Empowerment Network
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto drop-shadow-md">
          From One Coop to a Community: Turning backyards into a source of dignity, income, and food security.
        </p>
        <a
          href="#about"
          className="bg-brand-yellow text-brand-dark font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-500 transition-all duration-300 shadow-xl transform hover:scale-105"
        >
          Discover Our Mission
        </a>
      </div>
    </section>
  );
};

export default Hero;
