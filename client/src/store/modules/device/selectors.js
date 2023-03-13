import { LOADING_STATUSES } from '../../constants/loadingStatuses';

export const selectDeviceModule = (state) => state.device;

export const selectDeviceLoadingStatus = (state) =>
  selectDeviceModule(state).loadingStatus;

export const selectIsDeviceLoading = (state) =>
  selectDeviceLoadingStatus(state) === LOADING_STATUSES.loading;

export const selectDeviceById = (state, { deviceId }) =>
  selectDeviceModule(state).entities[deviceId];

export const selectDeviceIds = (state) => selectDeviceModule(state).ids;
