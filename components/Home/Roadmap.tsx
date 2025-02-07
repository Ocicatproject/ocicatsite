import { Check } from "lucide-react"

export default function RoadMap() {
  return (
    <div className="min-h-screen bg-background p-8 font-bebas">
      <h1 className="mb-16 text-center text-5xl font-bold text-white">Project RoadMap</h1>

      <div className="mx-auto max-w-6xl">
        {/* Phases */}
        <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-4">
          {/* Phase 1 */}
          <div className="relative">
            <div className="h-full rounded bg-rose-200/90 p-6">
              <div className="absolute -top-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-black text-xl font-bold text-white">
                01
              </div>
              <ul className="mt-8 list-disc space-y-2 pl-4 text-gray-800">
                <li>Ocicat Launch</li>
                <li>1000 Holders</li>
                <li>1000 Members</li>
                <li>Road map</li>
                <li>Website creation</li>
                <li>Documentation</li>
              </ul>
            </div>
            <div className="mt-4 flex items-center gap-2 rounded border-2 border-rose-200/90 px-4 py-2">
              <span className="text-white">PHASE 1</span>
              <Check className="h-5 w-5 text-white" />
            </div>
          </div>

          {/* Phase 2 */}
          <div className="relative">
            <div className="h-full rounded bg-[#8B6E5E]/90 p-6">
              <div className="absolute -top-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-black text-xl font-bold text-white">
                02
              </div>
              <ul className="mt-8 list-disc space-y-2 pl-4 text-white">
                <li>Staking</li>
                <li>Contract Audit</li>
                <li>Coingecko</li>
                <li>staking v2</li>
                <li>5000 Holders</li>
              </ul>
            </div>
            <div className="mt-4 flex items-center gap-2 rounded border-2 border-[#8B6E5E]/90 px-4 py-2">
              <span className="text-white">PHASE 2</span>
              <Check className="h-5 w-5 text-white" />
            </div>
          </div>

          {/* Phase 3 */}
          <div className="relative">
            <div className="h-full rounded bg-orange-400/90 p-6">
              <div className="absolute -top-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-black text-xl font-bold text-white">
                03
              </div>
              <ul className="mt-8 list-disc space-y-2 pl-4 text-white">
                <li>NFT development</li>
                <li>CEX Listing</li>
                <li>Telegram App</li>
                <li>Dao</li>
                <li>staking v3</li>
              </ul>
            </div>
            <div className="mt-4 rounded border-2 border-orange-400/90 px-4 py-2">
              <span className="text-white">PHASE 3</span>
            </div>
          </div>

          {/* Phase 4 */}
          <div className="relative">
            <div className="h-full rounded bg-[#2A5B6C]/90 p-6">
              <div className="absolute -top-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-black text-xl font-bold text-white">
                04
              </div>
              <ul className="mt-8 list-disc space-y-2 pl-4 text-white">
                <li>50,000 Holders</li>
                <li>100,000 Members</li>
                <li>Cex Listing</li>
                <li>Bridge</li>
                <li>Tier1 Cex</li>
              </ul>
            </div>
            <div className="mt-4 rounded border-2 border-[#2A5B6C]/90 px-4 py-2">
              <span className="text-white">PHASE 4</span>
            </div>
          </div>
        </div>

        {/* DAO Dependent Section */}
        <div className="space-y-4 flex flex-row w-full items-center justify-between">
          <h2 className="text-3xl font-bold text-white">DAO DEPENDENT</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded border-4 border-white bg-orange-400/90 p-4">
              <span className="text-center text-lg text-white">Launchpad Creation</span>
            </div>
            <div className="rounded border-4 border-white bg-[#8B6E5E]/90 p-4">
              <span className="text-center text-lg text-white">AI Integration</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

