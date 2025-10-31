
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-brand-dark text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">Connect With Us</h2>
        <p className="text-lg text-gray-300 mt-2">We're excited to hear from you and help you get started.</p>
        <div className="w-24 h-1 bg-brand-yellow mx-auto mt-4"></div>

        <div className="mt-12 max-w-lg mx-auto bg-brand-brown p-8 rounded-lg shadow-2xl">
          <div className="space-y-4 text-left">
            <div>
              <h3 className="font-bold text-brand-yellow">Head Office:</h3>
              <p>Solana, Cagayan Valley</p>
            </div>
            <div>
              <h3 className="font-bold text-brand-yellow">Contact:</h3>
              <p>(+63) 912-345-6789</p>
            </div>
            <div>
              <h3 className="font-bold text-brand-yellow">Email:</h3>
              <p>info@legalchicks.vip</p>
            </div>
            <div>
              <h3 className="font-bold text-brand-yellow">Website:</h3>
              <p>www.legalchicks.vip</p>
            </div>
             <div className="pt-4">
               <a href="#" className="text-brand-yellow hover:underline font-semibold flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
                   Find us on Facebook
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
