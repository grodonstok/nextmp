import SidebarItem from "./SidebarItem"
import {HomeIcon} from "@heroicons/react/outline"
import ConnectButton from "./ConnectButton"
import moneypot_logo from "../assets/moneypot_logo.svg"

function Sidebar() {
	return (
		<div className="flex flex-col bg-gradient-to-b from-[#2A3A5F] to-[#1A2539] rounded-3xl w-1/6 p-12 items-center justify-between">
			<div className="">
				<img src={moneypot_logo} />
			</div>
			<div className="space-y-10 w-full">
				<SidebarItem title="Home" Icon={HomeIcon} page="home" />
				<SidebarItem title="Dashboard" Icon={HomeIcon} page="home" />
				<SidebarItem title="Trade" Icon={HomeIcon} page="home" />
				<SidebarItem title="Farms" Icon={HomeIcon} page="home" />
				<SidebarItem title="Pools" Icon={HomeIcon} page="home" />
				<SidebarItem title="My shares" Icon={HomeIcon} page="home" />
			</div>
			<ConnectButton />
		</div>
	)
}

export default Sidebar
