"use client"

import Image from "next/image"

const CartModal = () => {

  const cartItems = true

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart is Empty</div>
      ):
      (
        <>
        <h2 className="text-xl">Shopping cart</h2>
      {/* LIST */}
      <div className="flex flex-col gap-8">
        {/* ITEM */}
        <div className="flex gap-4">
          <Image src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800" 
          alt="" 
          width={72} 
          height={96} 
          className="object-cover rounded-md"/>
          <div className=" flex flex-col justify-between w-full">
            {/* TOP */}
              <div className="">
                {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Sapogi Skorohody</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$500</div>
                  </div>
                {/* DESCRIPTION */}
                <div className="text-sm text-gray-500">description</div>
              </div>

            {/* BOTTOM */}
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Quantity 2</span>
              <span className="text-blue-500">Remove</span>

            </div>

          </div>
        </div>
        {/* ITEM */}
        <div className="flex gap-4">
          <Image src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800" 
          alt="" 
          width={72} 
          height={96} 
          className="object-cover rounded-md"/>
          <div className=" flex flex-col justify-between w-full">
            {/* TOP */}
              <div className="">
                {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Shoostrie Pedali</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$325</div>
                  </div>
                {/* DESCRIPTION */}
                <div className="text-sm text-gray-500">description</div>
              </div>

            {/* BOTTOM */}
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Quantity 2</span>
              <span className="text-blue-500">Remove</span>

            </div>

          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="">
        <div className="flex items-center justify-between font-semibold">
          <span className="">Subtotal</span>
          <span className="">Amount</span>
        </div>
        <p className="text-gray-500 text-sm mt-2 mb-4">Shipping and taxes calculated at checkout</p>
        <div className="flex justify-between text-sm">
          <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">View cart</button>
          <button className="rounded-md py-3 px-4 bg-black text-white">Checkout</button>
        </div>
      </div>
      </>
    )}
    </div>
  )
}
export default CartModal 