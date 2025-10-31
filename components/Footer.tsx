
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-brown text-brand-light py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center mb-4">
          <Logo />
        </div>
        <p>&copy; {new Date().getFullYear()} Legal Chicks Empowerment Network. All Rights Reserved.</p>
        <p className="text-sm text-gray-400 mt-2">Empowering Cagayanos, one flock at a time.</p>
      </div>
    </footer>
  );
};

export default Footer;
