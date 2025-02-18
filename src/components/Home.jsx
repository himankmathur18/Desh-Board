import { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Charts from './Charts';
import Datatable from './Datatable';
import Footer from './Footer';

const HomePage = () => {
    const [isDarkMode] = useState(true);
    const [showCards, setShowCards] = useState(false);

    const handleToggle = () => {
        setShowCards(!showCards);
    };

    return (
        <div className={isDarkMode ? 'light-mode' : ''}>
            <div className="flex ">
                <Sidebar />
                <div className="flex-1">
                    <Header />


                    <div className="p-3 text-left">
                        <button
                            className="bg-gray-500 text-white py-2 px-5 rounded hover: divide-black"
                            onClick={handleToggle}
                        >
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
                    <div className=" mx-lg p-4">
                        <h1 className="font-bold mb-1   ">Charts</h1>
                        <Charts />
                    </div>
                    <div className=" mx-lg p-4">
                        <h1 className="font-bold mb-1">Data Table</h1>
                        <Datatable />
                    </div>
                    <div className="p-10">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;