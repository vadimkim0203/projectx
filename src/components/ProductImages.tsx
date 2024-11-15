"use client"

import SinglePage from "@/app/[slug]/page";
import Image from "next/image";
import { useState } from "react";

const images = [
  { 
  id: "1eebaa10-4fd4-4fa0-acea-11121b0a7ef8", 
  url: "https://mcfomdkwxjsnyyfremvl.supabase.co/storage/v1/object/public/Products'%20photos/photo_2024-11-05%2012.43.21.jpeg", 
  }, 
  { 
    id: 2, 
    url: "https://media.endclothing.com/media/f_auto,q_auto:eco,w_1024/prodmedia/media/catalog/product/1/9/19-09-24-LS_L47599500_5_1.jpg", 
    }, 
  { 
    id: 3, 
    url: "https://media.endclothing.com/media/f_auto,q_auto:eco,w_1024/prodmedia/media/catalog/product/1/9/19-09-24-LS_L47599500_m9_1.jpg", 
    }, 
    { 
      id: 4, 
      url: "https://media.endclothing.com/media/f_auto,q_auto:eco,w_1024/prodmedia/media/catalog/product/1/9/19-09-24-LS_L47599500_3_1.jpg", 
      }, 

]

const ProductImages = () => {

const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image src={images[index].url}
        alt="" 
        fill sizes="50vw" 
        className="object-cover rounded-md"/>
      </div>

      <div className="flex justify-between gap-4 mt-8">
        {images.map((img,i) => (
          <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={img.id} onClick={()=>setIndex(i)}>
            <Image 
            src={img.url}
            alt="" 
            fill sizes="30vw" 
            className="object-cover rounded-md"/>
        </div>
        ) )}
      </div>
    </div>
  );
};

export default ProductImages;