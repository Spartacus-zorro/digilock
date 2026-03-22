'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { arbitrageAgentData } from '@/data/data';

// ─── Types ────────────────────────────────────────────────────────────────────

interface PriceTick {
  exchange: string;
  btcPrice: number;
  spread: number;
}

interface Opportunity {
  id: number;
  pair: string;
  buyExchange: string;
  sellExchange: string;
  spread: string;
  profit: string;
  status: string;
}

interface LivePrice {
  price: number;
  delta: number;
}

// ─── Price Ticker Row ─────────────────────────────────────────────────────────

function PriceRow({
  tick,
  livePrice,
  isBestBuy,
  isBestSell,
}: {
  tick: PriceTick;
  livePrice: LivePrice;
  isBestBuy: boolean;
  isBestSell: boolean;
}) {
  const { price, delta } = livePrice;
  return (
    <motion.div
      layout
      className="flex items-center justify-between bg-gray-800/60 rounded-lg px-4 py-3 border border-gray-700 hover:border-purple-500/40 transition-colors"
    >
      <span className="text-sm font-semibold text-gray-300 w-24">{tick.exchange}</span>
      <motion.span
        key={Math.round(price)}
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        className={`text-base font-mono font-bold ${
          delta > 0 ? 'text-green-400' : delta < 0 ? 'text-red-400' : 'text-white'
        }`}
      >
        ${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </motion.span>
      <span
        className={`text-xs font-mono px-2 py-0.5 rounded ${
          delta > 0
            ? 'bg-green-500/20 text-green-300'
            : delta < 0
            ? 'bg-red-500/20 text-red-300'
            : 'bg-gray-700 text-gray-400'
        }`}
      >
        {delta > 0 ? '+' : ''}
        {delta.toFixed(2)}
      </span>
      {isBestSell && (
        <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-0.5 rounded ml-1">
          BEST SELL
        </span>
      )}
      {isBestBuy && (
        <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded ml-1">
          BEST BUY
        </span>
      )}
    </motion.div>
  );
}

// ─── Opportunity Card ─────────────────────────────────────────────────────────

function OpportunityCard({ opp, index }: { opp: Opportunity; index: number }) {
  const isLive = opp.status === 'LIVE';
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.15 }}
      className={`relative flex flex-col gap-1 bg-gray-800/60 rounded-xl p-4 border ${
        isLive ? 'border-green-500/40' : 'border-gray-700'
      } overflow-hidden`}
    >
      {isLive && (
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute top-3 right-3 w-2 h-2 rounded-full bg-green-400"
        />
      )}
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono font-bold text-purple-300">{opp.pair}</span>
        <span
          className={`text-xs px-2 py-0.5 rounded font-semibold ${
            isLive ? 'bg-green-500/20 text-green-300' : 'bg-gray-700 text-gray-400'
          }`}
        >
          {opp.status}
        </span>
      </div>
      <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
        <span className="bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded">BUY {opp.buyExchange}</span>
        <span>→</span>
        <span className="bg-yellow-500/20 text-yellow-300 px-1.5 py-0.5 rounded">
          SELL {opp.sellExchange}
        </span>
      </div>
      <div className="flex justify-between mt-2">
        <div>
          <p className="text-xs text-gray-500">Spread</p>
          <p className="text-sm font-mono font-bold text-green-400">{opp.spread}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-500">Est. Profit</p>
          <p className="text-sm font-mono font-bold text-green-300">{opp.profit}</p>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

/** Returns a bounded random-walk value within ±maxDelta of initialValue. */
function boundedStep(current: number, initial: number, stepSize: number, maxDrift: number): number {
  const change = (Math.random() - 0.5) * stepSize;
  const next = current + change;
  // Clamp to [initial - maxDrift, initial + maxDrift]
  const clamped = Math.max(initial - maxDrift, Math.min(initial + maxDrift, next));
  return Math.round(clamped * 100) / 100;
}

