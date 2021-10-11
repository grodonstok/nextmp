import { MenuIcon } from "@heroicons/react/outline";
import moneypot_logo_mobile from "../assets/moneypot_logo_mobile.svg";
import Link from "next/link";

function MobileNav({ setMobileSide, route }) {
  return (
    <div className="flex fixed top-0 left-0 right-0 p-6 bg-[#161C31] z-20 sm:flex-grow-0 justify-between md:hidden">
      <MenuIcon className="w-8" onClick={() => setMobileSide(true)} />
      <Link href={route} className="flex items-center">
        <img className="w-8" src={moneypot_logo_mobile} />
      </Link>
    </div>
  );
}

export default MobileNav;
