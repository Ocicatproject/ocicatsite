const logos = [
    { name: "DEXView", width: 120, height: 32 },
    { name: "Platform2", width: 32, height: 32 },
    { name: "PooCoin", width: 120, height: 32 },
    { name: "PancakeSwap", width: 140, height: 32 },
    { name: "Platform5", width: 32, height: 32 },
    { name: "DEXTools", width: 120, height: 32 },
    { name: "Binance", width: 140, height: 32 },
  ]

export const ProperBelt = () => {
    return (
        <div className="relative flex w-full">
        {/* First set of logos */}
        <div className="animate-scroll flex min-w-full items-center justify-around gap-12">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={`/placeholder.svg?height=${logo.height}&width=${logo.width}`}
              alt={logo.name}
              className="h-8 w-auto object-contain"
            />
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="animate-scroll flex min-w-full items-center justify-around gap-12">
          {logos.map((logo, index) => (
            <img
              key={`dup-${index}`}
              src={`/placeholder.svg?height=${logo.height}&width=${logo.width}`}
              alt={logo.name}
              className="h-8 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    )
}