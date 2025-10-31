import React from 'react';

const announcements = [
    {
        title: 'Quarterly Cluster Meeting',
        date: 'October 28, 2024',
        content: 'Our Q4 meeting for the Tuguegarao and Solana clusters will be held at the Solana Municipal Hall. Please confirm your attendance.'
    },
    {
        title: 'Vaccination Schedule Update',
        date: 'October 15, 2024',
        content: 'The next round of Newcastle Disease vaccinations is scheduled for the first week of November. Please check your delivery dates.'
    },
     {
        title: 'New Feed Pellets Available',
        date: 'October 10, 2024',
        content: 'Our new batch of high-protein layer feed is now in stock. Place your orders through the supply form.'
    }
];

const AnnouncementsSection: React.FC = () => {
    return (
        <aside id="announcements" className="p-6 bg-yellow-50 rounded-lg shadow-sm border border-yellow-200">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Community Announcements</h2>
            <div className="space-y-4">
                {announcements.map((item, index) => (
                    <div key={index} className="pb-4 border-b border-yellow-200 last:border-b-0">
                        <p className="text-xs text-gray-500 font-semibold">{item.date}</p>
                        <h3 className="font-bold text-md text-brand-brown mt-1">{item.title}</h3>
                        <p className="text-gray-700 text-sm mt-1">{item.content}</p>
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default AnnouncementsSection;
