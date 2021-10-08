import { useState } from "react";
import Modal from "./Modal";

function StakeModal({ balance, token, showModal }) {
  const [value, setValue] = useState(0);

  return (
    <Modal title="Deposit" showModal={showModal} size="sm:max-w-4xl">
      <div className="flex flex-col gap-4">
        <p className="text-lg font-bold">
          Balance: {balance} {token}
        </p>
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="bg-[#2A3A5F] rounded-2xl px-8 py-6 flex flex-col sm:flex-row gap-6 font-bold flex-grow">
            <div className="flex justify-between w-2/3">
              <input
                className="my-auto font-bold text-lg bg-transparent outline-none focus:outline-none w-full"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <p className="my-auto whitespace-nowrap">{token}</p>
            </div>
            <div
              className="flex-1 border border-[#00FAE3] rounded-2xl px-5 py-1.5 text-[#00FAE3] text-center font-normal my-auto cursor-pointer"
              onClick={() => setValue(balance)}
            >
              MAX
            </div>
          </div>
          <div className="flex flex-col justify-between w-1/4">
            <button className="rounded-2xl bg-[#00FAE3] text-[#161C31] p-1.5 px-7 font-semibold text-center">
              Confirm
            </button>
            <button className="rounded-2xl border border-[#00FAE3] text-[#00FAE3] p-1.5 px-7 font-semibold text-center">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default StakeModal;
