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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-100 to-pink-100">
      <div
        data-aos="zoom-in"
        className="max-w-md w-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-primary">
          Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="input input-bordered w-full border-gray-300 focus:border-primary focus:ring-primary"
            required
          />
          <input
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            placeholder="Photo URL"
            className="input input-bordered w-full border-gray-300 focus:border-primary focus:ring-primary"
          />
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
            Register
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
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
