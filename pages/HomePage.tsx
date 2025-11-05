
import React, { useEffect, useRef } from 'react';
import useTitle from '../hooks/useTitle';
import ToyCard from '../components/ToyCard';
import toysData from '../data/toys.json';
import { Toy } from '../types';

// Swiper is loaded from CDN in index.html, we need to declare it for TypeScript
declare const Swiper: any;

const HomePage: React.FC = () => {
  useTitle('Home');
  const swiperRef = useRef(null);
  const toys: Toy[] = toysData;

  useEffect(() => {
    if (swiperRef.current) {
       new Swiper(swiperRef.current, {
        loop: true,
        autoplay: {
          delay: 3000,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  }, []);

  return (
    <div>
      {/* Hero Slider */}
      <div ref={swiperRef} className="swiper-container h-96 md:h-[500px] relative">
        <div className="swiper-wrapper">
          <div className="swiper-slide bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/seed/slide1/1200/500')` }}>
             <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white p-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover a World of Fun!</h1>
                    <p className="text-lg md:text-xl">Find the perfect toys to spark imagination and joy.</p>
                </div>
            </div>
          </div>
          <div className="swiper-slide bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/seed/slide2/1200/500')` }}>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white p-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">New Arrivals Daily</h1>
                    <p className="text-lg md:text-xl">Explore the latest and greatest toys on the market.</p>
                </div>
            </div>
          </div>
          <div className="swiper-slide bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/seed/slide3/1200/500')` }}>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white p-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Support Local Sellers</h1>
                    <p className="text-lg md:text-xl">Shop from passionate local toy makers and stores.</p>
                </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev text-white"></div>
        <div className="swiper-button-next text-white"></div>
      </div>

      {/* Popular Toys Section */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-12">Popular Toys</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {toys.slice(0, 6).map((toy) => (
              <ToyCard key={toy.toyId} toy={toy} />
            ))}
          </div>
        </div>
      </section>

      {/* Extra Section 1: Shop by Category */}
       <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-12">Shop by Category</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {['Building Blocks', 'Toy Cars', 'Dolls', 'Action Figures'].map(category => (
                         <div key={category} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                            <h3 className="text-lg font-semibold text-gray-800">{category}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>

      {/* Extra Section 2: New Arrivals */}
       <section className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-12">New Arrivals</h2>
                 <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2">
                        <img src="https://picsum.photos/seed/newtoy/600/400" alt="New Arrival" className="rounded-lg shadow-lg" />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">The Amazing Robo-Pal</h3>
                        <p className="text-gray-600 mb-6">Meet your new best friend! The Robo-Pal is an interactive robot that learns, plays, and grows with you. Packed with the latest tech, it's the perfect educational companion for curious minds.</p>
                        <button className="bg-pink-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-pink-600 transition duration-300">Learn More</button>
                    </div>
                 </div>
            </div>
        </section>

    </div>
  );
};

export default HomePage;
