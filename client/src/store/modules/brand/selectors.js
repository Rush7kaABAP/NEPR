import { LOADING_STATUSES } from '../../constants/loadingStatuses';

export const selectBrandModule = (state) => state.brand;

export const selectBrandLoadingStatus = (state) =>
  selectBrandModule(state).loadingStatus;

export const selectIsBrandLoading = (state) =>
  selectBrandLoadingStatus(state) === LOADING_STATUSES.loading;

export const selectBrandById = (state, { brandId }) =>
  selectBrandModule(state).entities[brandId];

export const selectBrandIds = (state) => selectBrandModule(state).ids;
