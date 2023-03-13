import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { LOADING_STATUSES } from '../../constants/loadingStatuses.js';
import { fetchBrands } from './thunk/fetchBrands';

const brandEntityAdapter = createEntityAdapter();

export const brandSlice = createSlice({
  name: 'brand',
  initialState: brandEntityAdapter.getInitialState({
    loadingStatus: LOADING_STATUSES.idle,
  }),
  extraReducers: (builder) =>
    builder
      .addCase(fetchBrands.pending, (state) => {
        state.loadingStatus = LOADING_STATUSES.loading;
      })
      .addCase(fetchBrands.fulfilled, (state, { payload }) => {
        brandEntityAdapter.setAll(state, payload);
        state.loadingStatus = LOADING_STATUSES.success;
      })
      .addCase(fetchBrands.rejected, (state, { payload }) => {
        state.loadingStatus =
          payload === LOADING_STATUSES.earlyAdded
            ? LOADING_STATUSES.success
            : LOADING_STATUSES.failed;
      }),
});
