'use client';

export default function FaucetPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-purple-400 mb-4">MockUSD Faucet</h1>
          <p className="text-gray-400">Get free MockUSD tokens for testing purposes</p>
        </div>

        <section className="bg-gray-900 border-4 border-green-400 p-6 mb-6">
          <h2 className="text-xl font-bold text-green-400 mb-4">Available Faucets</h2>

          <div className="space-y-4">
            <div className="p-4 bg-gray-800 border-2 border-gray-700">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-purple-400">Standard Faucet</h3>
                <span className="px-3 py-1 bg-green-900 text-green-400 rounded text-sm font-bold">Free</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">Get 1,000 MockUSD for testing deployments</p>
              <button
                onClick={() => alert("Faucet request sent! Check your wallet in 30 seconds.")}
                className="w-full py-2 bg-green-500 text-white font-bold border-2 border-green-400 hover:bg-green-400 rounded transition-all"
              >
                Claim 1,000 MockUSD
              </button>
            </div>

            <div className="p-4 bg-gray-800 border-2 border-gray-700">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-purple-400">Premium Faucet</h3>
                <span className="px-3 py-1 bg-purple-900 text-purple-400 rounded text-sm font-bold">Daily Limit</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">Get 10,000 MockUSD (1 per day)</p>
              <button
                onClick={() => alert("Faucet request sent! Check your wallet in 30 seconds.")}
                className="w-full py-2 bg-purple-500 text-white font-bold border-2 border-purple-400 hover:bg-purple-400 rounded transition-all"
              >
                Claim 10,000 MockUSD
              </button>
            </div>
          </div>
        </section>

        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-bold text-gray-400 mb-4">Usage Guidelines</h2>
          <ul className="space-y-2 text-gray-300">
            <li>• Faucet tokens are for testing and development only</li>
            <li>• Cannot be transferred to mainnet addresses</li>
            <li>• Premium faucet resets daily at UTC midnight</li>
            <li>• MockUSD has 6 decimal places like USDC</li>
            <li>• 10% APR interest accrues on all balances</li>
          </ul>
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
