import { createAsyncThunk } from '@reduxjs/toolkit';
import { LOADING_STATUSES } from '../../../constants/loadingStatuses';
import { selectDeviceById, selectDeviceIds } from '../selectors';
import {
  fetchOneDeviceAPI,
  fetchAllDevicesAPI,
} from '../../../../http/deviceAPI';

export const fetchDevice = createAsyncThunk(
  `devices/fetchDevices`,
  async (deviceId, { getState, rejectWithValue }) => {
    console.log('fetchDevice-', deviceId);
    const state = getState();

    if (deviceId) {
      const deviceStId = selectDeviceById(state, { deviceId });
      if (!deviceStId) {
        return rejectWithValue(LOADING_STATUSES.earlyAdded);
      }
      const response = await fetchOneDeviceAPI(deviceId);
      return response;
    } else {
      const deviceStIds = selectDeviceIds(state);
      if (!deviceStIds) {
        return rejectWithValue(LOADING_STATUSES.earlyAdded);
      }
      const response = await fetchAllDevicesAPI();
      return response;
    }
    // const response = await fetch(
    //   `http://localhost:3001/api/device/id=${deviceId}`
    // );
    // return await response.json();
  }
);
