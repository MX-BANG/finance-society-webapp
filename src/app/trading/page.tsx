'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import useSWR from 'swr';
import Card from '../../components/Card';
import Button from '../../components/Button';
import StockChart from '../../components/StockChart';
import { stockApi, StockQuote } from '../../services/stockApi';

const defaultStocks = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA', 'META'];

const TradingPage = () => {
  const [selectedSymbol, setSelectedSymbol] = useState('AAPL');
  const [orderType, setOrderType] = useState('buy');
  const [quantity, setQuantity] = useState('1');

  // Fetch stock quotes
  const { data: stockQuotes, error: quotesError } = useSWR<StockQuote[]>(
    'stock-quotes',
    async () => {
      const quotes = await Promise.all(
        defaultStocks.map(async (symbol) => {
          try {
            return await stockApi.getQuote(symbol);
          } catch (error) {
            console.error(`Error fetching quote for ${symbol}:`, error);
            return null;
          }
        })
      );
      return quotes.filter((quote): quote is StockQuote => quote !== null);
    },
    { refreshInterval: 60000 } // Refresh every minute
  );

  // Fetch intraday data for selected stock
  const { data: chartData, error: chartError } = useSWR(
    ['stock-chart', selectedSymbol],
    async () => {
      const data = await stockApi.getIntradayData(selectedSymbol);
      return Object.entries(data).map(([time, values]: [string, any]) => ({
        time: time.split(' ')[1],
        price: parseFloat(values['4. close'])
      })).slice(0, 50).reverse();
    },
    { refreshInterval: 300000 } // Refresh every 5 minutes
  );

  const selectedStock = stockQuotes?.find(stock => stock.symbol === selectedSymbol);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="section-padding">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Trading Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Practice trading with virtual money in our simulated market environment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Market Overview */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card className="h-full">
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-6">Market Overview</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-4">Symbol</th>
                        <th className="text-left py-4">Name</th>
                        <th className="text-right py-4">Price</th>
                        <th className="text-right py-4">Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stockQuotes?.map((stock) => (
                        <tr
                          key={stock.symbol}
                          className="border-b hover:bg-gray-50 cursor-pointer transition-colors"
                          onClick={() => setSelectedSymbol(stock.symbol)}
                        >
                          <td className="py-4 font-medium">{stock.symbol}</td>
                          <td className="py-4">{stock.name}</td>
                          <td className="py-4 text-right">${stock.price.toFixed(2)}</td>
                          <td className={`py-4 text-right ${
                            stock.change >= 0 ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Trading Panel */}
          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-6">Place Order</h2>
                
                {/* Selected Stock Info */}
                {selectedStock && (
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-2">{selectedStock.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold">
                        ${selectedStock.price.toFixed(2)}
                      </span>
                      <span className={`text-lg ${
                        selectedStock.change >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {selectedStock.change >= 0 ? '+' : ''}{selectedStock.change.toFixed(2)}%
                      </span>
                    </div>
                  </div>
                )}

                {/* Stock Chart */}
                {chartData && (
                  <div className="mb-6">
                    <StockChart data={chartData} isLoading={!chartData} />
                  </div>
                )}

                {/* Order Type Toggle */}
                <div className="flex gap-2 mb-6">
                  <Button
                    variant={orderType === 'buy' ? 'primary' : 'secondary'}
                    onClick={() => setOrderType('buy')}
                    className="flex-1"
                  >
                    Buy
                  </Button>
                  <Button
                    variant={orderType === 'sell' ? 'primary' : 'secondary'}
                    onClick={() => setOrderType('sell')}
                    className="flex-1"
                  >
                    Sell
                  </Button>
                </div>

                {/* Quantity Input */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-navy"
                  />
                </div>

                {/* Order Summary */}
                {selectedStock && (
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Total Value</span>
                      <span className="font-medium">
                        ${(selectedStock.price * parseInt(quantity || '0')).toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Commission</span>
                      <span className="font-medium">$0.00</span>
                    </div>
                  </div>
                )}

                {/* Place Order Button */}
                <Button
                  variant="primary"
                  fullWidth
                  onClick={() => alert('Order placed successfully!')}
                >
                  Place {orderType.charAt(0).toUpperCase() + orderType.slice(1)} Order
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Portfolio Overview */}
        <motion.div variants={itemVariants}>
          <Card>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Your Portfolio</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium mb-2">Total Value</h3>
                  <p className="text-2xl font-bold">$25,420.65</p>
                  <p className="text-green-600">+5.23%</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium mb-2">Available Cash</h3>
                  <p className="text-2xl font-bold">$12,845.32</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium mb-2">Total Positions</h3>
                  <p className="text-2xl font-bold">8</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TradingPage;
