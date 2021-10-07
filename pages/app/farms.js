import Contract from "../../components/Contract";

function farms() {
  return (
    <div className="flex flex-col gap-10 sm:gap-20 w-full">
			<Contract type="farm" />
			<Contract type="farm" />
			<Contract type="farm" />
    </div>
  );
}

export default farms;
