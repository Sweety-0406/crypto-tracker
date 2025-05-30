import { CryptoAsset } from '../../types/crypto';

export const sampleAssets: CryptoAsset[] = [
  {
    id: 'btc',
    name: 'Bitcoin',
    symbol: 'BTC',
    logo: '/logos/btc.png',
    price: 93759.48,
    change1h: 0.43,
    change24h: 0.93,
    change7d: 11.11,
    marketCap: '$1,861,618,902,186',
    volume24h: '$43,874,950,947',
    circulatingSupply: '19.85M BTC',
    maxSupply: '21M',
    chartImage: '/chart-placeholder-up.svg',
  },
  {
    id: 'eth',
    name: 'Ethereum',
    symbol: 'ETH',
    logo: '/logos/eth.png',
    price: 4823.12,
    change1h: 0.21,
    change24h: 1.05,
    change7d: 7.65,
    marketCap: '$578,123,456,789',
    volume24h: '$25,432,100,000',
    circulatingSupply: '120.45M ETH',
    maxSupply: '∞',
    chartImage: '/chart-placeholder-up.svg',
  },
  {
    id: 'usdt',
    name: 'Tether',
    symbol: 'USDT',
    logo: '/logos/usdt.png',
    price: 1.00,
    change1h: 0.00,
    change24h: -0.01,
    change7d: 0.00,
    marketCap: '$104,000,000,000',
    volume24h: '$78,000,000,000',
    circulatingSupply: '104B USDT',
    maxSupply: 'N/A',
    chartImage: '/chart-placeholder-up.svg',
  },
];
