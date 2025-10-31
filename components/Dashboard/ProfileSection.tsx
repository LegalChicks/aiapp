import React, { useState } from 'react';
import { User, updateUserProfile } from '../../services/authService';

interface ProfileSectionProps {
    user: User;
    onUserUpdate: (user: User) => void;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ user, onUserUpdate }) => {
    const [contactMethod, setContactMethod] = useState(user.contactMethod || '');
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setSuccessMessage('');
        setError('');

        try {
            const updatedUser = await updateUserProfile(user.id, contactMethod);
            onUserUpdate(updatedUser);
            setSuccessMessage('Your profile has been updated successfully!');
            setTimeout(() => setSuccessMessage(''), 3000); // Hide message after 3 seconds
        } catch (err: any) {
            setError(err.message || 'Failed to update profile.');
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <section id="profile" className="p-8 bg-brand-light rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-brand-dark mb-6">Your Profile</h2>
            <div className="bg-white p-6 rounded-lg border border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                    <h3 className="font-bold text-lg text-brand-brown">Member Details</h3>
                    <p className="text-sm text-gray-600">This is your information on record.</p>
                </div>
                <div className="md:col-span-2">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-500">Full Name</label>
                            <p className="text-lg text-gray-800">{user.name}</p>
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-gray-500">Cluster</label>
                            <p className="text-lg text-gray-800">{user.cluster}</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                             <div>
                                <label htmlFor="contactMethod" className="block text-sm font-bold text-gray-700">Preferred Contact Method</label>
                                <input
                                    type="text"
                                    id="contactMethod"
                                    value={contactMethod}
                                    onChange={(e) => setContactMethod(e.target.value)}
                                    className="mt-1 shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-brand-yellow"
                                    placeholder="e.g., Email, Phone Number"
                                />
                            </div>
                            <div className="mt-4">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="bg-brand-green text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300 disabled:bg-gray-400"
                                >
                                    {isLoading ? 'Saving...' : 'Save Changes'}
                                </button>
                            </div>
                             {successMessage && <p className="mt-2 text-sm text-green-600">{successMessage}</p>}
                             {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;