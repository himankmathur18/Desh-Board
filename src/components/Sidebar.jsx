import { useState } from 'react';

// import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const [isDarkMode, setIsDarkMode,] = useState(true);

    const handleReload = () => {
        window.location.reload();
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (
        <div className="w-64 h-140 bg-gray-800 text-white rounded-lg">
            <h2 className="text-xl font-bold p-4">Dash Board</h2>
            <ul className="space-y-2">
                <li className="p-2  cursor-pointer rounded-lg">
                    <p className=' text-left px-2 font-bold'>Core</p>
                    <button className="flex items-center space-x-2 w-full text-left bg-gray-700 p-2 rounded-lg" onClick={handleReload}>
                        <i className="fa-solid fa-sync-alt hover:bg-gray-700 " />
                        <span>Dashboard</span>
                    </button>
                </li>
                <p className='text-left px-2 font-bold'>Interface</p>
                <li className="p-1 hover:bg-gray-700 cursor-pointer rounded-lg">

                    <button className="flex items-center space-x-2 w-full text-left bg-gray-700 p-3 rounded-lg" onClick={toggleTheme}>
                        <i className="fa-solid fa-adjust" />
                        <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                    </button>
                </li>
                <button className="flex items-center space-x-2 w-full text-left bg-gray-700 p-3 rounded-lg">
                    <i className="fa-solid fa-file-alt" />
                    <span>Logout</span>
                </button>

                <p className='text-left px-2 font-bold'>Addons</p>
                <button className="flex items-center space-x-2 w-full text-left bg-gray-700 p-3 rounded-lg">
                    <i className="fa-solid fa-file-alt" />
                    <span>Charts</span>
                </button>
                <button className="flex items-center space-x-2 w-full text-left bg-gray-700 p-3 rounded-lg">
                    <i className="fa-solid fa-file-alt" />
                    <span>Tables</span>
                </button>

            </ul>
        </div>
    );
};

export default Sidebar;