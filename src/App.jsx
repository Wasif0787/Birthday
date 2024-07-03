import React, { useState } from 'react';
import ImageCard from './components/ImageCard'; // Import ImageCard component
import './index.css'; // Import Tailwind CSS

const image1 = import.meta.env.VITE_IMAGE1;
const image2 = import.meta.env.VITE_IMAGE2;
const image3 = import.meta.env.VITE_IMAGE3;
const image4 = import.meta.env.VITE_IMAGE4;

const images = [
  { id: 1, url: image1, alt: 'Image 1', text: 'To the one who lights up every shopping spree with laughter and joy. Happy birthday, my fashionista friend!' },
  { id: 2, url: image2, alt: 'Image 2', text: 'Celebrating the countless meals shared, from cozy dinners to spontaneous food adventures. Here is to more delicious moments together!' },
  { id: 3, url: image3, alt: 'Image 3', text: 'From bus rides to everywhere, each journey with you is an unforgettable adventure. Wishing you the happiest birthday filled with new horizons!' },
  // Add more images as needed
  {
    id: 4, url: image4, alt: 'Image 3', text: 'Its the only pic where we are together , but its not the last one , am sure Inshallah many mores to come .'
  }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    console.log(image1);
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4 sm:p-8 bg">
      <ImageCard image={images[currentIndex]} />
      <div className="flex justify-between items-center p-4">
        <button
          onClick={prevImage}
          disabled={currentIndex === 0}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Prev
        </button>
        <button
          onClick={nextImage}
          disabled={currentIndex === images.length - 1}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
