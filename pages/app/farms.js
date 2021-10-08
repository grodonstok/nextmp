import Contract from "../../components/Contract";

function farms() {
  return (
    <div className="flex flex-col gap-10 sm:gap-20 w-full">
      <Contract type="farm" token="RADS-BUSD LP" />
      <Contract type="farm" token="POT-BUSD LP" jpot={true} />
      <Contract type="farm" token="RADS-BUSD LP" />
    </div>
  );
}

export default farms;
