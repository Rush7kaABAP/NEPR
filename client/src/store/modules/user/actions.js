export const USER_ACTIONS = {
  auth: 'user/authorised',
  unauth: 'user/unauthorised',
  unameSet: 'user/setUserName',
};

export const authUser = (payload) => ({ type: USER_ACTIONS.auth, payload });
export const unauthUser = () => ({ type: USER_ACTIONS.unauth });
export const unameSet = (payload) => ({ type: USER_ACTIONS.unameSet, payload });
