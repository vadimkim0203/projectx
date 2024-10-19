import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image 
          src="https://www.fromwhere.co.kr/web/upload/NNEditor/20240829/copy-1724925812-E1848CE185A1E18489E185A1E18486E185A9E186AFE18489E185A1E186BCE18489E185A628E18489E185AEE1848CE185A5E186BC29.jpg" 
          alt="" 
          fill 
          sizes="25vw" 
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500"
          />
          <Image 
          src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800" 
          alt="" 
          fill sizes="25vw"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">129$</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-black bg-black text-white w-max py-2 px-4 text-xs hover:bg-white hover:text-black">Add to Cart</button>
      </Link>
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image 
          src="https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="" 
          fill 
          sizes="25vw" 
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500"
          />
          <Image 
          src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800" 
          alt="" 
          fill sizes="25vw"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">129$</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-black bg-black text-white w-max py-2 px-4 text-xs hover:bg-white hover:text-black">Add to Cart</button>
      </Link>
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image 
          src="https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="" 
          fill 
          sizes="25vw" 
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500"
          />
          <Image 
          src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800" 
          alt="" 
          fill sizes="25vw"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">129$</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-black bg-black text-white w-max py-2 px-4 text-xs hover:bg-white hover:text-black">Add to Cart</button>
      </Link>
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image 
          src="https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="" 
          fill 
          sizes="25vw" 
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500"
          />
          <Image 
          src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800" 
          alt="" 
          fill sizes="25vw"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">129$</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-black bg-black text-white w-max py-2 px-4 text-xs hover:bg-white hover:text-black">Add to Cart</button>
      </Link>
    </div>
  );
};

export default ProductList;