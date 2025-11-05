
import React from 'react';
import { Link } from 'react-router-dom';
import { Toy } from '../types';

interface ToyCardProps {
  toy: Toy;
}

const ToyCard: React.FC<ToyCardProps> = ({ toy }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img className="w-full h-56 object-cover object-center" src={toy.pictureURL} alt={toy.toyName} />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 truncate">{toy.toyName}</h2>
        <div className="flex justify-between items-center text-gray-700 mb-4">
          <p className="text-xl font-semibold text-pink-500">${toy.price.toFixed(2)}</p>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1">{toy.rating}</span>
          </div>
        </div>
        <p className="text-gray-600 h-12 overflow-hidden text-ellipsis">{toy.description.substring(0, 60)}...</p>
        <div className="mt-6">
          <Link to={`/toys/${toy.toyId}`}>
            <button className="w-full bg-pink-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-pink-600 transition duration-300">
              View More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
