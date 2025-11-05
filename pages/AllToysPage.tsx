
import React from 'react';
import useTitle from '../hooks/useTitle';
import ToyCard from '../components/ToyCard';
import toysData from '../data/toys.json';
import { Toy } from '../types';

const AllToysPage: React.FC = () => {
  useTitle('All Toys');
  const toys: Toy[] = toysData;

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Toy Collection</h2>
          <p className="mt-4 text-lg text-gray-500">
            Explore our wide variety of toys from talented local sellers.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {toys.map((toy) => (
            <ToyCard key={toy.toyId} toy={toy} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllToysPage;
