import Link from "next/link";
import Menu from "./menu";

const Navbar = () => {


  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64'>
      {/* MOBILE */}
      <Link href="/">PROJECTX</Link>
      <Menu/>
    </div>
  )
};

export default Navbar