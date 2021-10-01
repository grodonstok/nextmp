function SidebarItem({title, Icon, page}) {
	return (
		<div className="flex items-center group hover:text-[#00FAE3] font-bold text-lg cursor-pointer px-5 py-2 rounded-2xl transition-all">
			<Icon className="w-6 mr-5" />
			<span className="">{title}</span>
		</div>
	)
}

export default SidebarItem
