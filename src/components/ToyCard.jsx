import React from 'react';
import { Link } from 'react-router-dom';

export default function ToyCard({ toy }) {
  return (
    <div
      className="card bg-base-100 shadow p-4 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
      data-aos="fade-up"
    >
      <img
        src={toy.pictureURL}
        alt={toy.toyName}
        className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg border border-gray-200"
      />
      <div className="mt-3">
        <h3 className="font-bold text-lg">{toy.toyName}</h3>
        <div className="flex justify-between items-center text-sm mt-1 gap-2 flex-wrap">
          <span className="badge badge-success">Rating: {toy.rating}</span>
          <span className="badge badge-info">Qty: {toy.availableQuantity}</span>
        </div>
        <p className="font-semibold text-blue-600 mt-2">${toy.price}</p>
        <Link
          to={`/toy/${toy.toyId}`}
          className="btn btn-sm btn-outline mt-3 w-full"
        >
          View More
        </Link>
      </div>
    </div>
  );
}
