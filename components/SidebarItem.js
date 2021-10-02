import Link from 'next/link'
import { useRouter } from 'next/router';

function SidebarItem({title, Icon, page}) {
	const router = useRouter();
	let active = router.pathname == page ? "bg-[#161C31]" : "bg-transparent";
	return (
		<Link href={page} className="flex items-center">
			<span className={`flex cursor-pointer group hover:text-[#00FAE3] ${active} bg-opacity-50 transition-all font-bold text-lg sm:px-5 py-2 rounded-2xl`}>
				<Icon className="w-6 mr-5" />
				<span className="">{title}</span>
			</span>
		</Link>
	)
}

export default SidebarItem
