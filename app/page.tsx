"use client";
import Image from "next/image";
import { Play, X, Volume2, ArrowRight, SquareMenu, XIcon } from "lucide-react";
import { bebasNeue, montserrat, luckiestGuy } from "@/app/fonts";
import Link from "next/link";
import CommunityDisplay from "@/components/Home/CommunityTakeover";
import FAQ from "@/components/Home/FAQ";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter, FaMedium } from "react-icons/fa6";
import { useState } from "react";
import { ProperBelt } from "@/components/Home/ProperBelt";
import RegularBelt from "@/components/RegularBelt";
export default function Landing() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div
      className={`min-h-screen min-w-screen ${bebasNeue.variable} ${montserrat.variable} ${luckiestGuy.variable}`}
    >
      {/* Header */}
      <header className="w-full px-4 md:px-16 flex justify-between items-center fixed bg-background z-50 py-2 md:py-4">
        <div className="flex flex-row items-center">
          {showMobileMenu ? (
            <XIcon
              className="text-primary md:hidden"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            />
          ) : (
            <SquareMenu
              className="text-primary md:hidden"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            />
          )}
          <Image
            src={`/ocicatlogo.png`}
            alt="Ocicat Logo"
            width={40}
            height={40}
            className="rounded-full md:w-20 w-16"
          />
        </div>
        <div className="md:flex gap-4 font-bebas hidden text-xl">
          <Link
            href="http://www.dao.ocicat.club"
            className="bg-primary/80 hover:bg-white/30 text-foreground  flex border-black border-2 px-4 py-3  items-center rounded-lg buttonshadow"
          >
            <span className="uppercase">Dao Staking</span>
          </Link>
          <Link
            href="https://swap.ocicat.club"
            className="bg-primary/80 hover:bg-white/30 text-foreground  flex border-black border-2 px-4 py-3  items-center rounded-lg buttonshadow"
          >
            <span className="uppercase">Swap</span>
          </Link>
          <Link
            href="https://docs.google.com/document/d/1c0ejUIdhtI8oISpGa6qt3eUD6z-bLW7OyqfUhD1Puz4/edit?usp=sharing"
            className="bg-primary/80 hover:bg-white/30 text-foreground flex border-black border-2 px-4 py-3 items-center rounded-lg buttonshadow"
          >
            <span className="uppercase">Documentation</span>
          </Link>
          <Link
            href="https://pancakeswap.finance/swap?outputCurrency=0xE53D384Cf33294C1882227ae4f90D64cF2a5dB70"
            className="bg-primary/80 text-foreground hover:bg-white/30d flex border-black border-2 px-4 py-3 items-center rounded-lg buttonshadow"
          >
            <span className="uppercase">Buy $OCICAT</span>
          </Link>
        </div>
        <Link
          href="https://pancakeswap.finance/swap?outputCurrency=0xE53D384Cf33294C1882227ae4f90D64cF2a5dB70"
          className="bg-primary/80 hover:bg-white/30 text-foreground  flex md:hidden border-black border-2 px-4 py-1 items-center rounded-lg buttonshadow"
        >
          <span className="uppercase">Buy $OCICAT</span>
        </Link>
        {showMobileMenu && (
          <div className="absolute top-16 left-0 flex flex-col gap-4 font-bebas bg-background p-4 rounded-lg shadow-lg md:hidden">
            <Link
              href="https://www.dao.ocicat.club"
              className=" hover:bg-white/30 text-foreground flex px-4  items-center"
            >
              <span className="uppercase">Staking/DAO</span>
            </Link>
            <Link
              href="https://docs.google.com/document/d/1c0ejUIdhtI8oISpGa6qt3eUD6z-bLW7OyqfUhD1Puz4/edit?usp=sharing"
              className=" hover:bg-white/30 text-foreground flex px-4 items-center rounded-lg"
            >
              <span className="uppercase">Documentation</span>
            </Link>
            <Link
              href="#"
              className=" hover:bg-white/30 text-foreground flex px-4 items-center rounded-lg"
            >
              <span className="uppercase">MiniApp</span>
            </Link>
            <Link
              href="https://swap.ocicat.club"
              className=" hover:bg-white/30 text-foreground flex px-4 items-center rounded-lg"
            >
              <span className="uppercase">Swap</span>
            </Link>
      <Link
  href="https://www.mrfud.fun"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:bg-white/30 text-foreground flex px-4 items-center rounded-lg"
>
  <span className="uppercase">Mrfud</span>
</Link>

          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="h-[400px] md:h-[580px] relative">
        <div className="absolute w-full -z-50 h-full">
          <Image
            src={`/catbg.jpeg`}
            alt="Ocicat Logo"
            width={100}
            height={60}
            className="w-full h-full bg-cover hidden md:block"
          />
          <Image
            src={`/bgmobile.jpg`}
            alt="Ocicat Logo"
            width={100}
            height={60}
            className="w-full h-full bg-fill md:hidden"
          />
        </div>
        <div className="px-4 text-center z-[100] flex items-end h-full ">
          <Image
            src={`/catimage.png`}
            alt="Ocicat Character"
            width={300}
            height={300}
            className="mx-auto w-[500px]"
          />
        </div>
      </section>
      {/* Image sections */}
      <RegularBelt />
      {/* <ProperBelt /> */}
      {/* What is Ocicat Coin Section */}
      <section className="relative bg-background w-full  md:h-fit">
        <div className="grid md:grid-cols-2 gap-8 items-center h-full">
          <div className="px-4 py-10 md:py-24">
            <h2 className="font-bebas text-6xl md:text-9xl font-semibold w-full text-center md:text-left text-foreground">
              WHAT IS
              <span className="text-primary/80"> $OCICAT</span> COIN?
            </h2>
            <p className="font-montserrat opacity-75 text-lg md:text-xl text-center md:text-left text-foreground">
              OciCat is a unique deflationary token built on the Binance Smart
              Chain.Every transaction charges 5% reflection designed for
              long-term sustainability and community-driven growth. What sets
              OciCat apart is its strong and dedicated community, which
              continues to drive its development and resilience.
            </p>
            <div className="w-fit mx-auto md:mx-0 md:w-[70%] flex flex-row mt-5 justify-around gap-4 border-2 buttonshadow border-black bg-primary/80 py-4  md:py-6 md:px-4 px-4 rounded-lg">
              <Link href="https://twitter.com/ocicatcoin">
                <button className="bg-primary/80 w-16 h-16 text-background hover:bg-white/30 -rotate-6 flex justify-center items-center border-black border-2  rounded-lg buttonshadow">
                  <FaXTwitter className="w-6 h-6" />
                </button>
              </Link>

              <Link href="https://t.me/ocicatcoin">
                <button className="bg-primary/80 text-background hover:bg-white/30 rotate-12 flex justify-center border-black border-2 w-16 h-16  items-center rounded-lg buttonshadow">
                  <FaTelegramPlane className="w-6 h-6" />
                </button>
              </Link>

              <Link href="https://medium.com/@ocicatcoin">
                <button className="bg-primary/80 text-background hover:bg-white/30 -rotate-12 flex justify-center border-black border-2 w-16 h-16  items-center rounded-lg buttonshadow">
                  <FaMedium className="w-6 h-6" />
                </button>
              </Link>

              <Link href="https://dexscreener.com/bsc/0x1df65d3a75aecd000a9c17c97e99993af01dbcd1">
                <button className="bg-primary/80 text-background hover:bg-white/30 rotate-6 flex justify-center border-black border-2 w-16 h-16 items-center rounded-lg buttonshadow">
                  <Image
                    src="/move.png"
                    alt="Dexscreener"
                    width={40}
                    height={40}
                  />
                </button>
              </Link>
            </div>
          </div>
          <div className="relative w-full h-full -top-20  md:top-0">
            <div className="absolute inset-0 md:bg-gradient-to-l bg-gradient-to-t from-transparent to-background z-10 w-full h-full"></div>
            <Image
              src={`/platformcat.jpeg`}
              alt="Ocicat with Rocket"
              width={400}
              height={400}
              className="w-full relative  h-full"
            />
          </div>
        </div>
      </section>
      {/* New Section */}
      <section className=" bg-background/10 md:py-16 pb-16">
        <h2 className="font-bebas text-5xl md:text-9xl font-semibold w-full text-center md:my-10 mb-10  text-foreground">
          <span className="text-primary/80"> $OCICAT</span> ECOSYSTEM
        </h2>
        <div className=" px-10">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="relative md:w-2/5 h-full md:-left-28  -z-50">
              <Image
                src={`/catconstruction.png`}
                alt="New Image"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4 -mt-8 md:mt-0 md:-ml-60">
              <div className=" bg-background p-4 rounded-xl border-4 border-primary/70">
                <header className="flex flex-row justify-start">
                  <Image
                    src="/stake.svg"
                    alt="Dao"
                    width={20}
                    height={20}
                  ></Image>
                  <h3 className="font-bebas text-lg text-center w-full">
                    Staking/DAO
                  </h3>
                </header>
                <p className="font-montserrat text-sm pt-4">
                 DAO Staking is more than just earning yield; it’s a gateway to governance. lock up your tokens and earn passive income. Stake your token to get voting power in the DAO, which allows you to influence decisions on proposals, upgrades, and other developments. 
                </p>
                <Link href="https://www.dao.ocicat.club/" className="text-primary">
                  <button className="px-10 w-fit rounded-full bg-primary/70 text-foreground text-sm py-1 mt-3 mx-auto flex items-center">
                    Stake Ocicat
                    <ArrowRight />
                  </button>
                </Link>
              </div>
              <div className=" bg-background p-4 rounded-xl border-4 border-primary/70">
                <header className="flex flex-row justify-around">
                  <Image
                    src="/miniapp.png"
                    alt="Dao"
                    width={20}
                    height={20}
                  ></Image>
                  <h3 className="font-bebas text-lg text-center w-full">
                    Ocicat MiniApp
                  </h3>
                </header>
                <p className="font-montserrat text-sm pt-4">
                 The Ocicat MiniApp is a web-based application designed to bring the core utilities of the Ocicat ecosystem into one user-friendly platform. Built for speed, engagement, and accessibility, the App empowers users to earn, play, interact, and grow within the ecosystem 

                </p>

                <Link href="#" className="text-primary">
                  <button className="px-10 w-fit rounded-full bg-primary/70 text-foreground text-sm py-1 mt-3 mx-auto flex items-center">
                    Open App
                    <ArrowRight />
                  </button>
                </Link>
              </div>
              <div className=" bg-background p-4 rounded-xl border-4 border-primary/70">
                <header className="flex flex-row justify-start">
                  <Image
                    src="/nft.png"
                    alt="Dao"
                    width={20}
                    height={20}
                  ></Image>
                  <h3 className="font-bebas text-lg text-center w-full">
                    Ocicat NFT
                  </h3>
                </header>
                <p className="font-montserrat text-sm pt-4">
                Ocicat NFT is a collection of unique digital collectibles called OciCats, forming the core of a creative, community-powered ecosystem known as The Dreamers Club. Each Ocicat NFT is your key to an interactive Web3 experience built around identity, community, and creativity.

                </p>
                <Link href="https://www.dao.ocicat.club/mint" className="text-primary">
                <button className="px-10 w-fit rounded-full bg-primary/70 text-foreground text-sm py-1 mt-3 mx-auto flex items-center">
                  Ocicat NFT
                  <ArrowRight />
                </button>
                </Link>
              </div>
              <div className=" bg-background p-4 rounded-2xl border-4 border-primary/70">
                <header className="flex flex-row justify-start">
                  <Image
                    src="/bridge.svg"
                    alt="Dao"
                    width={20}
                    height={20}
                  ></Image>
                  <h3 className="font-bebas text-lg text-center w-full">
                     Launchpad
                  </h3>
                </header>
                <p className="font-montserrat text-sm pt-4">
               MrFUD is fair-launch launchpad platform  With anti-FUD toggle that uses a bonding curve to stop insider manipulation.
It        rewards creators and loyal holders, with automatic liquidity migration to a DEX when targets are reachedr.
                </p>
             <Link
  href="https://www.mrfud.fun"
  target="_blank"
  rel="noopener noreferrer"
  className="text-primary"
>
  <button className="px-10 w-fit rounded-full bg-primary/70 text-foreground text-sm py-1 mt-3 mx-auto flex items-center">
    MrFUD Launchpad
    <ArrowRight />
  </button>
</Link>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <CommunityDisplay />

      {/* Roadmap Section */}
      <section className="w-[90%] md:w-[80%] mx-auto h-fit md:h-[600px]">
        <div className="w-full">
          <Image
            src={`/roadmap.jpg`}
            alt="Ocicat Logo"
            width={100}
            height={60}
            className="w-[100%] h-full bg-cover hidden md:block"
          />
          <Image
            src={`/roadmap.jpg`}
            alt="Ocicat Logo"
            width={100}
            height={60}
            className="w-full h-full bg-cover md:hidden"
          />
        </div>
      </section>
      {/* Image sections */}
      <ProperBelt />
      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <footer className="bg-background pt-20 relative">
        <div className="container px-4">
          <div className="flex flex-col items-center gap-4 py-8 ">
            <div className="animate-bounce">
              <Image
                src={`/bgvideo.png`}
                height={200}
                width={200}
                alt="Video Thumbnail"
                className="w-80 h-60 bg-cover rotate-[100deg]"
              />
            </div>

            <p className="font-montserrat text-lg text-center max-w-xl opacity-75">
              Ocicat started as a community driven meme coin. From 2023 the
              project has sustained an upward tragetry. Join us as we journey
              through our roadmap and more.
            </p>
            <div className="w-fit mx-auto md:mx-0 md:w-[30%] flex flex-row mt-5 justify-around gap-4 border-2 buttonshadow border-black bg-primary/80 py-4  md:py-6 md:px-4 px-4 rounded-lg">
              <Link href="https://twitter.com/ocicatcoin">
                <button className="bg-primary/80 w-16 h-16 text-background hover:bg-white/30 -rotate-6 flex justify-center items-center border-black border-2  rounded-lg buttonshadow">
                  <FaXTwitter className="w-6 h-6" />
                </button>
              </Link>

              <Link href="https://t.me/ocicatcoin">
                <button className="bg-primary/80 text-background hover:bg-white/30 rotate-12 flex justify-center border-black border-2 w-16 h-16  items-center rounded-lg buttonshadow">
                  <FaTelegramPlane className="w-6 h-6" />
                </button>
              </Link>

              <Link href="https://medium.com/@ocicatcoin">
                <button className="bg-primary/80 text-background hover:bg-white/30 -rotate-12 flex justify-center border-black border-2 w-16 h-16  items-center rounded-lg buttonshadow">
                  <FaMedium className="w-6 h-6" />
                </button>
              </Link>

              <Link href="https://dexscreener.com/bsc/0x1df65d3a75aecd000a9c17c97e99993af01dbcd1">
                <button className="bg-primary/80 text-background hover:bg-white/30 rotate-6 flex justify-center border-black border-2 w-16 h-16 items-center rounded-lg buttonshadow">
                  <Image
                    src="/move.png"
                    alt="Dexscreener"
                    width={40}
                    height={40}
                  />
                </button>
              </Link>
            </div>
            <div className="text-white text-lg">
              For partnership admin@ocicat.club
</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
