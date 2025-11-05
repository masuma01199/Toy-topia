import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

export default function ToyGrid() {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/toys.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load JSON");
        return res.json();
      })
      .then((data) => {
        console.log("Loaded toys:", data);
        setToys(data);
      })
      .catch((err) => console.error("Error loading toys:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-500 text-lg">
        Loading toys...
      </div>
    );
  }

  if (toys.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500 text-lg">
        No toys found 😔
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {toys.map((toy) => (
        <ToyCard key={toy.toyId} toy={toy} />
      ))}
    </div>
  );
}
