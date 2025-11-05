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
    <div className="min-h-screen bg-green-300 from-yellow-50 via-green-50 to-white">
      <div className="container mx-auto p-4 space-y-12">
        {/* 🔹 Hero Slider */}
        <Slider />

        {/* 🔹 Popular Toys */}
        <section className="bg-white/70 backdrop-blur-sm rounded-xl shadow-md p-6">
          <h2 className="text-3xl font-bold text-center mb-6 text-primary">
            Popular Toys
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {toys.slice(0, 6).map((toy) => (
              <ToyCard key={toy.toyId} toy={toy} />
            ))}
          </div>
        </section>

        {/* 🔹 Extra Sections */}
        <section className="bg-green-100 from-pink-100 to-yellow-100 rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-semibold mb-3">Why Choose ToyTopia?</h3>
          <p className="text-gray-600">
            We bring happiness to kids by connecting families with trusted local
            toy sellers. Safe, creative, and always fun!
          </p>
        </section>

        <section className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-semibold mb-3">Join Our Community</h3>
          <p className="text-gray-600">
            Sign up today and get access to exclusive toys, discounts, and events
            for your little ones!
          </p>
        </section>
      </div>
    </div>
  );
}
