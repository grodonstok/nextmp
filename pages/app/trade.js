import { useState } from "react";
import ExchangeTrade from "../../components/ExchangeTrade";
import LiquidityTrade from "../../components/LiquidityTrade";
import TransactionsTrade from "../../components/TransactionsTrade";

function trade() {
  const [tab, setTab] = useState(1);
  return (
    <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 w-full">
      <div className="flex-1 flex">
        <div className="card w-full flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <div className="flex">
              <div
                className={`${
                  tab === 1 ? "text-[#00FAE3]" : ""
                } text-center flex-1 text-lg font-bold transition-all cursor-pointer`}
                onClick={() => setTab(1)}
              >
                Exchange
              </div>
              <div
                className={`${
                  tab === 2 ? "text-[#00FAE3]" : ""
                } text-center flex-1 text-lg font-bold transition-all cursor-pointer`}
                onClick={() => setTab(2)}
              >
                Liquidity
              </div>
            </div>
            <div className="flex w-full transition-all">
              <div
                className={`${
                  tab === 2 ? "w-1/2 border-b border-[#161C31]" : "w-0"
                } border-opacity-50 transition-all`}
              ></div>
              <div className="w-1/2 h-1 bg-[#00FAE3] rounded-t-md transition-all"></div>
              <div
                className={`${
                  tab === 1 ? "w-1/2" : "w-0"
                } border-b border-[#161C31] transition-all border-opacity-50`}
              ></div>
            </div>
          </div>
          {tab === 1 ? <ExchangeTrade /> : <LiquidityTrade />}
        </div>
      </div>
      <div className="hidden flex-1 sm:flex">
        <div className="card w-full flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-xl">Recent transactions</h3>
						<TransactionsTrade />
            {/* <div className="flex justify-center bg-[#2A3A5F] rounded-2xl p-3 gap-2 whitespace-nowrap">
              <span className="font-light">Swap</span>
              <span className="font-bold">1990000 CATE</span>
              <span className="font-light">for</span>
              <span className="font-bold">950 BUSD</span>
            </div> */}
          </div>
          <div className="w-full h-0.5 bg-[#161C31] bg-opacity-50"></div>
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-xl">Settings</h3>
            <div className="flex flex-col bg-[#2A3A5F] p-10 rounded-2xl gap-4">
              <p className="font-light">Slippage tolerance:</p>
							<div className="flex gap-5 font-bold text-center">
								<div className="px-5 py-2 rounded-2xl bg-[#00FAE3] text-[#2A3A5F]">0.1%</div>
								<div className="px-5 py-2 rounded-2xl bg-[#00FAE3] bg-opacity-20">0.5%</div>
								<div className="px-5 py-2 rounded-2xl bg-[#00FAE3] bg-opacity-20">1%</div>
								<div className="px-5 py-2 flex-1 rounded-2xl bg-[#C9D5F8] bg-opacity-30">0.1%</div>
							</div>
            </div>
						<div className="flex flex-col bg-[#2A3A5F] p-10 rounded-2xl gap-4">
              <p className="font-light">Transaction deadline:</p>
							<div className="flex relative w-full">
								<input
          className="rounded-2xl bg-[#888fa7] w-full text-[#C9D5F8] text-center p-2 bg-opacity-30 outline-none focus:outline-none"
          value="200"
        />
								<span className="absolute right-5 top-2 text-[#C9D5F8]">Minutes</span>
							</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default trade;
