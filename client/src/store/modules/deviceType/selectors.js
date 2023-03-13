import { LOADING_STATUSES } from '../../constants/loadingStatuses';

export const selectDeviceTypeModule = (state) => state.deviceType;

export const selectDeviceTypeLoadingStatus = (state) =>
  selectDeviceTypeModule(state).loadingStatus;

export const selectIsDeviceTypeLoading = (state) =>
  selectDeviceTypeLoadingStatus(state) === LOADING_STATUSES.loading;

export const selectDeviceTypeById = (state, { deviceTypeId }) =>
  selectDeviceTypeModule(state).entities[deviceTypeId];

export const selectDeviceTypeIds = (state) => selectDeviceTypeModule(state).ids;
