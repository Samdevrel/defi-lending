'use client';

import { useState } from 'react';

interface Position {
  id: string;
  type: 'deposit' | 'borrow';
  asset: string;
  amount: number;
  balance: number;
  interestRate: number;
  apr: number;
  healthFactor: number;
  liquidationThreshold: number;
  ltv: number;
  status: 'active' | 'liquidated';
}

interface Market {
  name: string;
  symbol: string;
  collateralFactor: number;
  ltv: number;
  liquidationThreshold: number;
  borrowRate: number;
  supplyRate: number;
}

const markets: Market[] = [
  { name: 'USDC', symbol: 'USDC', collateralFactor: 0.85, ltv: 0.75, liquidationThreshold: 0.85, borrowRate: 4.5, supplyRate: 3.8 },
  { name: 'ETH', symbol: 'ETH', collateralFactor: 0.75, ltv: 0.7, liquidationThreshold: 0.8, borrowRate: 5.2, supplyRate: 3.5 },
  { name: 'WBTC', symbol: 'WBTC', collateralFactor: 0.75, ltv: 0.7, liquidationThreshold: 0.8, borrowRate: 5.5, supplyRate: 3.2 },
  { name: 'SOL', symbol: 'SOL', collateralFactor: 0.7, ltv: 0.6, liquidationThreshold: 0.75, borrowRate: 6.8, supplyRate: 4.1 },
  { name: 'LINK', symbol: 'LINK', collateralFactor: 0.8, ltv: 0.7, liquidationThreshold: 0.85, borrowRate: 4.8, supplyRate: 3.9 },
];

const positions: Position[] = [
  {
    id: 'POS-001',
    type: 'borrow',
    asset: 'ETH',
    amount: 15.2,
    balance: 15.2,
    interestRate: 5.2,
    apr: 5.2,
    healthFactor: 1.85,
    liquidationThreshold: 0.8,
    ltv: 0.7,
    status: 'active',
  },
  {
    id: 'POS-002',
    type: 'deposit',
    asset: 'USDC',
    amount: 50000,
    balance: 50000,
    interestRate: 3.8,
    apr: 3.8,
    healthFactor: 100,
    liquidationThreshold: 0,
    ltv: 0,
    status: 'active',
  },
  {
    id: 'POS-003',
    type: 'borrow',
    asset: 'SOL',
    amount: 50,
    balance: 50,
    interestRate: 6.8,
    apr: 6.8,
    healthFactor: 1.25,
    liquidationThreshold: 0.75,
    ltv: 0.6,
    status: 'active',
  },
];

