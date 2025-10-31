import React from 'react';

const trainingMaterials = [
    {
        title: 'Module 1: Biosecurity & Coop Management',
        description: 'Learn the fundamentals of keeping your flock healthy and safe. Covers coop sanitation, pest control, and disease prevention.',
        type: 'Video',
        duration: '45 mins'
    },
    {
        title: 'Module 2: Advanced Feed Formulation',
        description: 'Go beyond the basics. Learn how to supplement feeds with local ingredients to lower costs without sacrificing nutrition.',
        type: 'PDF Guide',
        duration: '20 pages'
    },
    {
        title: 'Webinar: Marketing & Selling Your Eggs',
        description: 'A recording of our last webinar on how to price, package, and market your products to local businesses and consumers.',
        type: 'Video',
        duration: '1 hr 15 mins'
    },
];

const TrainingSection: React.FC = () => {
    return (
        <section id="training" className="p-8 bg-brand-light rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-brand-dark mb-6">Exclusive Training Materials</h2>
            <div className="space-y-4">
                {trainingMaterials.map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <div>
                            <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full mb-2 ${item.type === 'Video' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
                                {item.type}
                            </span>
                            <h3 className="font-bold text-lg text-brand-brown">{item.title}</h3>
                            <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                            <p className="text-xs text-gray-500 mt-2">({item.duration})</p>
                        </div>
                        <div className="mt-4 sm:mt-0 sm:ml-4 flex-shrink-0">
                            <button className="bg-brand-green text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300 text-sm">
                                Access Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TrainingSection;
