'use client';

import { useState } from 'react';

interface Deposit {
  id: string;
  asset: string;
  amount: number;
  apy: number;
  timestamp: string;
}

interface Borrow {
  id: string;
  asset: string;
  amount: number;
  ltv: number;
  interestRate: number;
  collateral: string;
}

interface Pool {
  name: string;
  totalAssets: string;
  totalBorrows: string;
  utilizationRate: number;
  availableLiquidity: string;
}

const deposits: Deposit[] = [
  {
    id: 'DEP-001',
    asset: 'USDC',
    amount: 10000,
    apy: 4.5,
    timestamp: '2026-03-21 14:00',
  },
  {
    id: 'DEP-002',
    asset: 'ETH',
    amount: 5,
    apy: 3.2,
    timestamp: '2026-03-21 12:30',
  },
  {
    id: 'DEP-003',
    asset: 'USDT',
    amount: 25000,
    apy: 4.8,
    timestamp: '2026-03-21 10:15',
  },
];

const borrows: Borrow[] = [
  {
    id: 'BOR-001',
    asset: 'USDC',
    amount: 5000,
    ltv: 75,
    interestRate: 7.2,
    collateral: 'ETH',
  },
  {
    id: 'BOR-002',
    asset: 'DAI',
    amount: 2000,
    ltv: 80,
    interestRate: 6.8,
    collateral: 'USDC',
  },
  {
    id: 'BOR-003',
    asset: 'WBTC',
    amount: 0.5,
    ltv: 50,
    interestRate: 8.5,
    collateral: 'ETH',
  },
];

