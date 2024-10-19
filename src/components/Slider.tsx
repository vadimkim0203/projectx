"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1, 
    title: "Trove - Uncover Your Style Treasure", 
    description: "" , 
    img: "https://media.endclothing.com/end-features/f_auto,q_auto:eco,w_1520/prodfeatures/Zw0dgoF3NbkBXZ4E_14-10-24_WinterEditorial_FeaturesLandscape_EB03.jpg?auto=format,compress", 
    url: "/",
    bg: "bg-gradient-to-r from-gray-50 to-black-50"
  },
  {
    id: 2, 
    title: "Trove - Uncover Your Style Treasure", 
    description: "" , 
    img: "https://www.fromwhere.co.kr/web/upload/NNEditor/20240823/E1848EE185ACE1848CE185A9E186BC11.jpg", 
    url: "/",
    bg: "bg-gradient-to-r from-gray-50 to-black-50"
  },
  {
    id: 3, 
    title: "Trove - Uncover Your Style Treasure", 
    description: "" , 
    img: "https://media.endclothing.com/end-features/f_auto,q_auto:eco,w_1520/prodfeatures/Zw0dgYF3NbkBXZ4C_14-10-24_WinterEditorial_FeaturesLandscape_EB02.jpg?auto=format,compress", 
    url: "/",
    bg: "bg-gradient-to-r from-gray-50 to-black-50"
  }

];

const Slider = () => {
  const [current, setCurrent] =useState(0)

  // useEffect(()=>{
  //   const interval = setInterval(()=>{
  //     setCurrent(prev=>(prev === slides.length - 1 ? 0:prev+1))
  //   }, 5000 )
  //   return () =>clearInterval(interval);
  // }, [])

  return (
    <div className="h-[calc(100vh - 80px)] overflow-hidden">
      <div 
        className="w-max h-full flex transition-all ease-in-out duration-1000" 
        style={{transform:`translateX(-${current * 100}vw)`}}>
        {slides.map(slide=>(
          <div className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`} key={slide.id}>
            {/* TEXT CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex items-center justify-center gap-8 2xl:gap-12 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">{slide.description}</h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">{slide.title}</h1>
              <Link href={slide.url}>
                <button className="rounded-md bg-black text-white text-sm py-1 px-10">Shop now</button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full relative">
              <Image src={slide.img} alt="" fill sizes="100%" className="object-cover"/> 
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {slides.map((slide, index) => (
          <div className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${current === index ? "scale-150" : ""}`} 
          key={slide.id} 
          onClick={()=>setCurrent(index)}>
            {current === index && (<div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;