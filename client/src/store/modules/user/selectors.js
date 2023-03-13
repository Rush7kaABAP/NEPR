import { LOADING_STATUSES } from '../../constants/loadingStatuses';

export const selectUserModule = (state) => state.user;

export const selectUserAuth = (state) =>
  selectUserModule(state)._isAuth || false;

export const selectUserName = (state) => selectUserModule(state).name;

export const selectUserLoadingStatus = (state) =>
  selectUserModule(state).loadingStatus;

export const selectIsUserLoading = (state) =>
  selectUserLoadingStatus(state) === LOADING_STATUSES.loading;

export const selectUserById = (state, { brandId }) =>
  selectUserModule(state).entities[brandId];
