import { getServerSession } from "next-auth";
import { authOptions } from "../utils/authOptions";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!session && !user) {
    redirect('/');
  }

  return (
    <div className="flex flex-col md:flex-row gap-24 h-[calc(100vh-180px)] items-center px-4 md:px-6 lg:px-16 xl:px-32 2xl:px-64">
      <div className="">User Information: {user?.name}</div>
      <div className="">Orders</div>
    </div>
  );
};

export default ProfilePage;