import { CopyToClipboard } from "react-copy-to-clipboard";
import { alertService } from "../services/alert.service";
import { useWeb3React } from "@web3-react/core";
import ConnectButton from "./ConnectButton";
import { useEffect, useState } from "react";
import WalletConnectModal from "./WalletConnectModal";
import { walletTypes } from "../utils/connector";
import Dropdown from "./Dropdown";

function Account({ title, classes, sidebar }) {
  const { active, account, activate, deactivate } = useWeb3React();
  const [modal, showModal] = useState(null);

  useEffect(async () => {
    if (active) return;
    const walletCookie = localStorage.getItem("wallet");
    if (walletCookie) await activate(walletTypes[walletCookie]);
  }, [active]);

  async function disconnect() {
    try {
      localStorage.removeItem("wallet");
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  return active ? (
    sidebar ? (
      <div className="flex w-full gap-4 px-5">
        <img
          className="rounded-lg ring-2 ring-[#00FAE3] object-contain w-8 h-8"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1760&q=80"
        />
        <CopyToClipboard
          text={account}
          onCopy={() => alertService.info("Address copied to clipboard")}
        >
          <span className="text-[#A5B1D3] truncate my-auto cursor-pointer">
            {account}
          </span>
        </CopyToClipboard>
        <Dropdown items={["Disconnect"]} change={disconnect} />
      </div>
    ) : (
      ""
    )
  ) : (
    <div className={`${sidebar ? "w-full" : "flex-grow flex flex-col"}`}>
      {modal ? <WalletConnectModal showModal={showModal} /> : ""}
      <ConnectButton
        title={title}
        classes={classes}
        connect={() => showModal(true)}
      />
    </div>
  );
}

export default Account;
