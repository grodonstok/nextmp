import Contract from "../../components/Contract"

function pools() {
	return (
		<div className="flex flex-col gap-10 sm:gap-20 w-full">
			<Contract type="pool" />
			<Contract type="pool" />
			<Contract type="pool" />
    </div>
	)
}

export default pools
