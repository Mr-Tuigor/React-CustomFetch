import React from 'react';
import useFetch from '../hook/useFetch';

const Photos = () => {
  const { data: photos, loading, error } = useFetch('https://gist.githubusercontent.com/Mr-Tuigor/d539b5845fb5bfb5eba6e03c8dd1b613/raw/5d0bd1fc53435936e23ed131038d2d20e8a9b790/products.json');

  if (loading) return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-white"></div>
    </div>
  );

  if (error) return <div className="text-red-500 text-2xl text-center mt-100 bg-black min-h-screen pt-10">Got Error: {error}</div>;
  
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-10">Photos</h1>

    
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos && photos.map((photo) => (
          <div 
            key={photo.id} 
            className="border border-green-600 bg-zinc-900 p-4 flex flex-col items-center justify-between transition-hover hover:border-yellow-300"
          >
            

            <div className="w-full aspect-square bg-gray-800 flex items-center justify-center overflow-hidden mb-4">
              <img 
                src={photo.images[Math.floor(Math.random() * 3)]||photo.images[Math.floor(Math.random() * 2)]||photo.images[0]} 
                alt={photo.title} 
                className="w-full h-full object-cover"
              />
            </div>

            

            <p className="text-center text-sm font-light leading-snug lowercase line-clamp-2">
              {photo.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;