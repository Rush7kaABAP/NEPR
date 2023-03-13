import { createAsyncThunk } from '@reduxjs/toolkit';
import { LOADING_STATUSES } from '../../../constants/loadingStatuses';
import { selectBrandIds } from '../selectors';
import { fetchBrandsAPI } from '../../../../http/deviceAPI';

export const fetchBrands = createAsyncThunk(
  `brands/fetchBrands`,
  async (_, { getState, rejectWithValue }) => {
    console.log('fetchBrands');
    const state = getState();

    if (selectBrandIds(state)?.length) {
      return rejectWithValue(LOADING_STATUSES.earlyAdded);
    }

    const response = await fetchBrandsAPI();
    return response;
    // const response = await fetch('http://localhost:3001/api/brand');
    // return await response.json();
  }
);
