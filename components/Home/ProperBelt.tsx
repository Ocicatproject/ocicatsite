import Link from "next/link";

const logos = [
  {
    name: "DEXView",
    width: 120,
    height: 32,
    path: "/dexview.png",
    to: "#",
  },
  {
    name: "Coingecko",
    width: 32,
    height: 32,
    path: "/coingecko.png",
    to: "https://www.coingecko.com/en/coins/ocicat-token",
  },
  {
    name: "PooCoin",
    width: 120,
    height: 32,
    path: "/poocoin.jpeg",
    to: "https://poocoin.app/tokens/0xe53d384cf33294c1882227ae4f90d64cf2a5db70",
  },
  {
    name: "PancakeSwap",
    width: 140,
    height: 32,
    path: "/pancakeswap.png",
    to: "#",
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
    to: "#",
  },
  {
    name: "Binance",
    width: 140,
    height: 32,
    path: "/binance.png",
    to: "https://bscscan.com/token/0xe53d384cf33294c1882227ae4f90d64cf2a5db70",
  },
];

export const ProperBelt = () => {
  return (
    <div className="flex w-full py-6 md:py-8 overflow-hidden bg-primary/0 my-10 md:mt-60">
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
