import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  USER_LOADED,
  LOADING_USER,
  CREATING_USER,
  USER_CREATED,
  USER_NOT_FOUND,
} from './action.types';

import {setMessage} from './message';

import {signIn} from '../../services/authGoogle';

export const login = () => {
  return async (dispatch) => {
    try {
      dispatch(loadingUser());

      const result = await signIn();
      if (result.user) {
        dispatch(
          userLogged({
            token: result.idToken,
            userId: result.user.id,
            email: result.user.email,
            name: result.user.name,
          }),
        );
      }

      dispatch(userLoaded());
    } catch (err) {
      dispatch(userNotFound());

      dispatch(
        setMessage({
          title: 'Atenção',
          text: 'Usuario não econtrado!',
        }),
      );
      console.log('erro login', err);
    }
  };
};

export const loadingUser = () => {
  return {
    type: LOADING_USER,
  };
};

export const userLoaded = () => {
  return {
    type: USER_LOADED,
  };
};

export const userNotFound = () => {
  return {
    type: USER_NOT_FOUND,
  };
};

export const creatingUser = () => {
  return {
    type: CREATING_USER,
  };
};

export const userCreated = () => {
  return {
    type: USER_CREATED,
  };
};

export const userLogged = (user) => {
  return {
    type: USER_LOGGED_IN,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: USER_LOGGED_OUT,
  };
};