const pools: Pool[] = [
  {
    name: 'USDC Lending Pool',
    totalAssets: '$15.2M',
    totalBorrows: '$8.7M',
    utilizationRate: 57.2,
    availableLiquidity: '$6.5M',
  },
  {
    name: 'ETH Lending Pool',
    totalAssets: '$42.8M',
    totalBorrows: '$23.1M',
    utilizationRate: 53.9,
    availableLiquidity: '$19.7M',
  },
  {
    name: 'Stablecoin Pool',
    totalAssets: '$28.5M',
    totalBorrows: '$15.3M',
    utilizationRate: 53.7,
    availableLiquidity: '$13.2M',
  },
];

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<'deposit' | 'borrow' | 'pools'>('deposit');
  const [depositAmount, setDepositAmount] = useState('');
  const [borrowAmount, setBorrowAmount] = useState('');
  const [selectedBorrowAsset, setSelectedBorrowAsset] = useState<Borrow | null>(null);

  const handleDeposit = () => {
    if (!depositAmount) return;
    // Simulate deposit
  };

  const handleBorrow = () => {
    if (!borrowAmount || !selectedBorrowAsset) return;
    // Simulate borrow
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <header className="border-b-4 border-purple-400 bg-gray-900 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-black">DeFi Lending</h1>
              <p className="text-gray-400 mt-2">Supply assets and borrow against collateral with real-time metrics</p>
            </div>
            <nav className="flex gap-2">
              <a
                href="/"
                className="px-4 py-2 bg-gray-800 border-2 border-gray-600 hover:border-purple-400 rounded font-bold transition-all"
              >
                Home
              </a>
              <a
                href="/lending"
                className="px-4 py-2 bg-gray-800 border-2 border-gray-600 hover:border-purple-400 rounded font-bold transition-all"
              >
                Lending
              </a>
              <a
                href="/faucet"
                className="px-4 py-2 bg-gray-800 border-2 border-gray-600 hover:border-purple-400 rounded font-bold transition-all"
              >
                Faucet
              </a>
              <a
                href="/docs"
                className="px-4 py-2 bg-purple-500 border-2 border-purple-400 rounded font-bold transition-all"
              >
                Documentation
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-900 border-4 border-purple-400 p-4 text-center">
            <div className="text-3xl font-black text-purple-400">$86.5M</div>
            <div className="text-sm text-gray-400">Total TVL</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">57%</div>
            <div className="text-sm text-gray-400">Avg Utilization</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black text-green-400">4.6%</div>
            <div className="text-sm text-gray-400">Avg Supply APY</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">7.3%</div>
            <div className="text-sm text-gray-400">Avg Borrow Rate</div>
          </div>
        </section>

        {/* Tabs */}
        <div className="flex gap-2 bg-gray-900 p-2 border-2 border-gray-700">
          <button
            onClick={() => setSelectedTab('deposit')}
            className={`flex-1 py-3 font-bold border-2 transition-all ${
              selectedTab === 'deposit'
                ? 'bg-purple-500 border-purple-400'
                : 'bg-gray-800 border-gray-600 hover:border-gray-500'
            }`}
          >
            Deposit
          </button>
          <button
            onClick={() => setSelectedTab('borrow')}
            className={`flex-1 py-3 font-bold border-2 transition-all ${
              selectedTab === 'borrow'
                ? 'bg-purple-500 border-purple-400'
                : 'bg-gray-800 border-gray-600 hover:border-gray-500'
            }`}
          >
            Borrow
          </button>
          <button
            onClick={() => setSelectedTab('pools')}
            className={`flex-1 py-3 font-bold border-2 transition-all ${
              selectedTab === 'pools'
                ? 'bg-purple-500 border-purple-400'
                : 'bg-gray-800 border-gray-600 hover:border-gray-500'
            }`}
          >
            Pools
          </button>
        </div>

        {/* Deposit Tab */}
        {selectedTab === 'deposit' && (
          <section className="bg-gray-900 border-4 border-purple-400 p-6">
            <h2 className="text-xl font-black text-purple-400 mb-4">Deposit Assets</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400 mb-2">Enter Amount</div>
                <input
                  type="number"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full p-3 bg-gray-900 border-2 border-purple-400 text-white font-bold text-xl"
                />
              </div>
              <button
                onClick={handleDeposit}
                className="w-full py-4 bg-green-500 text-white font-bold border-4 border-green-400 hover:bg-green-400"
              >
                Deposit
              </button>
            </div>

            <h3 className="text-lg font-black text-purple-400 mt-8 mb-4">Recent Deposits</h3>
            <div className="space-y-3">
              {deposits.map((deposit) => (
                <div key={deposit.id} className="p-3 bg-gray-800 border border-gray-700 flex justify-between items-center">
                  <div>
                    <span className="font-bold text-purple-400">{deposit.asset}</span>
                    <span className="ml-3 text-sm text-gray-400">{deposit.timestamp}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">${deposit.amount.toLocaleString()}</div>
                    <div className="text-xs text-green-400">{deposit.apy}% APY</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Borrow Tab */}
        {selectedTab === 'borrow' && (
          <section className="bg-gray-900 border-4 border-purple-400 p-6">
            <h2 className="text-xl font-black text-purple-400 mb-4">Borrow Assets</h2>
            <div className="space-y-4">
              {borrows.map((borrow) => (
                <div
                  key={borrow.id}
                  onClick={() => setSelectedBorrowAsset(borrow)}
                  className={`p-4 border-4 cursor-pointer transition-all ${
                    selectedBorrowAsset?.id === borrow.id
                      ? 'bg-purple-900/30 border-purple-400'
                      : 'bg-gray-800 border-gray-600 hover:border-gray-500'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <span className="font-bold text-purple-400 text-lg">{borrow.asset}</span>
                      <span className={`ml-3 px-2 py-1 text-xs font-bold ${
                        borrow.ltv >= 75 ? 'bg-yellow-900 text-yellow-400' : 'bg-green-900 text-green-400'
                      }`}>
                        LTV: {borrow.ltv}%
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">${borrow.amount.toLocaleString()}</div>
                      <div className="text-xs text-green-400">{borrow.interestRate}% APR</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">
                    Collateral: <span className="font-bold">{borrow.collateral}</span>
                  </div>
                </div>
              ))}
            </div>

            {selectedBorrowAsset && (
              <div className="mt-6 p-4 bg-gray-800 border border-gray-700">
                <h3 className="font-bold text-purple-400 mb-3">Borrow {selectedBorrowAsset.asset}</h3>
                <div className="mb-4">
                  <label className="block text-sm text-gray-400 mb-2">Amount</label>
                  <input
                    type="number"
                    value={borrowAmount}
                    onChange={(e) => setBorrowAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full p-3 bg-gray-900 border-2 border-purple-400 text-white font-bold text-lg"
                  />
                </div>
                <button
                  onClick={handleBorrow}
                  className="w-full py-3 bg-blue-500 text-white font-bold border-4 border-blue-400 hover:bg-blue-400"
                >
                  Borrow
                </button>
              </div>
            )}
          </section>
        )}

        {/* Pools Tab */}
        {selectedTab === 'pools' && (
          <section className="bg-gray-900 border-4 border-purple-400 p-6">
            <h2 className="text-xl font-black text-purple-400 mb-4">Lending Pools</h2>
            <div className="space-y-4">
              {pools.map((pool) => (
                <div key={pool.name} className="p-4 bg-gray-800 border border-gray-700">
                  <h3 className="font-bold text-purple-400 mb-3">{pool.name}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <div className="text-gray-500">Total Assets</div>
                      <div className="font-bold">{pool.totalAssets}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Total Borrows</div>
                      <div className="font-bold">{pool.totalBorrows}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Utilization</div>
                      <div className="font-bold">{pool.utilizationRate}%</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Available</div>
                      <div className="font-bold">{pool.availableLiquidity}</div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="w-full bg-gray-900 border border-gray-600 h-3">
                      <div
                        className="bg-purple-500 h-3"
                        style={{ width: `${pool.utilizationRate}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      Utilization: {pool.utilizationRate}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* How It Works */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">How DeFi Lending Works</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">1️⃣</div>
              <h3 className="font-bold text-purple-400 mb-2">Supply Assets</h3>
              <p className="text-xs text-gray-400">Deposit crypto into lending pool</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">2️⃣</div>
              <h3 className="font-bold text-blue-400 mb-2">Earn Yield</h3>
              <p className="text-xs text-gray-400">APR rewards accrue automatically</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">3️⃣</div>
              <h3 className="font-bold text-green-400 mb-2">Borrow Against</h3>
              <p className="text-xs text-gray-400">Use collateral to borrow assets</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">4️⃣</div>
              <h3 className="font-bold text-yellow-400 mb-2">LTV Management</h3>
              <p className="text-xs text-gray-400">Maintain collateral ratio to avoid liquidation</p>
            </div>
          </div>
        </section>

        {/* Real-World Examples */}
        <section className="bg-gray-900 border-4 border-green-400 p-6">
          <h2 className="text-xl font-black text-green-400 mb-4">Popular Protocols</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-800 border-2 border-gray-700">
              <h3 className="font-bold text-purple-400 mb-2">Aave</h3>
              <p className="text-sm text-gray-400">Market-leading DeFi lending with flash loans and gasless transactions.</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-700">
              <h3 className="font-bold text-purple-400 mb-2">Compound</h3>
              <p className="text-sm text-gray-400">Algorithmic interest rates based on supply/demand.</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-700">
              <h3 className="font-bold text-purple-400 mb-2">Mutuum Finance</h3>
              <p className="text-sm text-gray-400">$20.8M raised, shared liquidity pools, no liquidation risk.</p>
            </div>
          </div>
        </section>

        {/* Documentation Button */}
        <section className="text-center py-8">
          <a
            href="/docs"
            className="inline-block px-8 py-3 bg-purple-500 border-4 border-purple-400 text-white font-bold text-lg rounded hover:bg-purple-400 transition-all"
          >
            View Documentation
          </a>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm py-8 border-t border-gray-800">
          <p>
            Built by <a href="https://x.com/samdevrel" className="text-purple-400 hover:underline">@samdevrel</a>
          </p>
        </footer>
      </div>
    </main>
  );
}
