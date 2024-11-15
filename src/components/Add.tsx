"use client"

import { useState } from "react";

const Add = () => {

  const [quantity,setQuantity] = useState(1)

  // TEMPORARY
  const stock = 5

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }

    if (type === "i" && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
        <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
          <button className="cursor-pointer text-xl" onClick={() => handleQuantity("d")}>-</button>
          {quantity}
          <button className="cursor-pointerpointer text-xl" onClick={() => handleQuantity("i")}>+</button>
        </div>
        {/* no need to show the stock qties below */}
        {/* <div className="text-xs">5 Items in stock</div>  */} 
    
      </div>
      <button className="w-36 text-sm rounded-3xl ring-1 ring-black bg-black text-white py-2 px-4 hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:bg-black disabled:text-white disabled:ring-none ">Add to Cart</button>
      </div>
      
    </div>
  );
};

export default Add;