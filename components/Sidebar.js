import SidebarItem from "./SidebarItem";
import { HomeIcon, XIcon } from "@heroicons/react/outline";
import ConnectButton from "./ConnectButton";
import moneypot_logo from "../assets/moneypot_logo.svg";
import MobileNav from "./MobileNav";
import icon_home from "../assets/icon_home.svg";
import icon_home_active from "../assets/icon_home_active.svg";
import icon_dashboard from "../assets/icon_dashboard.svg";
import icon_dashboard_active from "../assets/icon_dashboard_active.svg";
import icon_trade from "../assets/icon_trade.svg";
import icon_trade_active from "../assets/icon_trade_active.svg";
import icon_farms from "../assets/icon_farms.svg";
import icon_farms_active from "../assets/icon_farms_active.svg";
import icon_pools from "../assets/icon_pools.svg";
import icon_pools_active from "../assets/icon_pools_active.svg";
import icon_shares from "../assets/icon_shares.svg";
import icon_shares_active from "../assets/icon_shares_active.svg";
import Account from "./Account";

function Sidebar({ mobileSide, setMobileSide }) {
  return (
    <>
      <MobileNav setMobileSide={setMobileSide} />
      <div
        className={`${
          mobileSide ? "left-0" : "-left-96"
        } sm:-left-0 fixed z-30 sm:my-16 top-0 bottom-0 w-2/3 sm:w-1/6 sm:relative transition-all ease-in`}
      >
        <div className="flex flex-col h-full sm:h-auto sm:relative items-start sm:items-center space-y-5 sm:space-y-0 gap-10 sm:gap-32 sm:justify-between bg-gradient-to-b from-[#2A3A5F] to-[#1A2539] rounded-r-3xl sm:rounded-3xl p-6 sm:p-12">
          <div className="hidden sm:block">
            <img src={moneypot_logo} />
          </div>
          <div className="sm:hidden ml-auto">
            <XIcon className="w-6" onClick={() => setMobileSide(false)} />
          </div>
          <div className="space-y-5 sm:space-y-8 w-full">
            <SidebarItem
              title="Home"
              Image={icon_home}
              ImageActive={icon_home_active}
              setMobileSide={setMobileSide}
              page="/app"
            />
            <SidebarItem
              title="Dashboard"
              Image={icon_dashboard}
              ImageActive={icon_dashboard_active}
              setMobileSide={setMobileSide}
              page="/app/dashboard"
            />
            <SidebarItem
              title="Trade"
              Image={icon_trade}
              ImageActive={icon_trade_active}
              setMobileSide={setMobileSide}
              page="/app/trade"
            />
            <SidebarItem
              title="Farms"
              Image={icon_farms}
              ImageActive={icon_farms_active}
              setMobileSide={setMobileSide}
              page="/app/farms"
            />
            <SidebarItem
              title="Pools"
              Image={icon_pools}
              ImageActive={icon_pools_active}
              setMobileSide={setMobileSide}
              page="/app/pools"
            />
            <SidebarItem
              title="My shares"
              Image={icon_shares}
              ImageActive={icon_shares_active}
              setMobileSide={setMobileSide}
              page="/app/myshares"
            />
          </div>
          <Account title="Connect" classes="w-full p-2" sidebar={true} />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
