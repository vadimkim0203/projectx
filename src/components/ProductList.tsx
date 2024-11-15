'use client'

import Image from "next/image";
import Link from "next/link";
import axios from 'axios';
import { useEffect, useState } from "react";
import { SkeletonCard } from "./SkeletonCard";


export const ProductList = () => {
  const [productData, setProductData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    const fetchProductData = async () => {
      try {
      
        // Fetch product data
        const response = await axios.post('https://projectx-backend-supabase.vercel.app/api/products/all', {});
        setProductData(response.data);
        setLoading(false); // Stop loading once data is fetched

      } catch (error) {
        console.error('Error', error);
        setLoading(false); // Stop loading even if there's an error
      }
    };

    fetchProductData();
  }, []);

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {loading ? (
        // Show skeleton placeholders while loading
        Array.from({ length: 5 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))
      ) : (
        // Show product data once it's fetched
        productData && productData.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`} className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
            <div className="relative w-full h-80">
              <Image 
                src={product.image_url[0]}
                alt=""
                fill sizes="25vw" 
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500"
              />
            </div>
            <div className="flex justify-between">
              <span className="font-medium">{product.product_name}</span>
              <span className="font-semibold">{product.product_price}$</span>
            </div>
            <button className="rounded-2xl ring-1 ring-black bg-black text-white w-max py-2 px-4 text-xs hover:bg-white hover:text-black">Add to Cart</button>
          </Link>
        ))
      )}
    </div>
  );
};

export default ProductList;
