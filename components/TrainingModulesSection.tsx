import React from 'react';

interface TrainingModulesProps {
    isLoggedIn: boolean;
    onLoginClick: () => void;
}

const modules = [
    {
        title: 'Introduction to Poultry Farming',
        description: 'Get started with the basics of raising healthy chickens in your backyard. A perfect entry point for beginners.',
        type: 'Video',
        access: 'Public',
    },
    {
        title: 'Coop Building Essentials',
        description: 'A step-by-step PDF guide on how to build a sturdy and effective coop that protects your flock from the elements.',
        type: 'PDF Guide',
        access: 'Public',
    },
    {
        title: 'Advanced Biosecurity Protocols',
        description: 'Learn critical techniques for preventing disease outbreaks and ensuring the long-term health of your flock.',
        type: 'Video',
        access: 'Members Only',
    },
    {
        title: 'Optimizing Feed for Egg Production',
        description: 'Discover how to formulate and supplement feed to maximize egg quality and quantity.',
        type: 'PDF Guide',
        access: 'Members Only',
    },
];

const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 inline-block" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
    </svg>
);


const TrainingModulesSection: React.FC<TrainingModulesProps> = ({ isLoggedIn, onLoginClick }) => {
    
    const handleAccessClick = (access: string) => {
        if (access === 'Members Only' && !isLoggedIn) {
            onLoginClick();
        } else {
            // In a real app, this would navigate to the content URL
            alert("Accessing training material...");
        }
    };

    return (
        <section id="training-modules" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-brand-dark">Available Training Modules</h2>
                    <p className="text-lg text-gray-600 mt-2">Knowledge to help you succeed, from basics to advanced techniques.</p>
                    <div className="w-24 h-1 bg-brand-yellow mx-auto mt-4"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {modules.map((module, index) => (
                        <div key={index} className="bg-brand-light rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
                            <div className="p-6 flex-grow">
                                <div className="flex justify-between items-center mb-3">
                                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${module.type === 'Video' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
                                        {module.type}
                                    </span>
                                    {module.access === 'Members Only' && (
                                        <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-yellow-200 text-yellow-800">
                                            <LockIcon />
                                            Members Only
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-xl font-semibold text-brand-brown mb-2">{module.title}</h3>
                                <p className="text-gray-700 text-sm">{module.description}</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-b-lg mt-auto">
                                 <button
                                    onClick={() => handleAccessClick(module.access)}
                                    className="w-full bg-brand-green text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300"
                                >
                                    {module.access === 'Members Only' ? 'Log in to Access' : 'Access Now'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                 <div className="text-center mt-16">
                    <p className="text-xl text-gray-800">Ready to unlock all materials and benefits?</p>
                     <a href="#contact" className="mt-4 inline-block bg-brand-yellow text-brand-dark font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-500 transition-all duration-300 shadow-lg transform hover:scale-105">
                        Become a Partner
                    </a>
                </div>
            </div>
        </section>
    );
};

export default TrainingModulesSection;