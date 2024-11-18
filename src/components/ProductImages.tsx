"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface ImageProps {
  url: string;
}

const ProductImages = ({ images }: { images: ImageProps[] }) => {
  const [index, setIndex] = useState(0);

  // Log the images and currently selected image URL
  useEffect(() => {
    console.log("Images received:", images);
    console.log("Current Image URL:", images[index]?.url);
  }, [images, index]);

  // Ensure images array is not empty and valid
  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div>
      <div className="relative h-[500px]">
        <Image
          src={images[index]?.url || '/fallback-image.jpg'} // Fallback if image URL is missing
          alt={`Product Image ${index}`}
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>

      <div className="flex justify-between gap-4 mt-8">
        {images.map((img, i) => (
          <div
            className="w-1/4 h-32 relative cursor-pointer"
            key={i}
            onClick={() => setIndex(i)}
          >
            {/* Ensure the thumbnail image URL exists */}
            <Image
              src={img.url || '/fallback-image.jpg'} // Fallback if thumbnail URL is missing
              alt={`Thumbnail ${i}`}
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
