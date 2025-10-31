import React from 'react';

const ContentManagement: React.FC = () => {
    return (
        <section id="content-management" className="p-8 bg-brand-light rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-brand-dark mb-6">Content Management</h2>
            <div className="bg-white p-6 rounded-lg text-center border-2 border-dashed border-gray-300">
                <p className="text-gray-500">
                    This section is under development.
                </p>
                <p className="text-gray-600 mt-2">
                    Admins will be able to add, edit, and delete training modules, announcements, and other site content from here.
                </p>
            </div>
        </section>
    );
};

export default ContentManagement;