export default function ArbitrageAgent() {
  const { simulatedPrices, strategies, metrics, opportunities } = arbitrageAgentData;

  // Lift all live prices into parent state so best-buy / best-sell are always accurate
  const [livePrices, setLivePrices] = useState<LivePrice[]>(
    simulatedPrices.map((p) => ({ price: p.btcPrice, delta: 0 }))
  );

  const [scanIndex, setScanIndex] = useState(0);

  // Schedule variable-interval ticks for each exchange entirely inside an effect
  useEffect(() => {
    const initialPrices = simulatedPrices.map((p) => p.btcPrice);
    const timeoutIds: ReturnType<typeof setTimeout>[] = [];

    function scheduleTick(exchangeIndex: number) {
      const delay = 1200 + Math.random() * 800;
      const id = setTimeout(() => {
        setLivePrices((prev) => {
          const next = [...prev];
          const initial = initialPrices[exchangeIndex];
          const newPrice = boundedStep(
            next[exchangeIndex].price,
            initial,
            40,   // max step per tick  (~$40)
            800   // max total drift    (~$800)
          );
          const delta = Math.round((newPrice - next[exchangeIndex].price) * 100) / 100;
          next[exchangeIndex] = { price: newPrice, delta };
          return next;
        });
        // Re-schedule with a new random delay
        scheduleTick(exchangeIndex);
      }, delay);
      timeoutIds[exchangeIndex] = id;
    }

    simulatedPrices.forEach((_, i) => scheduleTick(i));

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanIndex((prev) => (prev + 1) % strategies.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [strategies.length]);

  // Compute best-buy (lowest price) and best-sell (highest price) indices
  const currentPrices = livePrices.map((lp) => lp.price);
  const bestBuyIndex = currentPrices.indexOf(Math.min(...currentPrices));
  const bestSellIndex = currentPrices.indexOf(Math.max(...currentPrices));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white" id="arbitrage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-green-400 inline-block"
            />
            AGENT {arbitrageAgentData.agentStatus}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
            {arbitrageAgentData.sectionTitle}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {arbitrageAgentData.sectionDescription}
          </p>
        </motion.div>

        {/* ── Metrics ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
        >
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              variants={itemVariants}
              className="bg-gray-800/60 border border-gray-700 rounded-xl p-4 text-center hover:border-yellow-500/40 transition-colors"
            >
              <p className="text-xs text-gray-500 mb-1">{metric.label}</p>
              <p className="text-lg font-mono font-bold text-yellow-300">{metric.value}</p>
              {metric.trend === 'up' && <p className="text-xs text-green-400 mt-0.5">▲ trending up</p>}
            </motion.div>
          ))}
        </motion.div>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left: Live Price Feed */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-1 bg-gray-900/70 border border-gray-700 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">Live BTC/USDT Feed</h3>
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="text-xs bg-green-500/20 text-green-300 px-2 py-0.5 rounded"
              >
                LIVE
              </motion.span>
            </div>
            <div className="flex flex-col gap-3">
              {simulatedPrices.map((tick, i) => (
                <PriceRow
                  key={tick.exchange}
                  tick={tick}
                  livePrice={livePrices[i]}
                  isBestBuy={i === bestBuyIndex}
                  isBestSell={i === bestSellIndex}
                />
              ))}
            </div>
          </motion.div>

          {/* Center: Detected Opportunities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-1 bg-gray-900/70 border border-gray-700 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">Arbitrage Opportunities</h3>
              <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded">
                {opportunities.filter((o) => o.status === 'LIVE').length} LIVE
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {opportunities.map((opp, i) => (
                <OpportunityCard key={opp.id} opp={opp} index={i} />
              ))}
            </div>

            {/* Scanning indicator */}
            <div className="mt-5 pt-4 border-t border-gray-700">
              <p className="text-xs text-gray-500 mb-2">Currently scanning:</p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={scanIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.4 }}
                  className="text-xs text-yellow-300 font-mono"
                >
                  {strategies[scanIndex].icon} {strategies[scanIndex].name}
                </motion.p>
              </AnimatePresence>
              <div className="mt-2 h-1 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  key={scanIndex}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2.5, ease: 'linear' }}
                  className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Strategies */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-1 bg-gray-900/70 border border-gray-700 rounded-2xl p-6"
          >
            <h3 className="text-lg font-bold text-white mb-4">Trading Strategies</h3>
            <div className="flex flex-col gap-4">
              {strategies.map((strategy, i) => (
                <motion.div
                  key={strategy.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex gap-3 p-3 rounded-xl border transition-colors ${
                    scanIndex === i
                      ? 'border-yellow-500/50 bg-yellow-500/5'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <span className="text-2xl flex-shrink-0">{strategy.icon}</span>
                  <div>
                    <p className={`text-sm font-semibold mb-0.5 ${scanIndex === i ? 'text-yellow-300' : 'text-white'}`}>
                      {strategy.name}
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed">{strategy.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Supported Assets ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="text-xs text-gray-500 mr-2">Supported assets:</span>
          {arbitrageAgentData.supportedAssets.map((asset) => (
            <motion.span
              key={asset}
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-gray-800 border border-gray-700 text-gray-300 hover:border-yellow-500/50 hover:text-yellow-300 transition-colors cursor-default"
            >
              {asset}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
