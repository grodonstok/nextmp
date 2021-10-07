import Link from "next/link";
import { useRouter } from "next/router";

function SidebarItem({ title, Icon, page, Image, ImageActive, setMobileSide }) {
  const router = useRouter();
  let active =
    router.pathname == page ? "bg-[#161C31] text-[#00FAE3]" : "bg-transparent";
  return (
    <Link href={page} className="flex items-center">
      <span
        onClick={() => setMobileSide(false)}
        className={`flex cursor-pointer group ${active} bg-opacity-50 transition-all font-bold text-lg sm:pl-5 sm:px-5 pl-5  py-3 rounded-2xl`}
      >
        {Icon ? (
          <Icon className="w-6 mr-5" />
        ) : (
          <img
            className="w-5 mr-5"
            src={active !== "bg-transparent" ? ImageActive : Image}
          />
        )}
        <span className="hover:text-[#00FAE3]">{title}</span>
      </span>
    </Link>
  );
}

export default SidebarItem;
