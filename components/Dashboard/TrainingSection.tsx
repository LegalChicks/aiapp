import React, { useState, useEffect } from 'react';
import { supabase } from '../../services/supabaseClient'; // Import the client

// Define an interface for the data shape
interface TrainingMaterial {
    id: number;
    title: string;
    description: string;
    type: string;
    duration: string;
}

const TrainingSection: React.FC = () => {
    // State for loading, data, and errors
    const [trainingMaterials, setTrainingMaterials] = useState<TrainingMaterial[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Async function to fetch data
        const fetchMaterials = async () => {
            const { data, error } = await supabase
                .from('training_materials')
                .select('*'); // Select all columns

            if (error) {
                console.error('Error fetching training materials:', error);
                setError(error.message);
            } else {
                setTrainingMaterials(data);
            }
            setLoading(false);
        };

        fetchMaterials();
    }, []); // Empty dependency array means this runs once on mount

    if (loading) {
        return (
            <section id="training" className="p-8 bg-brand-light rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-brand-dark mb-6">Exclusive Training Materials</h2>
                <p>Loading training materials...</p>
            </section>
        );
    }

    if (error) {
        return (
            <section id="training" className="p-8 bg-brand-light rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-brand-dark mb-6">Exclusive Training Materials</h2>
                <p className="text-red-600">Could not load materials: {error}</p>
            </section>
        );
    }

    return (
        <section id="training" className="p-8 bg-brand-light rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-brand-dark mb-6">Exclusive Training Materials</h2>
            <div className="space-y-4">
                {trainingMaterials.map((item) => ( // Use data from state
                    <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center">
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
