import Image from "next/image"
import { Play, X, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-500 via-orange-400 to-yellow-400">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <Image
          src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/p7m8Z.webp`}
          alt="Ocicat Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="bg-white/20 hover:bg-white/30">
            <X className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="bg-white/20 hover:bg-white/30">
            <Volume2 className="h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="container px-4 py-12 text-center">
          <Image
            src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/p7m8Z.webp`}
            alt="Ocicat Character"
            width={300}
            height={300}
            className="mx-auto"
          />
        </div>
        <div className="absolute bottom-0 w-full overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            {Array(10)
              .fill("SOcicat")
              .map((text, i) => (
                <span key={i} className="mx-4 text-xl">
                  ⭐ {text}
                </span>
              ))}
          </div>
        </div>
      </section>

      {/* What is Ocicat Coin Section */}
      <section className="bg-gradient-to-b from-yellow-400 to-orange-500 py-16">
        <div className="container px-4">
          <h2 className="text-4xl font-bold mb-8">
            WHAT IS
            <span className="text-red-600"> SOcicat</span> COIN?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-sm opacity-75">
                SOcicat Coin Means To Set Love In SOcicatCOIN. The Famous Doge Has Slim Physique To Promote Generosity.
                Early In 2021, SOcicat Became A Social Token After Optimistic Investors Discovered It. The SOcicat Community
                Has Grown To Over 2 Million Members. We Support Our And Push Project's Community Telegram SOcicat & Token
                Contract By Below We Generate The Smart Contract Of Binance Smart.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" className="bg-white/20">
                  <X className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="bg-white/20">
                  <Volume2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Image
              src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/p7m8Z.webp`}
              alt="Ocicat with Rocket"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="bg-red-500 py-16">
        <div className="container px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            COMUNITY
            <span className="block">TAKE OVER</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">BUY SOcicat!</Button>
            <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/20">
              VIEW CHART
            </Button>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="bg-red-500 py-16">
        <div className="container px-4">
          <h2 className="text-4xl font-bold mb-8">TOKENOMICS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="font-bold">LP BURNED</h3>
                <p>CONTRACT RENOUNCED</p>
                <p>2% SLAP TO VENUS</p>
                <p>MAXIMUM MARKETING SWEET CREATED</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <Button className="bg-white/10">0% BURNED TOKENS</Button>
                <Button className="bg-pink-500">SUPPLY: 10%</Button>
                <Button className="bg-yellow-400 text-black">DAO TAX</Button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="relative w-48 h-48 rounded-full bg-red-600">
                <Image
                  src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/p7m8Z.webp`}
                  alt="Ocicat Logo"
                  width={80}
                  height={80}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ocicat Song Section */}
      <section className="bg-red-500 py-8">
        <div className="container px-4">
          <h2 className="text-4xl font-bold mb-4">Ocicat Song</h2>
          <div className="bg-white/10 p-4 rounded-lg flex items-center gap-4">
            <Button size="icon" className="bg-yellow-400 hover:bg-yellow-500">
              <Play className="h-4 w-4 text-black" />
            </Button>
            <div className="flex-1 h-2 bg-white/20 rounded-full">
              <div className="w-1/3 h-full bg-yellow-400 rounded-full"></div>
            </div>
            <span>0:00</span>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="bg-yellow-400 py-16">
        <div className="container px-4">
          <h2 className="text-4xl font-bold mb-8">ROADMAP</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Building a Platform</h3>
              <ul className="space-y-2 list-disc list-inside">
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
            <div>
              <h3 className="text-2xl font-bold mb-4">Launch and Viral Growth</h3>
              <ul className="space-y-2 list-disc list-inside">
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
      <section className="bg-red-500 py-16">
        <div className="container px-4">
          <div className="relative aspect-video max-w-3xl mx-auto rounded-3xl overflow-hidden border-8 border-white/20">
            <Button
              size="icon"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 hover:bg-red-600 h-16 w-16 rounded-full"
            >
              <Play className="h-8 w-8" />
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
      <footer className="bg-yellow-400 py-8">
        <div className="container px-4">
          <div className="flex flex-col items-center gap-4">
            <Image
              src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/p7m8Z.webp`}
              alt="Ocicat Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            <p className="text-xs text-center max-w-lg opacity-75">
              SOcicat is a Decentralized Fan Platform Specially Developed, Built By The Community For The Community. Join
              Us In Our Journey To Take The Dog To The Moon.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="bg-white/20 hover:bg-white/30">
                <X className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="bg-white/20 hover:bg-white/30">
                <Volume2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

