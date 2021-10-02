import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import moneypot_home from "../assets/moneypot_home.svg"

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>MoneyPot</title>
      </Head>
			<main className="relative h-full">
				<div className="p-28 flex flex-col w-2/3 space-y-8 z-20">
					<h1 className="text-[#00FAE3] font-semibold text-6xl leading-snug">The moon is made <br />of Moneypot.</h1>
					<h6 className="text-[#C9D5F8] text-2xl leading-snug pr-10">Trade, earn, and win crypto on the most popular decentralized platform in the galaxy.</h6>
					<div className="flex gap-5 w-2/3">
						<button className="flex-grow bg-[#00FAE3] text-[#161C31] font-semibold rounded-2xl px-5 py-2 z-20">Connect wallet</button>
						<button className="flex-grow border border-[#00FAE3] rounded-2xl px-3 py-2 text-[#00FAE3] z-20">Trade now</button>
					</div>
				</div>
				<img className="absolute bottom-0 right-0 left-0 z-10" src={moneypot_home} />
			</main>
    </div>
  )
}
