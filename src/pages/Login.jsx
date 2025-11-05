import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      toast.success("✅ Logged in successfully!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-pink-100 to-rose-200">
      <div
        data-aos="zoom-in"
        className="max-w-md w-full bg-gradient-to-b from-white via-pink-50 to-sky-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-10"
      >
        {/* Header Section */}
        <h2 className="text-4xl font-extrabold mb-2 text-center text-pink-600 drop-shadow-sm">
          Welcome Back!
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Log in to continue exploring <span className="text-sky-600">ToyTopia</span> 🎠
        </p>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="input input-bordered w-full border-gray-300 focus:border-pink-500 focus:ring-pink-400 rounded-xl"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="input input-bordered w-full border-gray-300 focus:border-pink-500 focus:ring-pink-400 rounded-xl"
            required
          />

          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-sky-600 hover:text-pink-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button className="btn w-full bg-pink-500 border-none hover:bg-pink-600 text-white text-lg rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
            Login
          </button>
        </form>

        <div className="divider my-6 text-gray-400">OR</div>

        <button
          className="btn w-full border-gray-300 hover:bg-sky-100 text-gray-700 font-medium rounded-xl transition-colors duration-300"
          onClick={signInWithGoogle}
        >
          Continue with Google
        </button>

        <p className="text-sm text-center mt-6 text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-pink-600 font-semibold hover:text-sky-600 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
