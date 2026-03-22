import React from "react";

export default function LendingPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-purple-400 mb-4">Lending Dashboard</h1>
          <p className="text-gray-400">Monitor and manage your lending positions</p>
        </div>

        <section className="bg-gray-900 border-4 border-purple-400 p-6 mb-6">
          <h2 className="text-xl font-bold text-purple-400 mb-4">Your Positions</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-800 border border-gray-700">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-green-400">USDC Lending</h3>
                  <p className="text-sm text-gray-400">Interest: 4.5% APY</p>
                </div>
                <div className="text-right">
                  <div className="font-bold">$10,000.00</div>
                  <div className="text-xs text-green-400">+450.00/year</div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-800 border border-gray-700">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-blue-400">ETH Lending</h3>
                  <p className="text-sm text-gray-400">Interest: 3.2% APY</p>
                </div>
                <div className="text-right">
                  <div className="font-bold">5.0 ETH</div>
                  <div className="text-xs text-green-400">+0.16 ETH/year</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-bold text-gray-400 mb-4">Available Pools</h2>
          <div className="space-y-3">
            <div className="p-3 bg-gray-800 border border-gray-700 flex justify-between items-center">
              <span className="font-bold text-purple-400">USDC Pool</span>
              <span className="text-sm text-gray-400">$15.2M TVL • 57.2% Utilization</span>
            </div>
            <div className="p-3 bg-gray-800 border border-gray-700 flex justify-between items-center">
              <span className="font-bold text-purple-400">ETH Pool</span>
              <span className="text-sm text-gray-400">$42.8M TVL • 53.9% Utilization</span>
            </div>
            <div className="p-3 bg-gray-800 border border-gray-700 flex justify-between items-center">
              <span className="font-bold text-purple-400">Stablecoin Pool</span>
              <span className="text-sm text-gray-400">$28.5M TVL • 53.7% Utilization</span>
            </div>
          </div>
        </section>

        <div className="mt-6 text-center">
          <a
            href="/docs"
            className="inline-block px-6 py-2 bg-gray-800 border-2 border-gray-600 hover:border-purple-400 rounded font-bold transition-all"
          >
            Back to Documentation
          </a>
        </div>
      </div>
    </main>
  );
}
