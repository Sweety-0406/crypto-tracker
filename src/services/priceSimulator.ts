import { AppDispatch } from '../store/configureStore';
import { updateAssets } from '../features/crypto/cryptoSlice';
import { CryptoAsset } from '../types/crypto';

export const simulatePriceUpdates = (assets: CryptoAsset[], dispatch: AppDispatch) => {
  setInterval(() => {
    const updated = assets.map(asset => ({
      ...asset,
      price: +(asset.price * (1 + (Math.random() - 0.5) / 100)).toFixed(2),
      change1h: +(Math.random() * 2 - 1).toFixed(2),
      change24h: +(Math.random() * 2 - 1).toFixed(2),
      volume24h: `$${(Math.random() * 100_000_000_000).toFixed(0)}`,
    }));

    dispatch(updateAssets(updated));
  }, 2000);
};
