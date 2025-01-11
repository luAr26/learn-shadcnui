import ModeToggle from "@/components/mode-toggle";
import Link from "next/link";

function Navbar() {
  return (
    <div className='flex max-w-5xl mx-auto border-b border-gray-200 dark:border-gray-700 items-center justify-between py-4'>
      <Link href='/' className='font-bold'>
        Logo
      </Link>
      <ModeToggle />
    </div>
  );
}

export default Navbar;
