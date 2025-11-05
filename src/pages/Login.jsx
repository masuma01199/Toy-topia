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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 to-yellow-100">
      <div
        data-aos="zoom-in"
        className="max-w-md w-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-primary">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="input input-bordered w-full border-gray-300 focus:border-primary focus:ring-primary"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="input input-bordered w-full border-gray-300 focus:border-primary focus:ring-primary"
            required
          />
          <button className="btn btn-primary w-full hover:bg-pink-500 transition-colors duration-300">
            Login
          </button>
        </form>

        <div className="text-center mt-5 space-y-3">
          <button
            className="btn btn-outline w-full hover:bg-gray-100 transition-colors duration-300"
            onClick={signInWithGoogle}
          >
            Continue with Google
          </button>
          <p className="text-sm">
            Don’t have an account?{" "}
            <Link to="/register" className="text-primary hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
