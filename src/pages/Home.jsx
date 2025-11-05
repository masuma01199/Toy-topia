import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import ToyCard from "../components/ToyCard";

export default function Home() {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("/data/toys.json")
      .then((res) => res.json())
      .then(setToys);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-sky-50 to-rose-100">
      <div className="container mx-auto p-6 space-y-16">
        {/* 🔹 Hero Slider */}
        <Slider />

        {/* 🔹 Popular Toys Section */}
        <section className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8">
          <h2 className="text-4xl font-extrabold text-center mb-10 text-pink-600 drop-shadow-sm">
            Popular Toys
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {toys.slice(0, 8).map((toy) => (
              <div
                key={toy.toyId}
                className="transform hover:-translate-y-2 transition-transform duration-300"
              >
                <ToyCard toy={toy} />
              </div>
            ))}
          </div>
        </section>

        {/* 🔹 Why Choose ToyTopia */}
        <section className="bg-gradient-to-r from-sky-100 via-white to-pink-100 rounded-3xl shadow-lg p-10 text-center">
          <h3 className="text-3xl font-semibold mb-4 text-sky-700">
            Why Choose <span className="text-pink-600">ToyTopia?</span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            At ToyTopia, we connect families with creative, high-quality toys
            that spark joy and imagination. Trusted sellers, safe materials, and
            endless fun — that’s our promise to every child. 🎠
          </p>
        </section>

        {/* 🔹 Community Section */}
        <section className="bg-gradient-to-r from-pink-100 to-sky-100 rounded-3xl shadow-lg p-10 text-center">
          <h3 className="text-3xl font-semibold mb-4 text-pink-700">
            Join Our Joyful Community
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
            Sign up today and unlock exclusive discounts, early toy releases, and
            family-friendly events! Be part of the ToyTopia family ❤️
          </p>
          <button className="btn bg-pink-500 text-white hover:bg-sky-500 border-none rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
            Get Started
          </button>
        </section>
      </div>
    </div>
  );
}
