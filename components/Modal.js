import { XIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function Modal({ title, showModal, size, children }) {
  const [fade, setFade] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (opened) return;
    if (!fade) {
      setOpened(true);
      setTimeout(() => {
        setFade(true);
      }, 0);
    }
  }, [fade]);

  const handleClose = () => {
    setFade(false);
    setTimeout(() => {
      showModal(null);
    }, 200);
  };

  return ReactDOM.createPortal(
    <div
      className={`${
        fade ? "bg-opacity-70" : "bg-opacity-0"
      } z-50 flex items-center fixed w-100 h-100 top-0 right-0 left-0 bottom-0 bg-[#1A2539] p-6 transition-all`}
    >
      <div
        className={`${size ? size : "sm:max-w-sm"} transform ${
          fade ? "opacity-100" : "-translate-y-96 opacity-0"
        } flex flex-col mx-auto flex-1 gap-6 bg-gradient-to-b from-[#2A3A5F] to-[#1A2539] rounded-2xl p-8 z-30 transition-all`}
      >
        <div className="flex justify-between">
          <span className="font-bold text-xl">{title}</span>
          <XIcon className="w-5 cursor-pointer" onClick={handleClose} />
        </div>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default Modal;
