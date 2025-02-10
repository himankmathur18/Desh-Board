import { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Charts from './Charts';
import Datatable from './Datatable';

const HomePage = () => {
    const [showCards, setShowCards] = useState(false);

    const handleToggle = () => {
        setShowCards(!showCards);
    };

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <div className="p-4 text-left">
                    <button
                        className="mt-4 bg-gray-500 text-white py-2 px-5 rounded hover: divide-black" onClick={handleToggle}>
                        Dashboard
                    </button>
                    {showCards && (
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <Card title="Primary Card" color="blue" />
                            <Card title="Warning Card" color="Green" />
                            <Card title="Success Card" color="#FF9D23" />
                            <Card title="Danger Card" color="Red" />
                        </div>
                    )}
                </div>
                <div className="container mx-lg p-4">
                    <h1 className="text-2xl font-bold mb-2">Bar-chart</h1>
                    <Charts />
                </div>
                <div className="container mx-auto p-4">
                    <h1 className="text-2xl font-bold mb-2">Data Table</h1>
                    <Datatable />
                </div>
            </div>
        </div>
    );
};

export default HomePage;