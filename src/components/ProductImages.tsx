"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageProps {
  url: string;
}

const ProductImages = ({ images }: { images: ImageProps[] }) => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <Image src={images[index].url}
        alt=""
        fill={true}
        sizes="25vw" 
        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500"
      />
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill={true}
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>

      <div className="flex justify-between gap-4 mt-8">
        {images.map((img, i) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={i}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
              alt=""
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
