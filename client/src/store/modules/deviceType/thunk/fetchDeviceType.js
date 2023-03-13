import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTypesAPI } from '../../../../http/deviceAPI';
import { LOADING_STATUSES } from '../../../constants/loadingStatuses';
import { selectDeviceTypeIds } from '../selectors';

export const fetchDeviceType = createAsyncThunk(
  `deviceType/fetchDeviceType`,
  async (_, { getState, rejectWithValue }) => {
    console.log('fetchDeviceType');
    const state = getState();

    if (selectDeviceTypeIds(state)?.length) {
      return rejectWithValue(LOADING_STATUSES.earlyAdded);
    }

    const response = await fetchTypesAPI();
    return response;
    // const response = await fetch('http://localhost:3001/api/type');

    // return await response.json();
  }
);
