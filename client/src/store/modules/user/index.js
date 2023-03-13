import { USER_ACTIONS } from './actions';

export const userReducer = (state = {}, action) => {
  //console.log('action: ', action);
  switch (action?.type) {
    case USER_ACTIONS.auth: {
      return {
        ...state,
        _isAuth: true,
        ...action.payload,
      };
    }
    case USER_ACTIONS.unauth: {
      return {
        // ...state,
        _isAuth: false,
      };
    }
    case USER_ACTIONS.unameSet: {
      return {
        ...state,
        name: action.payload,
      };
    }
    default:
      return state;
  }
};
