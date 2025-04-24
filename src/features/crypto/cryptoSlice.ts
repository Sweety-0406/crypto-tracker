import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CryptoAsset } from '../../types/crypto';
import { sampleAssets } from './sampleAssets';

interface CryptoState {
  assets: CryptoAsset[];
}

const initialState: CryptoState = {
  assets: sampleAssets,
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateAssets(state, action: PayloadAction<CryptoAsset[]>) {
      state.assets = action.payload;
    },
  },
});

export const { updateAssets } = cryptoSlice.actions;
export default cryptoSlice.reducer;
