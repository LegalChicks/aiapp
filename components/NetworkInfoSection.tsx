import React, { useState } from 'react';

type Tab = 'mission' | 'services' | 'stories';

const MissionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>;
const ServicesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const StoriesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>;
const CheckIcon = () => <svg className="w-6 h-6 text-brand-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>;

const testimonials = [
    {
        quote: "Joining LCEN was the best decision for my family. The training was practical, and the community support is incredible. My small backyard farm is now a stable source of income.",
        name: "Elena Reyes",
        cluster: "Solana Cluster",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
    },
    {
        quote: "As a new farmer, I was afraid of the risks. LCEN's mentorship program guided me every step of the way. Now, I'm a certified grower and proud to be part of this network.",
        name: "Ricardo 'Ric' Gomez",
        cluster: "Tuguegarao Cluster",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e"
    },
];

const TabButton: React.FC<{ active: boolean; onClick: () => void; children: React.ReactNode }> = ({ active, onClick, children }) => (
    <button
        onClick={onClick}
        className={`flex items-center justify-center px-4 py-3 font-semibold text-sm rounded-t-lg transition-all duration-300 w-1/3 md:w-auto
            ${active
                ? 'bg-white text-brand-brown border-b-4 border-brand-yellow'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
    >
        {children}
    </button>
);

const NetworkInfoSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('mission');

    return (
        <section id="network-info" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-brand-dark">Why Join the Legal Chicks Network?</h2>
                    <p className="text-lg text-gray-600 mt-2">Discover a community dedicated to your growth and success.</p>
                    <div className="w-24 h-1 bg-brand-yellow mx-auto mt-4"></div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="flex border-b border-gray-200">
                        <TabButton active={activeTab === 'mission'} onClick={() => setActiveTab('mission')}><MissionIcon /> <span className="hidden md:inline">Our Mission</span></TabButton>
                        <TabButton active={activeTab === 'services'} onClick={() => setActiveTab('services')}><ServicesIcon /> <span className="hidden md:inline">Member Services</span></TabButton>
                        <TabButton active={activeTab === 'stories'} onClick={() => setActiveTab('stories')}><StoriesIcon /> <span className="hidden md:inline">Success Stories</span></TabButton>
                    </div>

                    <div className="bg-white p-8 rounded-b-lg shadow-lg min-h-[400px]">
                        {activeTab === 'mission' && (
                            <div className="animate-fade-in">
                                <h3 className="text-2xl font-semibold text-brand-brown mb-4">A Livelihood and Agribusiness Movement</h3>
                                <p className="text-gray-700 mb-4">
                                    LCEN is a movement born in Cagayan Valley dedicated to empowering farmers, homemakers, and youth through sustainable poultry farming. We bridge the gap between agripreneurship and community empowerment.
                                </p>
                                <div className="grid md:grid-cols-2 gap-4 mt-6">
                                    <div>
                                        <h4 className="font-bold text-brand-dark">Our Mission</h4>
                                        <p className="text-gray-600">To equip and empower Cagayan families with the knowledge, tools, and support to start and sustain profitable poultry businesses.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-dark">Our Vision</h4>
                                        <p className="text-gray-600">A Cagayan where every farmer can earn and live well — connected through one network of shared knowledge, trust, and opportunity.</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'services' && (
                             <div className="animate-fade-in">
                                <h3 className="text-2xl font-semibold text-brand-brown mb-4">What We Provide to Our Members</h3>
                                 <ul className="space-y-4 text-gray-700">
                                    <li className="flex items-start"><CheckIcon /> <span><strong>Training & Mentorship:</strong> Comprehensive guidance on all aspects of poultry farming.</span></li>
                                    <li className="flex items-start"><CheckIcon /> <span><strong>Starter Packages:</strong> Affordable kits with high-quality chicks and feeds.</span></li>
                                    <li className="flex items-start"><CheckIcon /> <span><strong>Discounted Supplies:</strong> Access to quality, network-priced feeds, vaccines, and vitamins.</span></li>
                                    <li className="flex items-start"><CheckIcon /> <span><strong>Market Access:</strong> Brand partnership and connections to established buyers.</span></li>
                                    <li className="flex items-start"><CheckIcon /> <span><strong>Community Support:</strong> A network that grows with you, ensuring you're never alone.</span></li>
                                </ul>
                             </div>
                        )}
                        {activeTab === 'stories' && (
                            <div className="animate-fade-in">
                                <h3 className="text-2xl font-semibold text-brand-brown mb-6">Real Stories from Our Members</h3>
                                <div className="space-y-6">
                                    {testimonials.map((testimonial, index) => (
                                        <div key={index} className="bg-brand-light p-6 rounded-lg border-l-4 border-brand-yellow">
                                            <p className="text-gray-800 italic">"{testimonial.quote}"</p>
                                            <div className="flex items-center mt-4">
                                                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                                                <div>
                                                    <p className="font-bold text-brand-dark">{testimonial.name}</p>
                                                    <p className="text-sm text-gray-600">{testimonial.cluster}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NetworkInfoSection;
