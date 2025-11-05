
import React from 'react';
import useTitle from '../hooks/useTitle';
import toast from 'react-hot-toast';

const AddToyPage: React.FC = () => {
  useTitle('Add a Toy');

  const handleAddToy = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend/database.
    // Here, we just simulate the success.
    toast.success("Toy added successfully!");
    e.currentTarget.reset();
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Add a New Toy</h2>
          <form onSubmit={handleAddToy} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="toyName" className="block text-sm font-medium text-gray-700">Toy Name</label>
                <input type="text" name="toyName" id="toyName" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pink-500 focus:border-pink-500" />
              </div>
              <div>
                <label htmlFor="pictureURL" className="block text-sm font-medium text-gray-700">Picture URL</label>
                <input type="url" name="pictureURL" id="pictureURL" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pink-500 focus:border-pink-500" />
              </div>
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                <input type="number" name="price" id="price" required min="0" step="0.01" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pink-500 focus:border-pink-500" />
              </div>
              <div>
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating (1-5)</label>
                <input type="number" name="rating" id="rating" required min="1" max="5" step="0.1" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pink-500 focus:border-pink-500" />
              </div>
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Available Quantity</label>
                <input type="number" name="quantity" id="quantity" required min="0" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pink-500 focus:border-pink-500" />
              </div>
               <div>
                <label htmlFor="subCategory" className="block text-sm font-medium text-gray-700">Sub-category</label>
                <select id="subCategory" name="subCategory" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pink-500 focus:border-pink-500">
                    <option>Building Blocks</option>
                    <option>Toy Cars</option>
                    <option>Dolls</option>
                    <option>Stuffed Animals</option>
                    <option>Action Figures</option>
                    <option>Arts & Crafts</option>
                    <option>Educational</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea id="description" name="description" rows={4} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pink-500 focus:border-pink-500"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-pink-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-pink-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                Add Toy
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToyPage;
