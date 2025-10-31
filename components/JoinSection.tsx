
import React from 'react';

const CheckIcon = () => (
    <svg className="w-6 h-6 text-brand-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const JoinSection: React.FC = () => {
    return (
        <section id="join" className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
                 <h2 className="text-4xl font-bold text-brand-dark">Join Our Growing Community</h2>
                <p className="text-lg text-gray-600 mt-2">Start your journey towards a sustainable livelihood with us.</p>
                <div className="w-24 h-1 bg-brand-yellow mx-auto mt-4"></div>

                <div className="max-w-4xl mx-auto mt-12 text-left grid md:grid-cols-2 gap-8">
                    <div className="bg-brand-light p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-brand-brown mb-6">What We Provide</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start"><CheckIcon /> <span>Training & Mentorship on all aspects of poultry farming.</span></li>
                            <li className="flex items-start"><CheckIcon /> <span>Affordable Starter Opportunity Packages with chicks and feeds.</span></li>
                            <li className="flex items-start"><CheckIcon /> <span>Access to discounted, high-quality supplies and vaccines.</span></li>
                            <li className="flex items-start"><CheckIcon /> <span>Brand partnership and access to established markets.</span></li>
                            <li className="flex items-start"><CheckIcon /> <span>A supportive community network and shared growth.</span></li>
                        </ul>
                    </div>
                     <div className="flex flex-col items-center justify-center">
                        <img src="https://picsum.photos/seed/community/400/300" alt="Community Farming" className="rounded-lg shadow-xl mb-8" />
                        <p className="text-xl text-gray-800 italic mb-6">"You will not start alone. You will not grow alone. You will never stand alone."</p>
                        <a href="#contact" className="bg-brand-green text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-all duration-300 shadow-lg transform hover:scale-105">
                            Become a Partner Today
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinSection;
