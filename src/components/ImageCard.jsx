import React from 'react';

const ImageCard = ({ image }) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center w-full md:h-[75%] pt-12">
            <img src={image.url} alt={image.alt} className="max-w-full max-h-full object-contain flex-1 rounded-md shadow-lg" />
            <div className="flex-1 text-center text-black text-lg md:text-xl lg:text-2xl mt-4 md:mt-0 md:ml-6">
                <p className="font-semibold mb-4">{image.text}</p>
                <p className="italic text-gray-600">- Wasif</p>
            </div>
        </div>
    );
}

export default ImageCard;
