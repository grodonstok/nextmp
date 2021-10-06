import { XIcon } from "@heroicons/react/outline";

function Modal({ title, showModal, children }) {
  return (
    <div className="sm:hidden flex items-center fixed top-0 right-0 left-0 bottom-0 bg-[#1A2539] bg-opacity-70 p-6 transition-all">
      <div className="flex flex-col mx-auto flex-1 gap-6 bg-gradient-to-b from-[#2A3A5F] to-[#1A2539] rounded-2xl p-8 z-30">
        <div className="flex justify-between">
          <span className="font-bold text-xl">{title}</span>
					<XIcon className="w-5" onClick={() => showModal(null)} />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
