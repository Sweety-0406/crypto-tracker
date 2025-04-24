export interface CryptoAsset {
    id: string;
    name: string;
    symbol: string;
    logo: string;
    price: number;
    change1h: number;
    change24h: number;
    change7d: number;
    marketCap: string;
    volume24h: string;
    circulatingSupply: string;
    maxSupply?: string;
    chartImage: string;
  }
  