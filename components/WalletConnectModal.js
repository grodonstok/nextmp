import Modal from "./Modal";
import { useWeb3React } from "@web3-react/core";
import { walletTypes } from "../utils/connector";

function WalletConnectModal({ showModal }) {
  const { activate } = useWeb3React();

  async function connect(wallet) {
    try {
      await activate(walletTypes[wallet]);
      showModal(false);
      localStorage.setItem("wallet", wallet);
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <Modal title="Connect to a wallet" showModal={showModal}>
      <div className="flex flex-col gap-6">
        <div
          className="flex p-4 bg-[#2A3A5F] rounded-2xl cursor-pointer"
          onClick={() => connect("metamask")}
        >
          Metamask
        </div>
        <div className="flex p-4 bg-[#2A3A5F] rounded-2xl">WalletConnect</div>
      </div>
    </Modal>
  );
}

export default WalletConnectModal;
