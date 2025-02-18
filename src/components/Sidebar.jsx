import { useState, useEffect } from 'react';

const Sidebar = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const handleReload = () => {
        window.location.reload();
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLogout = () => {

        console.log('User logged out');

        localStorage.removeItem('user');
        window.location.href = '/login';
    };

    return (
        <div>
            <button onClick={toggleSidebar} className="p-4 bg-gray-400 text-Black font-bold rounded">
                {isSidebarOpen ? 'C' : 'O'}
            </button>
            <div className={`fixed top-25 left-0 bottom-1 bg-gray-800 text-white rounded-lg transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <h2 className="font-bold p-4">DashBoard</h2>
                <ul className="p-0">
                    <p className='text-left px-2 font-bold m-0'>Core</p>
                    <li className="p-3 cursor-pointer rounded-lg hover:bg-gray-700">
                        <button className="flex items-center w-full text-left bg-gray-700 p-2 rounded-lg" onClick={handleReload}>
                            <i className="fa-solid fa-sync-alt" />
                            <span>Dashboard</span>
                        </button>
                    </li>
                    <p className='text-left px-2 font-bold m-0'>Interface</p>
                    <li className="p-3 hover:bg-gray-700 cursor-pointer rounded-lg">
                        <button className="flex items-center w-full text-left bg-gray-700 p-2 rounded-lg" onClick={toggleTheme}>
                            <i className="fa-solid fa-adjust" />
                            <a href="javascript:void(0);" title="Change Theme" className="w3-button w3-bar-item topnav-icons fa fa-adjust ga-tryit margin-top:-2px;"></a>
                            <span>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
                        </button>
                        <button className="mt-1 flex items-center w-full text-left bg-gray-700 p-2 rounded-lg" onClick={handleLogout}>
                            <i className="fa-solid fa-file-alt" />
                            <span>Logout</span>
                        </button>
                    </li>
                    <p className='text-left px-2 font-bold m-0'>Addons</p>
                    <li className="p-3 hover:bg-gray-700 cursor-pointer rounded-lg">
                        <button className="flex items-center w-full text-left bg-gray-700 p-2 rounded-lg">
                            <i className="fa-solid fa-adjust" />
                            <span>Chat</span>
                        </button>
                        <button className="mt-1 flex items-center w-full text-left bg-gray-700 p-2 rounded-lg">
                            <i className="fa-solid fa-file-alt" />
                            <span>Table</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;