export default function Home() {
  const [selectedMarket, setSelectedMarket] = useState<Market | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<Position | null>(null);
  const [actionType, setActionType] = useState<'deposit' | 'borrow'>('deposit');
  const [amount, setAmount] = useState('');

  const getHealthStatus = (hf: number) => {
    if (hf < 1) return { color: 'bg-red-900 text-red-400', text: 'CRITICAL' };
    if (hf < 1.1) return { color: 'bg-yellow-900 text-yellow-400', text: 'WARNING' };
    return { color: 'bg-green-900 text-green-400', text: 'HEALTHY' };
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <header className="border-b-4 border-indigo-400 bg-gray-900 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black">DeFi Lending Simulator</h1>
          <p className="text-gray-400 mt-2">Deposit collateral and borrow against it in real-time</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-900 border-4 border-indigo-400 p-4 text-center">
            <div className="text-3xl font-black text-indigo-400">2</div>
            <div className="text-sm text-gray-400">Positions</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">4.73%</div>
            <div className="text-sm text-gray-400">Avg APR</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black text-green-400">$68,237</div>
            <div className="text-sm text-gray-400">Total Value</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">3.2</div>
            <div className="text-sm text-gray-400">Avg Health</div>
          </div>
        </section>

        {/* Markets */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">Lending Markets</h2>
          <div className="grid md:grid-cols-5 gap-3">
            {markets.map((market) => (
              <div
                key={market.symbol}
                onClick={() => setSelectedMarket(market)}
                className={`p-3 border-4 cursor-pointer transition-all ${
                  selectedMarket?.symbol === market.symbol
                    ? 'bg-indigo-900/30 border-indigo-400'
                    : 'bg-gray-800 border-gray-600 hover:border-gray-500'
                }`}
              >
                <div className="text-xs text-gray-400 mb-1">{market.name}</div>
                <div className="text-xl font-bold text-indigo-400">{market.symbol}</div>
                <div className="grid grid-cols-2 gap-1 text-xs mt-2">
                  <div>
                    <div className="text-gray-500">Borrow</div>
                    <div className="font-bold">{market.borrowRate}%</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Supply</div>
                    <div className="font-bold text-green-400">{market.supplyRate}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Action Panel */}
        {selectedMarket && (
          <section className="bg-gray-900 border-4 border-indigo-400 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-black text-indigo-400">{selectedMarket.name} {selectedMarket.symbol} Market</h2>
                <p className="text-sm text-gray-400">Collateral Factor: {selectedMarket.collateralFactor * 100}%</p>
              </div>
              <button
                onClick={() => setSelectedMarket(null)}
                className="px-4 py-2 bg-gray-700 text-white font-bold border-2 border-gray-600 hover:bg-gray-600"
              >
                Close
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Action</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setActionType('deposit')}
                    className={`flex-1 py-3 font-bold border-2 transition-all ${
                      actionType === 'deposit'
                        ? 'bg-green-500 border-green-400 text-white'
                        : 'bg-gray-800 border-gray-600 hover:border-green-400'
                    }`}
                  >
                    DEPOSIT
                  </button>
                  <button
                    onClick={() => setActionType('borrow')}
                    className={`flex-1 py-3 font-bold border-2 transition-all ${
                      actionType === 'borrow'
                        ? 'bg-indigo-500 border-indigo-400 text-white'
                        : 'bg-gray-800 border-gray-600 hover:border-indigo-400'
                    }`}
                  >
                    BORROW
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Amount ({selectedMarket.symbol})</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full p-3 bg-gray-800 border-2 border-indigo-400 text-white font-bold text-xl"
                  placeholder="0.00"
                />
              </div>
            </div>

            <div className="p-3 bg-gray-800 border border-gray-700 mb-4">
              <div className="text-sm text-gray-400 mb-1">Interest Rates</div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-gray-500">Borrow APR</div>
                  <div className="text-2xl font-bold text-indigo-400">{selectedMarket.borrowRate}%</div>
                </div>
                <div>
                  <div className="text-gray-500">Supply APR</div>
                  <div className="text-2xl font-bold text-green-400">{selectedMarket.supplyRate}%</div>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setAmount('');
                setSelectedMarket(null);
              }}
              className="w-full py-3 bg-indigo-500 text-white font-bold border-4 border-indigo-400 hover:bg-indigo-400"
            >
              Confirm Transaction
            </button>
          </section>
        )}

        {/* Positions */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">Your Positions</h2>
          <div className="space-y-3">
            {positions.map((pos) => {
              const healthStatus = getHealthStatus(pos.healthFactor);
              return (
                <div
                  key={pos.id}
                  onClick={() => setSelectedPosition(pos)}
                  className={`p-4 border-4 cursor-pointer transition-all ${
                    selectedPosition?.id === pos.id
                      ? 'bg-indigo-900/30 border-indigo-400'
                      : 'bg-gray-800 border-gray-600 hover:border-gray-500'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs font-bold ${
                        pos.type === 'deposit' ? 'bg-green-900 text-green-400' : 'bg-indigo-900 text-indigo-400'
                      }`}>
                        {pos.type.toUpperCase()}
                      </span>
                      <h3 className="font-bold text-indigo-400">{pos.asset}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs font-bold ${healthStatus.color}`}>
                        {healthStatus.text}
                      </span>
                      <span className={`px-2 py-1 text-xs font-bold ${
                        pos.status === 'liquidated' ? 'bg-red-900 text-red-400' : 'bg-gray-700 text-gray-400'
                      }`}>
                        {pos.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-gray-500">Amount</div>
                      <div className="font-bold">{pos.amount.toLocaleString()} {pos.asset}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Interest Rate</div>
                      <div className="font-bold">{pos.interestRate}%</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Health Factor</div>
                      <div className={`font-bold ${pos.healthFactor < 1.1 ? 'text-yellow-400' : pos.healthFactor < 1 ? 'text-red-400' : 'text-green-400'}`}>
                        {pos.healthFactor.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* How DeFi Lending Works */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">How DeFi Lending Works</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">1️⃣</div>
              <h3 className="font-bold text-indigo-400 mb-2">Deposit Collateral</h3>
              <p className="text-xs text-gray-400">Lock assets as collateral</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">2️⃣</div>
              <h3 className="font-bold text-green-400 mb-2">Borrow Assets</h3>
              <p className="text-xs text-gray-400">Loan against collateral</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">3️⃣</div>
              <h3 className="font-bold text-yellow-400 mb-2">Health Factor</h3>
              <p className="text-xs text-gray-400">Monitor liquidation risk</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">4️⃣</div>
              <h3 className="font-bold text-purple-400 mb-2">Earn Yield</h3>
              <p className="text-xs text-gray-400">Lenders earn supply rates</p>
            </div>
          </div>
        </section>

        {/* Real-World Examples */}
        <section className="bg-gray-900 border-4 border-purple-400 p-6">
          <h2 className="text-xl font-black text-purple-400 mb-4">Real-World Examples</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-800 border-2 border-gray-700">
              <h3 className="font-bold text-indigo-400 mb-2">Mutuum Finance</h3>
              <p className="text-sm text-gray-400">Raised $20.8M for DeFi lending. Borrow against crypto without selling holdings.</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-700">
              <h3 className="font-bold text-green-400 mb-2">MELD Protocol</h3>
              <p className="text-sm text-gray-400">Cardano-based lending with automated collateral management and staking rewards.</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-700">
              <h3 className="font-bold text-yellow-400 mb-2">Anchor Protocol</h3>
              <p className="text-sm text-gray-400">Terra's legendary stable yield (historical). Note: Now defunct after Terra collapse.</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-700">
              <h3 className="font-bold text-purple-400 mb-2">Aave & Compound</h3>
              <p className="text-sm text-gray-400">DeFi lending pioneers with millions in TVL and 20+ supported assets.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm py-8 border-t border-gray-800">
          <p>
            Built by <a href="https://x.com/samdevrel" className="text-indigo-400 hover:underline">@samdevrel</a>
          </p>
        </footer>
      </div>
    </main>
  );
}
