import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import icon_setting from "../assets/icon_setting.svg";
import icon_history from "../assets/icon_history.svg";
import ExchangeSettingModal from "./ExchangeSettingModal";
import ExchangeTransactionsModal from "./ExchangeTransactionsModal";

function ExchangeTrade() {
  const [modal, showModal] = useState(null);

  return (
    <div className="flex relative flex-col gap-4 sm:gap-10">
      {modal === "setting" ? (
        <ExchangeSettingModal showModal={showModal} />
      ) : (
        ""
      )}
      {modal === "history" ? (
        <ExchangeTransactionsModal showModal={showModal} />
      ) : (
        ""
      )}
      <div className="flex justify-between sm:hidden">
        <span>Exchange</span>
        <div className="flex gap-5">
          <img className="w-4 cursor-pointer" src={icon_setting} onClick={() => showModal('setting')} />
          <img className="w-4 cursor-pointer" src={icon_history} onClick={() => showModal('history')} />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row bg-[#2A3A5F] justify-between p-10 rounded-2xl gap-5">
        <div className="flex flex-1 flex-col sm:gap-3">
          <p className="font-light">From</p>
          <p className="font-bold text-lg">0.0</p>
        </div>
        <div className="flex flex-1 flex-col mt-auto">
          <p className="text-[#00FAE3] font-bold text-lg cursor-pointer">MAX</p>
        </div>
        <div className="flex flex-1 flex-col sm:gap-3">
          <p className="font-light">Balance: 0.396</p>
          <p className="font-bold text-lg cursor-pointer">BNB (drop)</p>
        </div>
      </div>
      <div className="mx-auto">
        <ChevronDownIcon className="w-10 text-[#00FAE3]" />
      </div>
      <div className="flex flex-col sm:flex-row bg-[#2A3A5F] justify-between p-10 rounded-2xl gap-5">
        <div className="flex flex-1 flex-col sm:gap-3">
          <p className="font-light">To</p>
          <p className="font-bold text-lg">0.0</p>
        </div>
        <div className="flex flex-1 flex-col mt-auto">
          <p className="text-[#00FAE3] font-bold text-lg cursor-pointer">MAX</p>
        </div>
        <div className="flex flex-1 flex-col sm:gap-3">
          <p className="font-light">-</p>
          <p className="font-bold text-lg cursor-pointer whitespace-nowrap">
            Select currency (drop)
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <span className="">Slippage Tolerance</span>
          <span className="">25%</span>
        </div>
        <input
          className="rounded-2xl bg-[#C9D5F8] text-[#C9D5F8] text-center p-2 bg-opacity-30 outline-none focus:outline-none"
          placeholder="Enter an amount"
        />
      </div>
    </div>
  );
}

export default ExchangeTrade;
