import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface HeaderProps {
  isLoggedIn: boolean;
  onLoginClick: () => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLoginClick, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const publicLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Network', href: '#network-info' },
    { name: 'Our Model', href: '#model' },
    { name: 'AI Assistant', href: '#ai-assistant' },
    { name: 'Contact', href: '#contact' },
  ];

  const memberLinks = [
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Profile', href: '#profile' },
    { name: 'Training', href: '#training' },
    { name: 'Supplies', href: '#supplies' },
    { name: 'Announcements', href: '#announcements' },
  ];
  
  const navLinks = isLoggedIn ? memberLinks : publicLinks;
  
  const handleScroll = () => {
    let currentSection = navLinks[0].href;
    for (let i = navLinks.length - 1; i >= 0; i--) {
      const link = navLinks[i];
      const sectionId = link.href.substring(1);
      const section = document.getElementById(sectionId) as HTMLElement;
      if (section && window.scrollY >= section.offsetTop - 150) {
        currentSection = link.href;
        break;
      }
    }
    setActiveLink(currentSection);
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoggedIn, navLinks]);

  return (
    <header id={isLoggedIn ? 'dashboard' : 'home'} className="bg-brand-light/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`
                text-brand-dark hover:text-brand-green transition-all duration-300 font-medium pb-1
                ${activeLink === link.href
                  ? 'text-brand-green border-b-2 border-brand-green'
                  : 'border-b-2 border-transparent'}
              `}
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="hidden md:flex">
          {isLoggedIn ? (
             <button
              onClick={onLogout}
              className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition-all duration-300 shadow"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={onLoginClick}
              className="bg-brand-yellow text-brand-dark font-bold py-2 px-4 rounded-lg hover:bg-yellow-500 transition-all duration-300 shadow"
            >
              Member Login
            </button>
          )}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-brand-light shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-brand-dark hover:text-brand-green transition-colors duration-300 font-medium ${
                  activeLink === link.href ? 'text-brand-green font-bold' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
             {isLoggedIn ? (
             <button
              onClick={() => {
                onLogout();
                setIsMenuOpen(false);
              }}
              className="bg-red-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-600 transition-all duration-300 shadow"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                onLoginClick();
                setIsMenuOpen(false);
              }}
              className="bg-brand-yellow text-brand-dark font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 transition-all duration-300 shadow"
            >
              Member Login
            </button>
          )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;