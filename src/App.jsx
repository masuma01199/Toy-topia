import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ToyDetails from './pages/ToyDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import MyProfile from './pages/MyProfile';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
return (
<div className="min-h-screen flex flex-col">
<Navbar />
<main className="flex-1">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/toy/:id" element={<ProtectedRoute><ToyDetails /></ProtectedRoute>} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/profile" element={<ProtectedRoute><MyProfile /></ProtectedRoute>} />
<Route path="*" element={<NotFound />} />
</Routes>
</main>
<Footer />
<ToastContainer position="top-right" />
</div>
);
}


export default App;