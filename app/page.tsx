import Image from "next/image";
import { Play, X, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bebasNeue, montserrat, luckiestGuy } from "@/app/fonts";
import Link from "next/link";
import CommunityDisplay from "@/components/Home/CommunityTakeover";

export default function Landing() {
  return (
    <div
      className={`min-h-screen ${bebasNeue.variable} ${montserrat.variable} ${luckiestGuy.variable}`}
    >
      {/* Header */}
      <header className="w-full px-4 md:px-16 flex justify-between items-center fixed bg-background z-50 py-2 md:py-4">
        <Image
          src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/p7m8Z.webp`}
          alt="Ocicat Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex gap-4">
          <Link
            href="/x"
            className="bg-primary/80 hover:bg-white/30 text-background  flex border-black border-2 px-4 py-3  items-center rounded-lg buttonshadow"
          >
            <X className="h-4 w-4 " />
          </Link>
          <Link
            href="/x"
            className="bg-primary/80 hover:bg-white/30 text-background flex border-black border-2 px-4 py-3 items-center rounded-lg buttonshadow"
          >
            <X className="h-4 w-4" />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-[580px] relative">
        <div className="absolute w-full -z-50 h-full">
          <Image
            src={`/catbg.jpeg`}
            alt="Ocicat Logo"
            width={100}
            height={60}
            className="w-full h-full bg-cover hidden md:block"
          />
           <Image
            src={`/bgmobile.png`}
            alt="Ocicat Logo"
            width={100}
            height={60}
            className="w-full h-full bg-cover md:hidden"
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
      <div className=" w-full overflow-hidden bg-primary/80 text-background py-4 border-y-4 border-black">
        <div className="animate-marquee whitespace-nowrap">
          {Array(10)
            .fill("$OCICAT")
            .map((text, i) => (
              <span key={i} className="mx-4 text-3xl font-semibold font-bebas">
                ⭐ {text}
              </span>
            ))}
        </div>
      </div>
      {/* What is Ocicat Coin Section */}
      <section className="relative bg-background w-full  md:h-fit">
        <div className="grid md:grid-cols-2 gap-8 items-center h-full">
          <div className="px-4 py-24">
            <h2 className="font-bebas text-6xl md:text-9xl font-semibold w-full  text-foreground">
              WHAT IS
              <span className="text-primary/80"> $OCICAT</span> COIN?
            </h2>
            <p className="font-montserrat opacity-75 text-lg md:text-xl text-foreground">
              SOcicat Coin Means To Set Love In SOcicatCOIN. The Famous Doge Has
              Slim Physique To Promote Generosity. Early In 2021, SOcicat Became A
              Social Token After Optimistic Investors Discovered It.
            </p>
            <div className="w-fit md:w-[70%] flex flex-row mt-5 justify-around gap-4 border-2 buttonshadow border-black bg-primary/80  py-6 md:px-4 px-8 rounded-lg">
              <button className="bg-primary/80 text-background hover:bg-white/30 -rotate-6 flex border-black border-2 px-6 py-6 items-center rounded-lg buttonshadow">
                <X className="h-4 w-4" />
              </button>
              <button className="bg-primary/80 text-background hover:bg-white/30 rotate-12 flex border-black border-2 px-6 py-6 items-center rounded-lg buttonshadow">
                <Volume2 className="h-4 w-4" />
              </button>
              <button className="bg-primary/80 text-background hover:bg-white/30 -rotate-12 flex border-black border-2 px-6 py-6 items-center rounded-lg buttonshadow">
                <Volume2 className="h-4 w-4" />
              </button>
              <button className="bg-primary/80 text-background hover:bg-white/30 rotate-6 flex border-black border-2 px-6 py-6 items-center rounded-lg buttonshadow">
                <Volume2 className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="relative w-full h-full  md:top-0">
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

      {/* Community Section */}
      <CommunityDisplay />
      {/* Roadmap Section */}
      {/* <section className="bg-[#fdae03] py-16">
        <div className="container px-4">
          <h2 className="font-bebas text-5xl mb-8">ROADMAP</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-6 rounded-2xl">
              <h3 className="font-bebas text-3xl mb-4">Building a Platform</h3>
              <ul className="space-y-2 list-disc list-inside font-montserrat">
                <li>Team Building</li>
                <li>Contract Finaly Complete</li>
                <li>Custom Meme Plot For Success</li>
                <li>Website Design</li>
                <li>Security Wise Plans</li>
                <li>Marketing Partner Platform</li>
                <li>Social Presence</li>
                <li>DEX Listings</li>
              </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl">
              <h3 className="font-bebas text-3xl mb-4">
                Launch and Viral Growth
              </h3>
              <ul className="space-y-2 list-disc list-inside font-montserrat">
                <li>Team Building</li>
                <li>Contract Finaly Complete</li>
                <li>Custom Meme Plot For Success</li>
                <li>Website Design</li>
                <li>Security Wise Plans</li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* Video Section */}
      <section className="bg-background py-16">
        <div className="container px-4">
          <div className="relative aspect-video w-fit mx-auto rounded-3xl overflow-hidden">
            <Button
              size="icon"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary hover:bg-[#feaf03] h-16 w-16 rounded-full"
            >
              <Play className="h-8 w-8 text-black" />
            </Button>
            <Image
              src={`/bgvideo.png`}
              height={200}
              width={200}
              alt="Video Thumbnail"
              className="w-full h-full bg-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-8">
        <div className="container px-4">
          <div className="flex flex-col items-center gap-4">
            <Image
              src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/p7m8Z.webp`}
              alt="Ocicat Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            <p className="font-montserrat text-xs text-center max-w-lg opacity-75">
              $Ocicat is a Decentralized Fan Platform Specially Developed, Built
              By The Community For The Community. Join Us In Our Journey To Take
              The Dog To The Moon.
            </p>
            <div className="flex gap-4">
              <Link
                href="/x"
                className="bg-primary/80 text-background hover:bg-white/30  flex border-black border-2 px-4 py-3  items-center rounded-lg buttonshadow"
              >
                <X className="h-4 w-4 " />
              </Link>
              <Link
                href="/x"
                className="bg-primary/80 text-background hover:bg-white/30 flex border-black border-2 px-4 py-3 items-center rounded-lg buttonshadow"
              >
                <X className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
