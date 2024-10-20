import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image 
          src="https://media.endclothing.com/media/f_auto,q_auto:eco,w_1024/prodmedia/media/catalog/product/1/9/19-09-24-LS_L47599500_1_1.jpg" 
          alt="" 
          fill sizes="25vw" 
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500"
          />
          <Image 
          src="https://media.endclothing.com/media/f_auto,q_auto:eco,w_1024/prodmedia/media/catalog/product/1/9/19-09-24-LS_L47599500_m9_1.jpg" 
          alt="" 
          fill sizes="25vw"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">The Salomon ACS Pro GORE-TEX</span>
          <span className="font-semibold">129$</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 ring-black bg-black text-white w-max py-2 px-4 text-xs hover:bg-white hover:text-black">Add to Cart</button>
      </Link>
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image 
          src="https://media.endclothing.com/media/f_auto,q_auto:eco,w_1024/prodmedia/media/catalog/product/2/9/29-08-24-LS_MR993NV_1_1.jpg" 
          alt="" 
          fill 
          sizes="25vw" 
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500"
          />
          <Image 
          src="https://media.endclothing.com/media/f_auto,q_auto:eco,w_1024/prodmedia/media/catalog/product/2/9/29-08-24-LS_MR993NV_m9_1.jpg" 
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
          src="https://media.endclothing.com/media/f_auto,q_auto:eco,w_1024/prodmedia/media/catalog/product/2/9/29-08-24-LS_MR993NV_1_1.jpg" 
          alt="" 
          fill 
          sizes="25vw" 
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500"
          />
          <Image 
          src="https://media.endclothing.com/media/f_auto,q_auto:eco,w_1024/prodmedia/media/catalog/product/2/9/29-08-24-LS_MR993NV_m9_1.jpg" 
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
          src="https://media.endclothing.com/media/f_auto,q_auto:eco,w_1024/prodmedia/media/catalog/product/2/9/29-08-24-LS_MR993NV_1_1.jpg" 
          alt="" 
          fill 
          sizes="25vw" 
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500"
          />
          <Image 
          src="https://media.endclothing.com/media/f_auto,q_auto:eco,w_1024/prodmedia/media/catalog/product/2/9/29-08-24-LS_MR993NV_m9_1.jpg" 
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