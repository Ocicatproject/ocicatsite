import Image from "next/image";
import { Play, X, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bebasNeue, montserrat, luckiestGuy } from "@/app/fonts";
import Link from "next/link";

export default function Landing() {
  return (
    <div
      className={`min-h-screen ${bebasNeue.variable} ${montserrat.variable} ${luckiestGuy.variable}`}
    >
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-[#f0343d]">
        <Image
          src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/p7m8Z.webp`}
          alt="Maru Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex gap-4">
          <Link
            href="/x"
            className="bg-[#d3ffa2] hover:bg-white/30 flex border-black border-2 px-4 py-3  items-center rounded-lg"
          >
            <X className="h-4 w-4" />
          </Link>
          <Link
            href="/x"
            className="bg-[#d3ffa2] hover:bg-white/30 flex border-black border-2 px-4 py- 3 items-center rounded-lg"
          >
            <X className="h-4 w-4" />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#f0343d]">
        <div className="container px-4 py-12 text-center">
          <Image
            src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/p7m8Z.webp`}
            alt="Maru Character"
            width={300}
            height={300}
            className="mx-auto"
          />
        </div>
        <div className="absolute bottom-0 w-full overflow-hidden bg-[#feaf03]/20 text-white py-4 border-y-2 border-black">
          <div className="animate-marquee whitespace-nowrap">
            {Array(10)
              .fill("$MARU")
              .map((text, i) => (
                <span key={i} className="mx-4 text-xl font-luckiest">
                  ⭐ {text}
                </span>
              ))}
          </div>
        </div>
      </section>

      {/* What is Maru Coin Section */}
      <section className="bg-gradient-to-b from-[#fdae03] to-[#ffb92b] py-16">
        <div className="px-4">
          <h2 className="font-bebas text-9xl font-semibold w-1/2   text-white stroked">
            WHAT IS
            <span className="text-[#f0343d]"> $MARU</span> COIN?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="">
              <p className="font-montserrat opacity-75 text-xl">
                SMARU Coin Means To Set Love In SMARUCOIN. The Famous Doge Has
                Slim Physique To Promote Generosity. Early In 2021, SMARU Became
                A Social Token After Optimistic Investors Discovered It.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" className="bg-white/20 rounded-full">
                  <X className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="bg-white/20 rounded-full">
                  <Volume2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#ffb92b] z-10"></div>
              <Image
                src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/p7m8Z.webp`}
                alt="Maru with Rocket"
                width={400}
                height={400}
                className="mx-auto relative z-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="bg-[#f0343d] py-16">
        <div className="container px-4 text-center">
          <h2 className="font-bebas text-5xl mb-8">
            COMUNITY
            <span className="block">TAKE OVER</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto">
            <Button className="bg-[#fdae03] hover:bg-[#feaf03] text-black font-bebas text-xl rounded-full h-12">
              BUY $MARU!
            </Button>
            <Button
              variant="outline"
              className="border-[#fdae03] text-[#fdae03] hover:bg-[#fdae03]/20 font-bebas text-xl rounded-full h-12"
            >
              VIEW CHART
            </Button>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="bg-[#f0343d] py-16">
        <div className="container px-4">
          <h2 className="font-bebas text-5xl mb-8 text-center">TOKENOMICS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-white/10 p-6 rounded-2xl">
                <h3 className="font-bebas text-2xl">LP BURNED</h3>
                <p className="font-montserrat">CONTRACT RENOUNCED</p>
                <p className="font-montserrat">2% SLAP TO VENUS</p>
                <p className="font-montserrat">
                  MAXIMUM MARKETING SWEET CREATED
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <Button className="bg-white/10 rounded-full font-bebas">
                  0% BURNED
                </Button>
                <Button className="bg-[#f0343d] rounded-full font-bebas border-2 border-white/20">
                  SUPPLY: 10%
                </Button>
                <Button className="bg-[#fdae03] text-black rounded-full font-bebas">
                  DAO TAX
                </Button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="relative w-48 h-48 rounded-full bg-[#fdae03]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/p7m8Z.webp`}
                  alt="Maru Logo"
                  width={80}
                  height={80}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maru Song Section */}
      <section className="bg-[#f0343d] py-8">
        <div className="container px-4">
          <h2 className="font-bebas text-4xl mb-4">Maru Song</h2>
          <div className="bg-white/10 p-4 rounded-2xl flex items-center gap-4">
            <Button
              size="icon"
              className="bg-[#fdae03] hover:bg-[#feaf03] rounded-full"
            >
              <Play className="h-4 w-4 text-black" />
            </Button>
            <div className="flex-1 h-2 bg-white/20 rounded-full">
              <div className="w-1/3 h-full bg-[#fdae03] rounded-full"></div>
            </div>
            <span className="font-montserrat">0:00</span>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="bg-[#fdae03] py-16">
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
      </section>

      {/* Video Section */}
      <section className="bg-[#f0343d] py-16">
        <div className="container px-4">
          <div className="relative aspect-video max-w-3xl mx-auto rounded-3xl overflow-hidden border-8 border-white/20">
            <Button
              size="icon"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#fdae03] hover:bg-[#feaf03] h-16 w-16 rounded-full"
            >
              <Play className="h-8 w-8 text-black" />
            </Button>
            <Image
              src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/p7m8Z.webp`}
              alt="Video Thumbnail"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#fdae03] py-8">
        <div className="container px-4">
          <div className="flex flex-col items-center gap-4">
            <Image
              src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/p7m8Z.webp`}
              alt="Maru Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            <p className="font-montserrat text-xs text-center max-w-lg opacity-75">
              $MARU is a Decentralized Fan Platform Specially Developed, Built
              By The Community For The Community. Join Us In Our Journey To Take
              The Dog To The Moon.
            </p>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/20 hover:bg-white/30 rounded-full"
              >
                <X className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/20 hover:bg-white/30 rounded-full"
              >
                <Volume2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
