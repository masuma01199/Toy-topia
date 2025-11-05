import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function ToyDetails() {
  const { id } = useParams();
  const [toy, setToy] = useState(null);
  const [form, setForm] = useState({ name: "", email: "" });

  useEffect(() => {
    fetch("/data/toys.json")
      .then((res) => res.json())
      .then((data) => {
        const foundToy = data.find((t) => String(t.toyId) === String(id));
        setToy(foundToy);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("🎉 Try Now request submitted successfully!");
    setForm({ name: "", email: "" });
  };

  if (!toy)
    return <div className="p-8 text-center">Toy not found or still loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-6">
        <img
          src={toy.pictureURL}
          alt={toy.toyName}
          className="w-full rounded-lg shadow"
        />
        <div>
          <h2 className="text-3xl font-bold mb-2">{toy.toyName}</h2>
          <p className="mb-2">{toy.description}</p>
          <p>Seller: {toy.sellerName} ({toy.sellerEmail})</p>
          <p className="font-semibold mt-2">💲 {toy.price}</p>
          <p>⭐ Rating: {toy.rating}</p>
          <p>📦 Available: {toy.availableQuantity}</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-3">
            <div>
              <label className="block mb-1">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="input input-bordered w-full"
              />
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Try Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
