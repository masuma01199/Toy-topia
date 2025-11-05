
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

const Navbar: React.FC = () => {
  const { user, logOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success('Logged out successfully!');
      })
      .catch((error: Error) => {
        toast.error(error.message);
      });
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'text-pink-500 font-bold border-b-2 border-pink-500'
      : 'text-gray-700 hover:text-pink-500 transition duration-300';

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h1a1 1 0 001-1V3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h1a1 1 0 100-2h-1a1 1 0 00-1 1V3.5a3.5 3.5 0 10-7 0V4a1 1 0 00-1-1H9a1 1 0 100 2h1a1 1 0 001-1V3.5z" />
                <path d="M3.707 9.293a1 1 0 00-1.414 1.414l.001.001 4.5 4.5a1 1 0 001.414 0l4.5-4.5a1 1 0 00-1.414-1.414l-3.793 3.793-3.793-3.793z" />
              </svg>
              <span className="text-2xl font-bold text-gray-800">ToyTopia</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              <NavLink to="/all-toys" className={navLinkClass}>All Toys</NavLink>
              {user && (
                 <>
                    <NavLink to="/my-toys" className={navLinkClass}>My Toys</NavLink>
                    <NavLink to="/add-toy" className={navLinkClass}>Add A Toy</NavLink>
                 </>
              )}
            </div>
          </div>
          <div className="hidden md:block">
            {user ? (
              <div className="relative group">
                <img
                  className="h-12 w-12 rounded-full object-cover cursor-pointer border-2 border-pink-300 group-hover:border-pink-500 transition duration-300"
                  src={user.photoURL || `https://i.pravatar.cc/150?u=${user.email}`}
                  alt="User"
                  title={user.displayName || user.email || ''}
                />
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
                  <div className="px-4 py-2 text-sm text-gray-700 font-semibold border-b">{user.displayName || 'No Name'}</div>
                   <Link to="/my-profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Profile</Link>
                  <button onClick={handleLogout} className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-pink-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-pink-600 transition duration-300">
                  Login
                </button>
              </Link>
            )}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-pink-500">
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-pink-100 text-pink-600' : 'text-gray-700 hover:bg-gray-50'}`}>Home</NavLink>
            <NavLink to="/all-toys" className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-pink-100 text-pink-600' : 'text-gray-700 hover:bg-gray-50'}`}>All Toys</NavLink>
             {user && (
                 <>
                    <NavLink to="/my-toys" className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-pink-100 text-pink-600' : 'text-gray-700 hover:bg-gray-50'}`}>My Toys</NavLink>
                    <NavLink to="/add-toy" className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-pink-100 text-pink-600' : 'text-gray-700 hover:bg-gray-50'}`}>Add A Toy</NavLink>
                 </>
              )}
            {user ? (
                <div className="pt-4 pb-3 border-t border-gray-200">
                    <div className="flex items-center px-5">
                        <img className="h-10 w-10 rounded-full object-cover" src={user.photoURL || `https://i.pravatar.cc/150?u=${user.email}`} alt="User" />
                        <div className="ml-3">
                            <div className="text-base font-medium leading-none text-gray-800">{user.displayName || 'User'}</div>
                            <div className="text-sm font-medium leading-none text-gray-500">{user.email}</div>
                        </div>
                    </div>
                    <div className="mt-3 px-2 space-y-1">
                        <Link to="/my-profile" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">My Profile</Link>
                        <button onClick={handleLogout} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
                            Logout
                        </button>
                    </div>
                </div>
            ) : (
                 <Link to="/login" className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Login</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
