import Image from "next/image";
import Link from "next/link";

const ProfilePage = () => {
  
  return (
    <div className="flex flex-col md:flex-row gap-24 h-[calc(100vh-180px)] items-center px-4 md:px-6 lg:px-16 xl:px-32 2xl:px-64">
      <div className="">User Information</div>
      <div className="">Orders</div>
    </div>
  );
};

export default ProfilePage;