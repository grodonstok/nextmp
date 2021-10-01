import Sidebar from "./Sidebar"

function Layout({children}) {
	return (
		<div className="flex flex-row justify-center min-h-screen py-16">
			<Sidebar />
			<main className="bg-gradient-to-b from-[#2A3A5F] to-[#1A2539] rounded-3xl ml-20 w-4/6">{children}</main>
		</div>
	)
}

export default Layout
