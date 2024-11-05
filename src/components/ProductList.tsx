'use client'

import Image from "next/image";
import Link from "next/link";
import axios from 'axios';
import { useEffect, useState } from "react";

const ProductList = () => {
  const [productData, setProductData] = useState<any[]>([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        await axios.post('https://projectx-backend-supabase.vercel.app/api/products/all', {}).then(function (response) {
          setProductData(response.data)
        })
      } catch (error) {
        console.error('Error', error);
      }
      
    }

    fetchProductData();
  }, [])

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
        {productData && productData.map((product) => {
          return (
            <Link key={product.id} href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                  <Image 
                    src={product.image_url[0]}
                    alt=""
                    fill sizes="25vw" 
                    className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500"
                  />
                  {/* <Image 
                  src="https://media.endclothing.com/media/f_auto,q_auto:eco,w_1024/prodmedia/media/catalog/product/1/9/19-09-24-LS_L47599500_m9_1.jpg" 
                  alt="" 
                  fill sizes="25vw"
                  /> */}
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">{product.product_name}</span>
                  <span className="font-semibold">{product.product_price}$</span>
                </div>
                {/* <div className="text-sm text-gray-500">My description</div> */}
                <button className="rounded-2xl ring-1 ring-black bg-black text-white w-max py-2 px-4 text-xs hover:bg-white hover:text-black">Add to Cart</button>
              </Link>
          );
        })}
    </div>
  );
};

export default ProductList;