import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


export default function Navbar() {
const { user, logout } = useAuth();
const navigate = useNavigate();


const handleLogout = async () => {
await logout();
navigate('/');
};


return (
<nav className="bg-green-200 p-4 shadow-md">
<div className="container mx-auto flex items-center justify-between">
<Link to="/" className="font-bold text-xl">ToyTopia</Link>
<div className="flex items-center gap-4">
<NavLink
  to="/"
  end
  className={({ isActive }) =>
    `${isActive ? "text-primary" : "text-gray-700"} hover:text-yellow-500 transition-colors duration-300`
  }
>
  Home
</NavLink>

<NavLink
  to="/profile"
  className={({ isActive }) =>
    `${isActive ? "text-primary" : "text-gray-700"} hover:text-yellow-500 transition-colors duration-300`
  }
>
  My Profile
</NavLink>



{user ? (
<div className="flex items-center gap-2">
<img title={user.displayName || user.email} src={user.photoURL || 'https://via.placeholder.com/40'} alt="user" className="w-10 h-10 rounded-full" />
<button
  onClick={handleLogout}
  className="btn btn-sm btn-ghost hover:text-yellow-500 transition-colors duration-300"
>
  Logout
</button>

</div>
) : (
<Link
  to="/login"
  className="btn btn-primary btn-sm hover:scale-105 transition-transform duration-300"
>
  Login
</Link>

)}
</div>
</div>
</nav>
);
}