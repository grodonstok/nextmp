import {MenuIcon} from "@heroicons/react/outline"
import moneypot_logo_mobile from "../assets/moneypot_logo_mobile.svg"

function MobileNav({setMobileSide}) {
	return (
			<div className="flex sm:flex-grow-0 justify-between sm:hidden">
				<MenuIcon className="w-8" onClick={() => setMobileSide(true)} />
				<img className="w-8" src={moneypot_logo_mobile} />
			</div>
	)
}

export default MobileNav
