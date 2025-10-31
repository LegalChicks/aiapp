import React from 'react';
import { User } from '../services/authService';
import TrainingSection from './Dashboard/TrainingSection';
import SupplyOrderSection from './Dashboard/SupplyOrderSection';
import AnnouncementsSection from './Dashboard/AnnouncementsSection';
import ProfileSection from './Dashboard/ProfileSection';

interface DashboardProps {
    user: User;
    onUserUpdate: (user: User) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onUserUpdate }) => {
    
    return (
        <div className="bg-white">
            <header className="bg-brand-brown text-white shadow-md">
                <div className="container mx-auto px-6 py-10">
                    <h1 className="text-4xl font-bold">Welcome, {user.name}!</h1>
                    <p className="text-lg text-gray-300 mt-1">Your Member Dashboard for the {user.cluster} Cluster</p>
                </div>
            </header>
            
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content Area */}
                    <div className="lg:col-span-2 space-y-8">
                       <ProfileSection user={user} onUserUpdate={onUserUpdate} />
                       <TrainingSection />
                       <SupplyOrderSection />
                    </div>
                    
                    {/* Sidebar Area */}
                    <div className="lg:col-span-1">
                        <AnnouncementsSection />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;