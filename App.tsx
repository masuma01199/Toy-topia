
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AllToysPage from './pages/AllToysPage';
import ToyDetailsPage from './pages/ToyDetailsPage';
import MyProfilePage from './pages/MyProfilePage';
import AddToyPage from './pages/AddToyPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="all-toys" element={<AllToysPage />} />
            <Route path="toys/:id" element={
              <PrivateRoute>
                <ToyDetailsPage />
              </PrivateRoute>
            } />
            <Route path="my-profile" element={
              <PrivateRoute>
                <MyProfilePage />
              </PrivateRoute>
            } />
            <Route path="add-toy" element={
              <PrivateRoute>
                <AddToyPage />
              </PrivateRoute>
            } />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </HashRouter>
      <Toaster position="top-center" reverseOrder={false} />
    </AuthProvider>
  );
}

export default App;
