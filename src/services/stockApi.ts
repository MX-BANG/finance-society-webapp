const ALPHA_VANTAGE_API_KEY = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY || 'demo';
const BASE_URL = 'https://www.alphavantage.co/query';

export interface StockQuote {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  latestTradingDay: string;
}

// Mock data for development and fallback
const mockStockData: Record<string, StockQuote> = {
  'AAPL': {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 182.52,
    change: 1.25,
    changePercent: 0.69,
    volume: 1000000,
    latestTradingDay: new Date().toISOString().split('T')[0]
  },
  'MSFT': {
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    price: 408.21,
    change: -7.92,
    changePercent: -1.94,
    volume: 900000,
    latestTradingDay: new Date().toISOString().split('T')[0]
  },
  'GOOGL': {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    price: 142.65,
    change: 0.78,
    changePercent: 0.55,
    volume: 800000,
    latestTradingDay: new Date().toISOString().split('T')[0]
  },
  'AMZN': {
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    price: 156.87,
    change: 2.34,
    changePercent: 1.51,
    volume: 750000,
    latestTradingDay: new Date().toISOString().split('T')[0]
  },
  'TSLA': {
    symbol: 'TSLA',
    name: 'Tesla Inc.',
    price: 193.45,
    change: -1.56,
    changePercent: -0.80,
    volume: 950000,
    latestTradingDay: new Date().toISOString().split('T')[0]
  },
  'META': {
    symbol: 'META',
    name: 'Meta Platforms Inc.',
    price: 484.12,
    change: 3.21,
    changePercent: 0.67,
    volume: 850000,
    latestTradingDay: new Date().toISOString().split('T')[0]
  }
};

// Mock chart data
const generateMockChartData = (basePrice: number) => {
  const data = [];
  const now = new Date();
  for (let i = 0; i < 50; i++) {
    const time = new Date(now.getTime() - (i * 5 * 60000));
    const randomChange = (Math.random() - 0.5) * 2;
    data.push({
      time: time.toLocaleTimeString('en-US', { hour12: false }),
      price: basePrice + randomChange
    });
  }
  return data.reverse();
};

export const stockApi = {
  async getQuote(symbol: string): Promise<StockQuote> {
    try {
      const response = await fetch(
        `${BASE_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${ALPHA_VANTAGE_API_KEY}`
      );
      const data = await response.json();
      
      if (data['Note'] || !data['Global Quote'] || Object.keys(data['Global Quote']).length === 0) {
        console.log('Using mock data for', symbol);
        return mockStockData[symbol];
      }

      const quote = data['Global Quote'];
      return {
        symbol: quote['01. symbol'],
        name: mockStockData[symbol].name, // API doesn't provide company name
        price: parseFloat(quote['05. price']),
        change: parseFloat(quote['09. change']),
        changePercent: parseFloat(quote['10. change percent'].replace('%', '')),
        volume: parseInt(quote['06. volume']),
        latestTradingDay: quote['07. latest trading day']
      };
    } catch (error) {
      console.error('Error fetching stock quote:', error);
      return mockStockData[symbol];
    }
  },

  async searchStocks(query: string) {
    try {
      const response = await fetch(
        `${BASE_URL}?function=SYMBOL_SEARCH&keywords=${query}&apikey=${ALPHA_VANTAGE_API_KEY}`
      );
      const data = await response.json();
      
      if (data['Note']) {
        return Object.values(mockStockData)
          .filter(stock => 
            stock.symbol.toLowerCase().includes(query.toLowerCase()) ||
            stock.name.toLowerCase().includes(query.toLowerCase())
          );
      }
      
      return data.bestMatches || [];
    } catch (error) {
      console.error('Error searching stocks:', error);
      return [];
    }
  },

  async getIntradayData(symbol: string) {
    try {
      const response = await fetch(
        `${BASE_URL}?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${ALPHA_VANTAGE_API_KEY}`
      );
      const data = await response.json();
      
      if (data['Note'] || !data['Time Series (5min)']) {
        console.log('Using mock chart data for', symbol);
        return generateMockChartData(mockStockData[symbol].price);
      }

      return Object.entries(data['Time Series (5min)']).map(([time, values]: [string, any]) => ({
        time: time.split(' ')[1],
        price: parseFloat(values['4. close'])
      })).slice(0, 50).reverse();
    } catch (error) {
      console.error('Error fetching intraday data:', error);
      return generateMockChartData(mockStockData[symbol].price);
    }
  }
};
