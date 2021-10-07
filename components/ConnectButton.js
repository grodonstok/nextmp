function ConnectButton({ title, classes, connect }) {
  return (
    <button
      className={`${classes} bg-[#00FAE3] text-[#161C31] font-semibold rounded-2xl cursor-pointer`}
      onClick={connect}
    >
      {title}
    </button>
  );
}

export default ConnectButton;
