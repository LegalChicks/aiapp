import React from 'react';

const SupplyOrderSection: React.FC = () => {

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Supply order submitted! (This is a demo feature). In a real application, this would be processed by the LCEN team.');
        // Here you would typically clear the form
    }

    return (
        <section id="supplies" className="p-8 bg-brand-light rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-brand-dark mb-6">Order Network Supplies</h2>
            <p className="text-gray-600 mb-6">Get access to discounted, high-quality chicks, feeds, and vitamins directly from our network.</p>
            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="item-select">
                            Select Item
                        </label>
                        <select id="item-select" className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-brand-yellow">
                            <option>Day-Old Chicks (Rhode Island Red)</option>
                            <option>Starter Feed (25kg bag)</option>
                            <option>Layer Feed (25kg bag)</option>
                            <option>Vitamin Pack (100g)</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
                            Quantity
                        </label>
                        <input type="number" id="quantity" min="1" defaultValue="1" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-brand-yellow" />
                    </div>
                </div>
                <div>
                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="notes">
                        Notes (Optional)
                    </label>
                    <textarea id="notes" rows={3} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-brand-yellow" placeholder="e.g., Preferred delivery date..."></textarea>
                </div>
                <div>
                    <button type="submit" className="w-full bg-brand-yellow text-brand-dark font-bold py-2 px-4 rounded-lg hover:bg-yellow-500 transition-colors duration-300">
                        Submit Order Request
                    </button>
                </div>
            </form>
        </section>
    );
};

export default SupplyOrderSection;
