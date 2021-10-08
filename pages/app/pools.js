import Contract from "../../components/Contract";

function pools() {
  return (
    <div className="flex flex-col gap-10 sm:gap-20 w-full">
      <Contract type="pool" token="BUSD" />
      <Contract type="pool" token="POT" jpot={true} />
      <Contract type="pool" token="WBNB" />
    </div>
  );
}

export default pools;
