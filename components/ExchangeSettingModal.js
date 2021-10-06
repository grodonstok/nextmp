import Modal from "./Modal";

function ExchangeSettingModal({showModal}) {
  return (
    <Modal title="Settings" showModal={showModal}>
      <div className="flex flex-col bg-[#2A3A5F] p-8 rounded-2xl gap-4">
        <p className="font-light">Slippage tolerance:</p>
        <div className="flex flex-wrap gap-5 font-bold text-center">
          <div className="px-5 py-2 flex-1 rounded-2xl bg-[#00FAE3] text-[#2A3A5F]">
            0.1%
          </div>
          <div className="px-5 py-2 flex-1 rounded-2xl bg-[#00FAE3] bg-opacity-20">
            0.5%
          </div>
          <div className="px-5 py-2 flex-1 rounded-2xl bg-[#00FAE3] bg-opacity-20">
            1%
          </div>
          <div className="px-5 py-2 flex-1 rounded-2xl bg-[#C9D5F8] bg-opacity-30">
            0.1%
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-[#2A3A5F] p-8 rounded-2xl gap-4">
        <p className="font-light">Transaction deadline:</p>
        <div className="flex relative w-full">
          <input
            className="rounded-2xl bg-[#888fa7] w-full text-[#C9D5F8] pl-10 p-2 bg-opacity-30 outline-none focus:outline-none"
            value="200"
          />
          <span className="absolute right-5 top-2 text-[#C9D5F8]">Minutes</span>
        </div>
      </div>
    </Modal>
  );
}

export default ExchangeSettingModal;
