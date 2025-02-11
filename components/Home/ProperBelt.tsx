import Link from "next/link";

const logos = [
  {
    name: "DEXView",
    width: 120,
    height: 32,
    path: "/dexview.png",
    to: "https://www.dexview.com/bsc/0x37Fe635D1e25B2F7276C1B9dBBcc7b087f80C050",
  },
  {
    name: "Coingecko",
    width: 32,
    height: 32,
    path: "/coingecko.png",
    to: "https://poocoin.app/tokens/0x37Fe635D1e25B2F7276C1B9dBBcc7b087f80C050",
  },
  {
    name: "PooCoin",
    width: 120,
    height: 32,
    path: "/poocoin.jpeg",
    to: "https://poocoin.app/tokens/0x37Fe635D1e25B2F7276C1B9dBBcc7b087f80C050",
  },
  {
    name: "PancakeSwap",
    width: 140,
    height: 32,
    path: "/pancakeswap.png",
    to: "https://pancakeswap.finance/swap?outputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&chainId=56&inputCurrency=0x37Fe635D1e25B2F7276C1B9dBBcc7b087f80C050",
  },
  {
    name: "Platform5",
    width: 32,
    height: 32,
    path: "/coinmarket.png",
    to: "https://coinmarketcap.com/currencies/ocicat/",
  },
  {
    name: "DEXTools",
    width: 120,
    height: 32,
    path: "/dextools.svg",
    to: "https://www.dextools.io/app/en/bnb/pair-explorer/0xb370ea0cee1eee0e2988d062fd3391b2cf2759a1",
  },
  {
    name: "Binance",
    width: 140,
    height: 32,
    path: "/binance.png",
    to: "https://bscscan.com/token/0x37fe635d1e25b2f7276c1b9dbbcc7b087f80c050",
  },
];

export const ProperBelt = () => {
  return (
    <div className="relative flex w-full py-6 md:py-8 overflow-hidden">
      {/* First set of logos */}
      <div className="animate-scroll flex min-w-full items-center justify-around gap-4 md:gap-12">
        {logos.map((logo, index) => (
          <Link href={logo.to}>
            <img
              key={index}
              src={logo.path}
              alt={logo.name}
              className="h-8 min-w-10 md:w-auto object-contain"
            />
          </Link>
        ))}
      </div>
      {/* Duplicate for seamless loop */}
      <div className="animate-scroll flex min-w-full items-center justify-around gap-4 md:gap-12">
        {logos.map((logo, index) => (
          <Link href={logo.to}>
            <img
              key={`dup-${index}`}
              src={logo.path}
              alt={logo.name}
              className="h-8 min-w-10 md:w-auto object-contain"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
