
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import useTitle from '../hooks/useTitle';
import toast from 'react-hot-toast';

const RegisterPage: React.FC = () => {
  useTitle('Register');
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const photoURL = (form.elements.namedItem('photoURL') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain an uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain a lowercase letter.");
      return;
    }

    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photoURL)
          .then(() => {
            toast.success('Registration successful! Welcome!');
            navigate('/');
          })
          .catch((updateError: Error) => {
             toast.error(`Could not set profile info: ${updateError.message}`);
          });
      })
      .catch((error: Error) => {
        setError(error.message);
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create a new account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input id="name" name="name" type="text" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email-register" className="sr-only">Email address</label>
              <input id="email-register" name="email" type="email" autoComplete="email" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm" placeholder="Email address" />
            </div>
            <div>
              <label htmlFor="photoURL" className="sr-only">Photo URL</label>
              <input id="photoURL" name="photoURL" type="url" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm" placeholder="Photo URL" />
            </div>
            <div className="relative">
              <label htmlFor="password-register" className="sr-only">Password</label>
              <input id="password-register" name="password" type={showPassword ? 'text' : 'password'} required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm" placeholder="Password" />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                <svg onClick={() => setShowPassword(!showPassword)} className="h-6 w-6 text-gray-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {showPassword ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7 1.274-4.057 5.064-7 9.542-7 .847 0 1.67.127 2.458.362M16.5 10.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.5 17.5l-2.5-2.5" />
                  )}
                </svg>
              </div>
            </div>
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
              Register
            </button>
          </div>
        </form>
        <div className="text-sm text-center">
            <p>Already have an account? <Link to="/login" className="font-medium text-pink-600 hover:text-pink-500">Sign in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
