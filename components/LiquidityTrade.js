import { ChevronDownIcon } from "@heroicons/react/solid";

function LiquidityTrade() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex bg-[#2A3A5F] justify-between p-10 rounded-2xl">
        <div className="flex flex-1 flex-col gap-3">
          <p className="font-light">From</p>
          <p className="font-bold text-lg">0.0</p>
        </div>
        <div className="flex flex-1 flex-col mt-auto">
          <p className="text-[#00FAE3] font-bold text-lg cursor-pointer">MAX</p>
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <p className="font-light">Balance: 0.396</p>
          <p className="font-bold text-lg cursor-pointer">BNB (drop)</p>
        </div>
      </div>
      <div className="mx-auto">
        <ChevronDownIcon className="w-10 text-[#00FAE3]" />
      </div>
      <div className="flex bg-[#2A3A5F] justify-between p-10 rounded-2xl">
        <div className="flex flex-1 flex-col gap-3">
          <p className="font-light">To</p>
          <p className="font-bold text-lg">0.0</p>
        </div>
        <div className="flex flex-1 flex-col mt-auto">
          <p className="text-[#00FAE3] font-bold text-lg cursor-pointer">MAX</p>
        </div>
        <div className="flex flex-1 flex-col gap-3">
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

export default LiquidityTrade;
