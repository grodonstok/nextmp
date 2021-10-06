import Modal from "./Modal"
import TransactionsTrade from "./TransactionsTrade"

function ExchangeTransactionsModal({showModal}) {
	return (
		<Modal title="Recent transactions" showModal={showModal}>
			<TransactionsTrade />
		</Modal>
	)
}

export default ExchangeTransactionsModal
