import { useState } from "react";
import binance_1 from "../assets/binance_1.svg";
import binance_2 from "../assets/binance_2.svg";
import StakeModal from "./StakeModal";

function Contract({ token, type, jpot }) {
  const [approved, setApproved] = useState(false);
  const [modal, showModal] = useState(false);

  return (
    <div className="card flex flex-col xl:flex-row gap-10 justify-between ">
      {modal ? (
        <StakeModal showModal={showModal} token={token} balance={0.31234} />
      ) : (
        ""
      )}
      <div className="flex flex-col gap-6 xl:w-1/5 xl:my-auto">
        <div className="flex flex-col items-center gap-2 px-5">
          <div className="flex flex-row justify-center gap-5">
            <img className="w-10" src={binance_1} />
            {type === "farm" ? <img className="w-10" src={binance_2} /> : ""}
          </div>
          <p className="text-xl text-[#F0B90A] font-bold whitespace-nowrap">
            {token}
          </p>
          <p className="text-xs font-light">Earn POT rewards</p>
        </div>
        <div className="flex flex-col gap-4">
          {jpot ? (
            <div className="w-full rounded-2xl border-2 border-[#C9D5F8] p-1.5 font-semibold text-center">
              JPOT
            </div>
          ) : (
            ""
          )}
          <div className="w-full rounded-2xl border-2 border-[#C9D5F8] p-1.5 font-semibold text-center">
            0X
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-5 xl:gap-0 xl:w-1/3 justify-between">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col sm:items-center gap-2">
            <p className="text-lg">APR</p>
            <p className="text-lg font-bold">0.00 %</p>
            <p className="text-xs font-light">More details</p>
          </div>
          <div className="flex flex-col sm:items-center gap-2">
            <p className="text-lg">Total liquidities</p>
            <p className="text-lg font-bold">$ 0</p>
            <p className="text-xs font-light">Add liquidities</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <p>Pending reward</p>
            <p className="textlg font-bold">0 POT</p>
          </div>
          <div className="flex flex-col gap-2">
            <p>Wallet balance</p>
            <p className="textlg font-bold">0 LP</p>
          </div>
          <div className="flex flex-col gap-2">
            <p>Stacked</p>
            <p className="textlg font-bold">0 LP</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 xl:w-1/5 my-auto">
        <button className="rounded-2xl border-2 border-[#C9D5F8] p-1.5 font-semibold text-center">
          Harvest
        </button>
        {!approved ? (
          <button
            className="rounded-2xl bg-[#00FAE3] text-[#161C31] p-1.5 2xl:px-7 xl:px-4 font-semibold text-center whitespace-nowrap"
            onClick={() => setApproved(true)}
          >
            Approve Contract
          </button>
        ) : (
          <button
            className="rounded-2xl bg-[#00FAE3] text-[#161C31] p-1.5 px-7 font-semibold text-center"
            onClick={() => showModal(true)}
          >
            Stake
          </button>
        )}
        {approved ? (
          <button className="rounded-2xl border-2 border-[#C9D5F8] p-1.5 font-semibold text-center">
            Withdraw
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Contract;
