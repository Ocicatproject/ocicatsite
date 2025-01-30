"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Copy, Pause, Play } from "lucide-react";

export default function MaruLanding() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(
      "0xc58fc8b41fccbd05....6349ae41dc49878af3a20b0d86"
    );
  };

  return (
    <div className="min-h-screen bg-[#000013] font-bebas ">
      {/* Hero Section */}
      <section className="container px-12 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative w-full h-full hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#000013] z-10 w-full h-full"></div>
            <Image
              src={`/dreamers.jpeg`}
              alt="Maru with Rocket"
              width={400}
              height={400}
              className="w-full relative z-0 h-full"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-center md:text-left text-5xl md:text-7xl font-bold">
              <span className="text-[#f0343d]">COMMUNITY</span>
              <br />
              <span className="text-[#d5d5d5]">TAKE OVER</span>
            </h1>
            <p className="text-[#d5d5d5] text-lg font-montserrat">
              The Power Is Shifting Into The Hands Of The People! The MARUTARO
              Community Has Taken Control, Turning This Project Into A
              Full-Blown, Community-Driven Revolution. This Isn't Just A
              Takeover—It's The Beginning Of A New Era Where The Community
              Drives The Direction, Decisions, And Future Of The Project.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Button className=" text-black hover:bg-white/30  bg-[#f0343d] font-bold text-lg border-2 border-black buttonshadow">
                BUY $MARU
              </Button>
              <Button className=" text-black bg-[#f0343d] hover:bg-white/30 border-2 border-black buttonshadow  font-bold text-lg">
                VIEW CHART
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="md:px-4 px-0 py-8 mx-4 md:mx-24">
        <Card className="bg-[#f0343d] p-6 space-y-6 w-[100%]">
          <h2 className="text-4xl font-bold text-[#d5d5d5]">TOKENOMICS</h2>
          <div className="grid md:grid-cols-[2fr_1fr] gap-8">
            <div className="space-y-4 max-w-[95%]">
              <ul className="space-y-2 text-lg font-medium">
                <li>✓ LP Burned</li>
                <li>✓ Contract Renounced</li>
                <li>✓ 2% Sent To Vitalik</li>
                <li>✓ Multisig Marketing Wallet Created</li>
              </ul>
              <div className="bg-white/10 p-4 rounded-lg flex flex-row justify-between items-center gap-2">
                <code className="text-sm w-full">
                  0xc58fc8b41fccbd05
                </code>
                <Button variant="ghost" size="icon" onClick={copyAddress}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <div className="max-w-full grid  grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                <Card className="p-4 text-center bg-black/10">
                  <h3 className="font-bold">0%</h3>
                  <p>BURNED TOKENS</p>
                </Card>
                <Card className="p-4 text-center bg-white/10">
                  <h3 className="font-bold">SUPPLY: 10B</h3>
                  <p>NAME: MARU</p>
                </Card>
                <Card className="p-4 text-center bg-black/10">
                  <h3 className="font-bold">0/0</h3>
                  <p>TAX</p>
                </Card>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-48 h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cleaner-THQAvpa16Obqv2fnDOGG4YQcFol8a5.png"
                  alt="Maru token distribution"
                  width={200}
                  height={200}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Audio Player Section */}
      {/* <section className="container px-4 py-8">
        <h2 className="text-4xl font-bold text-[#d5d5d5] text-center mb-6">Maru Song</h2>
        <Card className="bg-[#FFD700] p-4">
          <div className="flex items-center gap-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cleaner-THQAvpa16Obqv2fnDOGG4YQcFol8a5.png"
              alt="Maru"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex-1">
              <div className="h-2 bg-[#FF3A44]/20 rounded-full">
                <div className="h-full w-[20%] bg-[#FF3A44] rounded-full" />
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span>0:12</span>
                <span>2:21</span>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-white" onClick={togglePlay}>
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </Button>
          </div>
        </Card>
        <audio ref={audioRef} className="hidden">
          <source src="/maru-song.mp3" type="audio/mpeg" />
        </audio>  </section> */}
    </div>
  );
}
