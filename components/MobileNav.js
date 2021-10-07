import { MenuIcon } from "@heroicons/react/outline";
import moneypot_logo_mobile from "../assets/moneypot_logo_mobile.svg";
import Link from "next/link";

function MobileNav({ setMobileSide }) {
  return (
    <div className="flex sm:flex-grow-0 justify-between sm:hidden">
      <MenuIcon className="w-8" onClick={() => setMobileSide(true)} />
      <Link href="/app" className="flex items-center">
        <img className="w-8" src={moneypot_logo_mobile} />
      </Link>
    </div>
  );
}

export default MobileNav;
