import green_path from "../../assets/green_path.svg";
import red_path from "../../assets/red_path.svg";
import gray_path from "../../assets/gray_path.svg";
import pot_token from "../../assets/pot_token.svg";
import jpot_token from "../../assets/jpot_token.svg";
import binance_1 from "../../assets/binance_1.svg";
import binance_2 from "../../assets/binance_2.svg";

function dashboard() {
  return (
    <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 w-full">
      <div className="flex-1 flex flex-col space-y-10 sm:space-y-20">
        <div className="card w-full flex flex-col gap-3">
          <div className="uppercase font-semibold tracking-wide text-xl">
            global stats
          </div>
          <div className="flex flex-col sm:flex-row gap-6 w-full">
            <div className="flex flex-col flex-1 gap-2 sm:gap-3">
              <p>Token Value Locked (TVL)</p>
              <p className="font-bold">100.00 $</p>
              <div className="flex gap-2">
                <span className="text-xs text-[#00FAE3]">+50.00%</span>
                <img className="w-5" src={green_path} />
              </div>
            </div>
            <div className="flex flex-col flex-1 gap-2 sm:gap-3">
              <p>POT price</p>
              <p className="font-bold">30.00 $</p>
              <div className="flex gap-2">
                <span className="text-xs text-[#F78585]">-50.00%</span>
                <img className="w-5" src={red_path} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 w-full">
          <div className="card flex flex-col items-center gap-6 flex-grow">
            <div className="flex flex-col items-center gap-3">
              <img src={pot_token} />
              <p className="font-light">Circulating supply</p>
              <p className="font-bold text-lg">0.00 POT</p>
            </div>
            <div className="flex flex-col items-center w-full gap-2">
              <div className="w-full items-center flex">
                <p className="w-1/2 font-light text-xs whitespace-nowrap">
                  Total minted
                </p>
                <p className="w-1/2 font-light text-xs text-[#00FAE3]">
                  0.00 POT
                </p>
              </div>
              <div className="w-full flex">
                <p className="w-1/2 font-light text-xs whitespace-nowrap">
                  Total burnt
                </p>
                <p className="w-1/2 font-light text-xs text-[#00FAE3]">
                  0.00 POT
                </p>
              </div>
              <div className="w-full flex">
                <p className="w-1/2 font-light text-xs whitespace-nowrap">
                  Marketcap
                </p>
                <p className="w-1/2 font-light text-xs text-[#00FAE3]">$ 0</p>
              </div>
              <div className="w-full flex">
                <p className="w-1/2 font-light text-xs whitespace-nowrap">
                  Emission rate
                </p>
                <p className="w-1/2 font-light text-xs text-[#00FAE3]">
                  0 / block
                </p>
              </div>
            </div>
          </div>
          <div className="card flex flex-col items-center gap-6 flex-grow">
            <div className="flex flex-col items-center gap-3">
              <img src={jpot_token} />
              <p className="font-light">Circulating supply</p>
              <p className="font-bold text-lg">0.00 JPOT</p>
            </div>
            <div className="flex flex-col items-center w-full gap-2">
              <div className="w-full items-center flex">
                <p className="w-1/2 font-light text-xs whitespace-nowrap">
                  Total minted
                </p>
                <p className="w-1/2 font-light text-xs text-[#00FAE3]">
                  0.00 JPOT
                </p>
              </div>
              <div className="w-full flex">
                <p className="w-1/2 font-light text-xs whitespace-nowrap">
                  Total burnt
                </p>
                <p className="w-1/2 font-light text-xs text-[#00FAE3]">
                  0.00 JPOT
                </p>
              </div>
              <div className="w-full flex">
                <p className="w-1/2 font-light text-xs whitespace-nowrap">
                  Marketcap
                </p>
                <p className="w-1/2 font-light text-xs text-[#00FAE3]">-</p>
              </div>
              <div className="w-full flex">
                <p className="w-1/2 font-light text-xs whitespace-nowrap">
                  Emission rate
                </p>
                <p className="w-1/2 font-light text-xs text-[#00FAE3]">-</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-full flex flex-col gap-10">
          <div className="flex flex-col sm:flex-row gap-10">
            <div className="flex-1 flex flex-col gap-3">
              <p className="font-light">Total</p>
              <p className="font-bold text-lg">$ 0.00</p>
              <p className="text-xs font-light whitespace-nowrap">
                Total value of the daily distributed money pot.
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-3">
              <p className="font-light">Rewards / JPOT</p>
              <p className="font-bold text-lg">116.356 POT</p>
              <p className="text-xs font-light whitespace-nowrap">
                Daily distributed rewards / staked JPOT.
              </p>
            </div>
          </div>
          <button className="w-full px-3 py-2 border border-[#00FAE3] text-[#00FAE3] rounded-2xl">
            The next money pot will be distributed at block #0
          </button>
        </div>
      </div>
      <div className="flex flex-1">
        <div className="card w-full flex flex-col gap-16">
          <div className="flex flex-col gap-6">
            <div className="flex gap-6">
              <h3 className="uppercase text-xl font-semibold">My Pot</h3>
              <div className="flex-grow h-0.5 my-auto bg-[#161C31] bg-opacity-70"></div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 w-full">
              <div className="flex flex-col flex-1 gap-2 sm:gap-3">
                <p className="text-lg">Pending</p>
                <p className="font-bold">0.000 POT</p>
                <div className="flex gap-2">
                  <span className="text-xs text-[#00FAE3]">+50.00%</span>
                  <img className="w-5" src={green_path} />
                </div>
              </div>
              <div className="flex flex-col flex-1 gap-2 sm:gap-3">
                <p className="text-lg">Wallet</p>
                <p className="font-bold">0.000 POT</p>
                <div className="flex gap-2">
                  <span className="text-xs text-[#F78585]">+50.00%</span>
                  <img className="w-5" src={red_path} />
                </div>
              </div>
            </div>
            <button className="w-full border border-[#00FAE3] rounded-2xl px-3 py-2 text-[#00FAE3]">
              Harvest all POT
            </button>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-6">
              <h3 className="uppercase text-xl font-semibold">My JPot</h3>
              <div className="flex-grow h-0.5 my-auto bg-[#161C31] bg-opacity-70"></div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 w-full">
              <div className="flex flex-col flex-1 gap-2 sm:gap-3">
                <p className="text-lg">Pending</p>
                <p className="font-bold">0.000 JPOT</p>
                <div className="flex gap-2">
                  <span className="text-xs text-[#00FAE3]">+50.00%</span>
                  <img className="w-5" src={green_path} />
                </div>
              </div>
              <div className="flex flex-col flex-1 gap-2 sm:gap-3">
                <p className="text-lg">Wallet</p>
                <p className="font-bold">116.365 JPOT</p>
                <div className="flex gap-2">
                  <span className="text-xs text-[#F78585]">-50.00%</span>
                  <img className="w-5" src={red_path} />
                </div>
              </div>
            </div>
            <button className="w-full border border-[#00FAE3] rounded-2xl px-3 py-2 text-[#00FAE3]">
              Harvest all JPOT
            </button>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex gap-6">
              <h3 className="uppercase text-xl font-semibold">My Rewards</h3>
              <div className="flex-grow h-0.5 my-auto bg-[#161C31] bg-opacity-70"></div>
            </div>
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
                  <div className="flex flex-col gap-3">
                    <p className="font-semibold">
                      0.000 <span className="text-[#F0B90A]">BUSD</span>
                    </p>
                    <div className="flex gap-2">
                      <span className="text-xs text-[#00FAE3]">+50.00%</span>
                      <img className="w-5" src={green_path} />
                    </div>
                  </div>
                </div>
                <button className="w-full border border-[#00FAE3] rounded-2xl px-3 py-2 text-[#00FAE3]">
                  Harvest BUSD
                </button>
              </div>
              <div className="flex-1 flex flex-col gap-5">
                <div className="flex gap-5">
                  <img className="w-16" src={binance_2} />
                  <div className="flex flex-col gap-3">
                    <p className="font-semibold">
                      0.000 <span className="text-[#F0B90A]">WBNB</span>
                    </p>
                    <div className="flex gap-2">
                      <span className="text-xs text-[#F78585]">-50.00%</span>
                      <img className="w-5" src={red_path} />
                    </div>
                  </div>
                </div>
                <button className="w-full border border-[#00FAE3] rounded-2xl px-3 py-2 text-[#00FAE3]">
                  Harvest WBNB
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dashboard;
