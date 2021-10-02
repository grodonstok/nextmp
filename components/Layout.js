import { useState } from 'react'
import Sidebar from "./Sidebar"

function Layout({children}) {
	const [mobileSide, setMobileSide] = useState(false);

	return (
		<div className="flex flex-col gap-8 sm:flex-row sm:justify-center min-h-screen p-6 sm:px-0 sm:py-16">
			<Sidebar mobileSide={mobileSide} setMobileSide={setMobileSide}/>
			<main className={`filter ${mobileSide ? 'blur-lg' : ''} flex flex-grow sm:flex-grow-0 sm:blur-none sm:flex-row sm:w-4/6 sm:ml-20 transition-all`}>
				{children}
			</main>
		</div>
	)
}

export default Layout
