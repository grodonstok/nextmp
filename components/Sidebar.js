import SidebarItem from "./SidebarItem";
import { HomeIcon, XIcon } from "@heroicons/react/outline";
import ConnectButton from "./ConnectButton";
import moneypot_logo from "../assets/moneypot_logo.svg";
import MobileNav from "./MobileNav";
import icon_dashboard from "../assets/icon_dashboard.svg";
import icon_dashboard_active from "../assets/icon_dashboard_active.svg";
import icon_trade from "../assets/icon_trade.svg";
import icon_trade_active from "../assets/icon_trade_active.svg";

function Sidebar({ mobileSide, setMobileSide }) {
  return (
    <>
      <MobileNav setMobileSide={setMobileSide} />
      <div
        className={`${
          mobileSide ? "left-0" : "-left-96"
        } flex sm:-left-0 fixed z-30 top-0 bottom-0 w-2/3 sm:relative sm:flex flex-col bg-gradient-to-b from-[#2A3A5F] to-[#1A2539] rounded-r-3xl sm:rounded-3xl sm:w-1/6 p-6 sm:p-12 items-start sm:items-center space-y-5 sm:space-y-0 sm:justify-between transition-all`}
      >
        <div className="hidden sm:block">
          <img src={moneypot_logo} />
        </div>
        <div className="sm:hidden ml-auto">
          <XIcon className="w-6" onClick={() => setMobileSide(false)} />
        </div>
        <div className="space-y-5 sm:space-y-8 w-full">
          <SidebarItem title="Home" Icon={HomeIcon} page="/app" />
          <SidebarItem
            title="Dashboard"
            Image={icon_dashboard}
            ImageActive={icon_dashboard_active}
            page="/app/dashboard"
          />
          <SidebarItem
            title="Trade"
            Image={icon_trade}
            ImageActive={icon_trade_active}
            page="/app/trade"
          />
          <SidebarItem title="Farms" Icon={HomeIcon} page="/app/farms" />
          <SidebarItem title="Pools" Icon={HomeIcon} page="/app/pools" />
          <SidebarItem title="My shares" Icon={HomeIcon} page="/app/myshares" />
        </div>
        <ConnectButton title="Connect" />
      </div>
    </>
  );
}

export default Sidebar;
