import binance_1 from "../../assets/binance_1.svg";
import binance_2 from "../../assets/binance_2.svg";
import gray_path from "../../assets/gray_path.svg";

function myshares() {
  return (
    <div className="flex flex-col gap-10 sm:gap-20 w-full">
      <div className="card flex flex-col gap-8">
        <h3 className="uppercase text-2xl font-bold">Daily money pot</h3>
        <div className="flex flex-col sm:flex-row gap-8 justify-between">
          <div className="flex flex-col gap-2">
            <p className="">Total</p>
            <p className="font-bold">$ 0.000</p>
            <p className="text-xs font-light">
              Total value of the daily distributed money pot
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="">Rewards / JPOT</p>
            <p className="font-bold">$ 0.000</p>
            <p className="text-xs font-light">
              Daily distributed rewards / staked JPOT
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-6">
              <img className="w-10" src={binance_1} />
              <span className="text-xl font-bold">
                0.000 <span className="text-[#F0B90A]">BUSD</span>
              </span>
            </div>
            <p className="text-xs font-light">Daily BUSD distributed amount</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-6">
              <img className="w-10" src={binance_1} />
              <span className="text-xl font-bold">
                0.000 <span className="text-[#F0B90A]">WBNB</span>
              </span>
            </div>
            <p className="text-xs font-light">Daily WBNB distributed amount</p>
          </div>
        </div>
        <div className="text-lg border border-[#00FAE3] rounded-2xl px-4 py-2 text-[#00FAE3] text-center">
          The next money pot will start being distributed at block #7820234
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row gap-10 sm:gap-20">
        <div className="card flex flex-col gap-8">
          <h3 className="uppercase text-2xl font-bold">JPOT</h3>
          <div className="flex flex-col sm:flex-row gap-10 justify-between">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2 w-full flex-1">
                <p className="">Wallet</p>
                <p className="font-bold">116.315 JPOT</p>
                <p className="text-xs font-light">
                  Your wallet’s total JPOT holdings
                </p>
              </div>
              <div className="flex flex-col gap-2 w-full flex-1">
                <p className="">Remaining time until 1:1 ratio</p>
                <p className="font-bold">0d 00h 00m</p>
                <p className="text-xs font-light">
                  End of the 30% adjustment for all your JPOT balance
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2 w-full flex-1">
                <p className="">Total circulation supply</p>
                <p className="font-bold">126,171.67 JPOT</p>
                <p className="text-xs font-light">
                  Total JPOT currently held by all Urbanium users
                </p>
              </div>
              <div className="flex flex-col gap-2 w-full flex-1">
                <p className="">My shares</p>
                <p className="font-bold">0.09075 %</p>
                <p className="text-xs font-light">
                  Your share of the current JPOT supply
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card flex flex-col gap-8 flex-grow">
          <h3 className="text-2xl font-bold">My pending rewards</h3>
          <div className="flex px-3 sm:px-6 py-4 justify-between w-full rounded-2xl bg-[#2A3A5F]">
            <span className="my-auto">Total:</span>
            <span className="font-bold text-lg">$ 0.000</span>
            <span className="flex gap-2">
              <span className="text-xs my-auto">00.00%</span>
              <img className="w-5 my-auto" src={gray_path} />
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex gap-5">
                <img className="w-16" src={binance_1} />
                <div className="flex flex-col gap-3 font-bold">
                  <span>0.000</span>
                  <span className="text-[#F0B90A]">BUSD</span>
                </div>
              </div>
              <button className="w-full border border-[#00FAE3] rounded-2xl px-3 py-2 text-[#00FAE3]">
                Harvest BUSD
              </button>
            </div>
            <div className="flex-1 flex flex-col gap-5">
              <div className="flex gap-5">
                <img className="w-16" src={binance_2} />
                <div className="flex flex-col gap-3 font-bold">
                  <span>0.000</span>
                  <span className="text-[#F0B90A]">WBNB</span>
                </div>
              </div>
              <button className="w-full border border-[#00FAE3] rounded-2xl px-3 py-2 text-[#00FAE3]">
                Harvest WBNB
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card flex flex-col gap-8">
        <h3 className="">Swap</h3>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
          <div className="bg-[#2A3A5F] rounded-2xl px-8 py-6 flex flex-col sm:flex-row gap-6 font-bold flex-grow">
            <div className="flex justify-between flex-1">
              <p className="my-auto">0</p>
              <p className="my-auto">POT</p>
            </div>
            <div className="flex-1 border border-[#00FAE3] rounded-2xl px-5 py-1.5 text-[#00FAE3] text-center font-normal my-auto cursor-pointer">
              MAX
            </div>
          </div>
          <div className="bg-[#2A3A5F] rounded-2xl px-8 py-6 flex items-center flex-1">
            <button className="rounded-2xl border-2 border-[#C9D5F8] px-5 py-1.5 text-center w-full">
              Swap
            </button>
          </div>
          <div className="bg-[#2A3A5F] rounded-2xl px-8 py-6 flex flex-col gap-4 flex-1">
            <p className="font-bold">0 POT</p>
            <p className="text-xs font-light">No POT will be burnt</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default myshares;
