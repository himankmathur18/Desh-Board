import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        mobile: '',
        address: '',
        gender: '',
        position: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('signupData', JSON.stringify(formData));
        alert('Data saved to local storage');
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-lg bg-cover">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign-up</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4 text-left">
                    <label className="block text-gray-700">User Name:</label>
                    <input type="text" id="username" name="username" required className="w-full px-3 py-2 border border-gray-300 rounded-xl" onChange={handleChange} />
                </div>
                <div className="mb-4 text-left">
                    <label className="block text-gray-700">Email address:</label>
                    <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-xl" onChange={handleChange} />
                </div>
                <div className="mb-4 text-left">
                    <label className="block text-gray-700">Password:</label>
                    <input type="password" id="password" name="password" required className="w-full px-3 py-2 border border-gray-300 rounded-xl" onChange={handleChange} />
                </div>
                <div className="mb-4 text-left">
                    <label className="block text-gray-700">Mobile No.:</label>
                    <input type="tel" id="mobile" name="mobile" required className="w-full px-3 py-2 border border-gray-300 rounded-xl" onChange={handleChange} />
                </div>
                <div className="mb-4 text-left">
                    <label className="block text-gray-700">Address:</label>
                    <input type="text" id="address" name="address" required className="w-full px-3 py-2 border border-gray-300 rounded-xl" onChange={handleChange} />
                </div>
                <div className="mb-4 text-left">
                    <label className="block text-gray-700">Gender:</label>
                    <div className="flex items-center">
                        <input type="radio" id="male" name="gender" value="male" required className="mr-3" onChange={handleChange} />
                        <label htmlFor="male" className="mr-20">Male</label>
                        <input type="radio" id="female" name="gender" value="female" required className="mr-3" onChange={handleChange} />
                        <label htmlFor="female" className="mr-20">Female</label>
                        <input type="radio" id="other" name="gender" value="other" required className="mr-3" onChange={handleChange} />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
                <div className="mb-4 text-left">
                    <label className="block text-gray-700">Position/Profession:</label>
                    <input type="text" id="position" name="position" required className="w-full px-3 py-2 border border-gray-300 rounded-xl" onChange={handleChange} />
                </div>
                <div className="text-center">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-xl mb-4 grid grid-cols-1 gap-1 w-full">Signup</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-xl mb-4 grid grid-cols-1 gap-1 w-full" onClick={()=> navigate("/Login")}>Login</button>
                </div>
            </form>
        </div>
    );
}