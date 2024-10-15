import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className='text-2xl tracking-wide'>TROVE</div>
          </Link>
          <p className="">Seoul, South Korea</p>
          <span className="font-semibold">oceanstorecs@gmail.com</span>
          <span className="font-semibold">+82 10 43750585</span>
          <div className="flex gap-6">
            <Image src="/icons/instagram.png" alt="" width={20} height={20}/>
            <Image src="/icons/facebook.png" alt="" width={20} height={20}/>
            <Image src="/icons/youtube.png" alt="" width={20} height={20}/>
            <Image src="/icons/x.png" alt="" width={20} height={20}/>
          </div>
        </div>
        {/* CENTER */}
        <div className="w-1/2 hidden lg:flex justify-between">
          <div className="flex flex-col gap-6">
            <h1 className="font-md text-lg">COMPANY</h1>
            <div className="flex flex-col justify-between">
              <Link href="">About Us</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p className="">Be the first to get the latest news about trends, promotions and much more!</p>
          <div className="flex">
            <input 
            type="text" 
            placeholder="Email address" 
            className="p-4 w-3/4 " 
            />
            <button className="w-1/4 bg-black text-white">JOIN</button>
          </div>
            <span className="font-semibold">Secure Payments</span>
              <div className="flex justify-between">
                <Image src="/icons/visa.png" alt="" width={40} height={20}/>
                <Image src="/icons/mastercard.png" alt="" width={40} height={20}/>
                <Image src="/icons/paypal.png" alt="" width={40} height={20}/>
              </div>
          </div>
        </div>
      
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">2024 Trove Store</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">Korea | English</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">$ USD</span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Footer