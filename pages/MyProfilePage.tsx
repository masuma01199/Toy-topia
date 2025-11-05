
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import useTitle from '../hooks/useTitle';
import toast from 'react-hot-toast';

const MyProfilePage: React.FC = () => {
    const { user, updateUserProfile } = useAuth();
    useTitle('My Profile');

    const [name, setName] = useState(user?.displayName || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');

    const handleProfileUpdate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        updateUserProfile(name, photoURL)
            .then(() => {
                toast.success("Profile updated successfully!");
            })
            .catch((error: Error) => {
                toast.error(`Failed to update profile: ${error.message}`);
            });
    };

    if (!user) {
        return <div className="text-center py-20">Please log in to see your profile.</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="p-8">
                        <div className="md:flex md:items-center">
                            <div className="md:flex-shrink-0">
                                <img className="h-24 w-24 rounded-full object-cover mx-auto" src={user.photoURL || `https://i.pravatar.cc/150?u=${user.email}`} alt="User" />
                            </div>
                            <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                                <h1 className="text-2xl font-bold text-gray-900">{user.displayName || 'No Name'}</h1>
                                <p className="text-sm font-medium text-gray-500">{user.email}</p>
                            </div>
                        </div>

                        <div className="mt-10 border-t border-gray-200 pt-8">
                            <h2 className="text-xl font-bold text-gray-800">Edit Profile</h2>
                            <form onSubmit={handleProfileUpdate} className="mt-6 space-y-6">
                                <div>
                                    <label htmlFor="name-update" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        id="name-update"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="photoURL-update" className="block text-sm font-medium text-gray-700">Photo URL</label>
                                    <input
                                        type="url"
                                        id="photoURL-update"
                                        value={photoURL}
                                        onChange={(e) => setPhotoURL(e.target.value)}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <button type="submit" className="w-full bg-pink-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-pink-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfilePage;
