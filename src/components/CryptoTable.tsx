import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/configureStore';
import { simulatePriceUpdates } from '../services/priceSimulator';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function CryptoTable() {
  const assets = useSelector((state: RootState) => state.crypto.assets);
  const dispatch = useDispatch();

  useEffect(() => {
    simulatePriceUpdates(assets, dispatch);
  }, []);

  const formatNumber = (num: number) => num.toLocaleString(undefined, { maximumFractionDigits: 2 });

  const renderChange = (value: number) => (
    <div className={`flex items-center gap-1 ${value >= 0 ? 'green' : 'red'}`}>
      {value >= 0 ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
      {Math.abs(value).toFixed(2)}%
    </div>
  );

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left border-collapse">
        <thead>
          <tr className="gray border-b text-xs uppercase tracking-wider">
            <th className="p-3">#</th>
            <th className="p-3">Name</th>
            <th className="p-3">Price</th>
            <th className="p-3">1h %</th>
            <th className="p-3">24h %</th>
            <th className="p-3">7d %</th>
            <th className="p-3">Market Cap</th>
            <th className="p-3">Volume(24h)</th>
            <th className="p-3">Circulating Supply</th>
            <th className="p-3">Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, i) => (
            <tr key={asset.id} className="border-b hover:bg-gray-50 transition text-sm">
                <td className="p-3 font-medium">{i + 1}</td>
                <td className="p-3 flex items-center gap-3">
                    <div className="size  rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center">
                        <img
                        src={asset.logo}
                        alt={asset.symbol}
                        className="size"
                        />
                    </div>
                    <div className="flex flex-col symbol">
                        <span >{asset.name}</span>
                        <span >{asset.symbol}</span>
                    </div>
                </td>
                <td className={`p-3 `}>${formatNumber(asset.price)}</td>
                <td className={`p-3`}>{renderChange(asset.change1h)}</td>
                <td className={`p-3`}>{renderChange(asset.change24h)}</td>
                <td className={`p-3`}>{renderChange(asset.change7d)}</td>
                <td className="p-3">${(asset.marketCap)}</td>
                <td className="p-3">${(asset.volume24h)}</td>
                <td className="p-3">{(asset.circulatingSupply)} {asset.symbol}</td>
                <td className="p-3">
                    <img src={asset.chartImage} className="h-8 w-full object-contain" alt="7d chart" />
                </td>
            </tr>

          ))}
        </tbody>
      </table>
    </div>
  );
}
