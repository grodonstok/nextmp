import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import icon_setting from "../assets/icon_setting.svg";
import icon_history from "../assets/icon_history.svg";
import TradeSettingModal from "./TradeSettingModal";
import TradeTransactionsModal from "./TradeTransactionsModal";
import Dropdown from "./Dropdown";

function TradeForm({ tab, deadline, slippageSetting }) {
  const [modal, showModal] = useState(null);
  const [from, setFrom] = useState(0.0);
  const [fromBalance, setFromBalance] = useState(0.368);
  const [fromCurr, setFromCurr] = useState(null);

  const [to, setTo] = useState(0.0);
  const [toBalance, setToBalance] = useState(0.368);
  const [toCurr, setToCurr] = useState(null);

  const changeFrom = (e) => {
    setFrom(e.target.value);
  };

  const changeFromCurr = (s) => {
    setFrom(0);
    setFromCurr(s);
  };

  const changeTo = (e) => {
    setTo(e.target.value);
  };

  const changeToCurr = (s) => {
    setTo(0);
    setToCurr(s);
  };

  return (
    <div className="flex relative flex-col gap-4 sm:gap-10">
      {modal === "setting" ? <TradeSettingModal showModal={showModal} /> : ""}
      {modal === "history" ? (
        <TradeTransactionsModal showModal={showModal} />
      ) : (
        ""
      )}
      <div className="flex justify-between sm:hidden">
        <span>{tab === 1 ? "Exchange" : "Liquidity"}</span>
        <div className="flex gap-5">
          <img
            className="w-4 cursor-pointer"
            src={icon_setting}
            onClick={() => showModal("setting")}
          />
          <img
            className="w-4 cursor-pointer"
            src={icon_history}
            onClick={() => showModal("history")}
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row bg-[#2A3A5F] justify-between p-10 rounded-2xl gap-5">
        <div className="flex flex-1 flex-col sm:gap-3">
          <p className="font-light">From</p>
          <input
            className="font-bold text-lg bg-transparent outline-none focus:outline-none w-full"
            onChange={changeFrom}
            value={from}
          />
        </div>
        <div className="flex flex-1 flex-col mt-auto">
          <div
            className="text-[#00FAE3] font-bold text-lg cursor-pointer"
            onClick={() => setFrom(fromBalance)}
          >
            MAX
          </div>
        </div>
        <div className="flex flex-1 flex-col sm:gap-3">
          <p className="font-light">
            {fromCurr ? `Balance: ${fromBalance}` : "-"}
          </p>
          <Dropdown
            title="Select Currency"
            items={["BNB", "BUSD", "WBNB"]}
            change={changeFromCurr}
          />
        </div>
      </div>
      <div className="mx-auto">
        <ChevronDownIcon className="w-10 text-[#00FAE3]" />
      </div>
      <div className="flex flex-col sm:flex-row bg-[#2A3A5F] justify-between p-10 rounded-2xl gap-5">
        <div className="flex flex-1 flex-col sm:gap-3">
          <p className="font-light">To</p>
          <input
            className="font-bold text-lg bg-transparent outline-none focus:outline-none w-full"
            onChange={changeTo}
            value={to}
          />
        </div>
        <div className="flex flex-1 flex-col mt-auto">
          <div
            className="text-[#00FAE3] font-bold text-lg cursor-pointer"
            onClick={() => setTo(toBalance)}
          >
            MAX
          </div>
        </div>
        <div className="flex flex-1 flex-col sm:gap-3">
          <p className="font-light">{toCurr ? `Balance: ${toBalance}` : "-"}</p>
          <Dropdown
            title="Select Currency"
            items={["BNB", "BUSD", "WBNB"]}
            change={changeToCurr}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <span className="">Slippage Tolerance</span>
          <span className="">{slippageSetting} %</span>
        </div>
        <button
          className={`${
            to && from
              ? "bg-[#00FAE3] text-[#1C273D]"
              : "bg-[#C9D5F8] text-[#C9D5F8] bg-opacity-30"
          } rounded-2xl text-center p-2 outline-none focus:outline-none transition-all`}
        >
          {to && from ? (tab === 1 ? "Swap" : "Liquid") : "Enter an amount"}
        </button>
      </div>
    </div>
  );
}

export default TradeForm;
