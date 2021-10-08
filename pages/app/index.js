import Head from "next/head";
import moneypot_home from "../../assets/moneypot_home.svg";
import moneypot_home_mobile from "../../assets/moneypot_home_mobile.svg";
import Account from "../../components/Account";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex-grow sm:flex-grow-0 bg-gradient-to-b from-[#2A3A5F] to-[#1A2539] rounded-3xl sm:w-full overflow-hidden">
      <Head>
        <title>MoneyPot</title>
      </Head>
      <div className="relative h-full pt-10 sm:pt-0">
        <div className="p-6 sm:p-28 flex flex-col w-full sm:w-2/3 space-y-8 z-20">
          <h1 className="text-[#00FAE3] font-semibold text-3xl sm:text-6xl leading-snug">
            The moon is made <br />
            of Moneypot.
          </h1>
          <h6 className="text-[#C9D5F8] text-sm sm:text-2xl leading-snug pr-10">
            Trade, earn, and win crypto on the most popular decentralized
            platform in the galaxy.
          </h6>
          <div className="flex flex-col sm:flex-row gap-5 mr-10 sm:mr-0 sm:w-2/3">
            <Account
              title="Connect wallet"
              classes="flex-grow px-5 py-2 z-20"
            />
            <Link href="/app/trade">
              <button className="flex-grow border border-[#00FAE3] rounded-2xl px-3 py-2 text-[#00FAE3] z-20">
                Trade now
              </button>
            </Link>
          </div>
        </div>
        <img
          className="hidden sm:block absolute bottom-0 right-0 left-0 z-10"
          src={moneypot_home}
        />
        <img
          className="block sm:hidden absolute bottom-0 right-0 left-0 z-10"
          src={moneypot_home_mobile}
        />
      </div>
    </div>
  );
}
