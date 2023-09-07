import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coinsArr: ['BTC', 'USD', 'EUR'],
  status: 'idle',
  error: null,
};

const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {},
});

export default coinsSlice.reducer;
