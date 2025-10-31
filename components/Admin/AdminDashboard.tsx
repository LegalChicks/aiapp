import React from 'react';
import { User } from '../../services/authService';
import NetworkAnalytics from './NetworkAnalytics';
import UserManagement from './UserManagement';
import ContentManagement from './ContentManagement';

interface AdminDashboardProps {
    adminUser: User;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ adminUser }) => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-brand-dark text-white shadow-md">
                <div className="container mx-auto px-6 py-10">
                    <h1 className="text-4xl font-bold">Administrator Panel</h1>
                    <p className="text-lg text-gray-300 mt-1">Welcome, {adminUser.name}.</p>
                </div>
            </header>

            <div className="container mx-auto px-6 py-12">
                <div className="space-y-8">
                    <NetworkAnalytics />
                    <UserManagement />
                    <ContentManagement />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;