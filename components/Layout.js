import { useState } from "react";
import { Alert } from "./Alert";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  const [mobileSide, setMobileSide] = useState(false);

  return (
    <div className="flex flex-col relative gap-3 2xl:gap-20 sm:gap-10 md:flex-row xl:justify-center min-h-screen p-6 xl:p-0">
			<div id="modal-root"></div>
      <Sidebar mobileSide={mobileSide} setMobileSide={setMobileSide} />
			<Alert />
      <main
        className={`filter ${
          mobileSide ? "blur-lg" : ""
        } mt-20 md:mt-0 flex flex-grow xl:flex-grow-0 md:blur-none md:flex-row xl:w-4/6 md:w-3/6 transition-all sm:px-0 xl:py-16`}
      >
        {children}
      </main>
    </div>
  );
}

export default Layout;
