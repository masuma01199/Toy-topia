
import React from 'react';
import { useParams } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import toysData from '../data/toys.json';
import { Toy } from '../types';
import NotFoundPage from './NotFoundPage';
import toast from 'react-hot-toast';

const ToyDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const toy: Toy | undefined = toysData.find((t) => t.toyId === id);
  
  useTitle(toy ? toy.toyName : 'Toy Not Found');

  if (!toy) {
    return <NotFoundPage />;
  }
  
  const handleTryNowSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success(`Thank you! Your request for "${toy.toyName}" has been submitted.`);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                <span className="block">{toy.toyName}</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-500">{toy.description}</p>
              <div className="mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                  <p><span className="font-bold text-gray-900">Price:</span> ${toy.price.toFixed(2)}</p>
                  <p><span className="font-bold text-gray-900">Rating:</span> {toy.rating} / 5</p>
                  <p><span className="font-bold text-gray-900">Quantity Available:</span> {toy.availableQuantity}</p>
                  <p><span className="font-bold text-gray-900">Category:</span> {toy.subCategory}</p>
                  <p className="sm:col-span-2"><span className="font-bold text-gray-900">Seller:</span> {toy.sellerName} ({toy.sellerEmail})</p>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Request a Demo</h3>
                <form onSubmit={handleTryNowSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input type="text" name="name" id="name" required className="shadow-sm focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Your Name" />
                  </div>
                   <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="email" name="email" id="email" required className="shadow-sm focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Your Email" />
                  </div>
                  <button type="submit" className="w-full bg-pink-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-pink-600 transition duration-300">
                    Try Now
                  </button>
                </form>
              </div>

            </div>
          </div>
          <div className="aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1 lg:aspect-w-1">
            <img className="transform w-full h-full object-cover object-center" src={toy.pictureURL} alt={toy.toyName} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetailsPage;
