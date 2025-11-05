import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Register() {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const validatePassword = (pw) => /(?=.*[A-Z])(?=.*[a-z]).{6,}/.test(pw);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      toast.error("Password must have uppercase, lowercase, and 6+ characters");
      return;
    }
    try {
      await register(email, password, name, photo);
      toast.success("🎉 Registered successfully!");
      navigate("/");
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
        {/* Header */}
        <h2 className="text-4xl font-extrabold mb-2 text-center text-pink-600 drop-shadow-sm">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Join <span className="text-sky-600 font-semibold">ToyTopia</span> and start your fun journey! 🧸
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="input input-bordered w-full border-gray-300 focus:border-pink-500 focus:ring-pink-400 rounded-xl"
            required
          />
          <input
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            placeholder="Photo URL (optional)"
            className="input input-bordered w-full border-gray-300 focus:border-pink-500 focus:ring-pink-400 rounded-xl"
          />
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

          <button className="btn w-full bg-pink-500 border-none hover:bg-pink-600 text-white text-lg rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
            Register
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
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-pink-600 font-semibold hover:text-sky-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
