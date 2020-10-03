import AsyncStorage from '@react-native-community/async-storage';
import firestore from '@react-native-firebase/firestore';

import {USER_LOGGED_IN, USER_LOGGED_OUT, RESTORE_TOKEN} from './action.types';

import {setMessage} from './message';

import {signIn, signOut, getCurrentUserInfo} from '../../services/authGoogle';

export const logoutGoogle = () => {
  return async (dispatch) => {
    try {
      await AsyncStorage.removeItem('userToken');
      await signOut();
      dispatch(logout());
    } catch (e) {
      console.log('erro logout', e);
      dispatch(
        setMessage({
          title: 'Atenção',
          text: 'Erro ao fazer logout!',
        }),
      );
    }
  };
};

export const loginGoogle = () => {
  return async (dispatch) => {
    try {
      const result = await signIn();
      if (result.user) {
        console.log(result.user);
        await AsyncStorage.setItem('userToken', result.idToken);
        await firestore().collection('users').doc(result.user.id).set({
          email: result.user.email,
          name: result.user.name,
          photo: result.user.photo,
        });
        dispatch(
          userLogged({
            token: result.idToken,
            userId: result.user.id,
            email: result.user.email,
            name: result.user.name,
          }),
        );
      }
    } catch (err) {
      console.log('erro login', err);
      dispatch(
        setMessage({
          title: 'Atenção',
          text: 'Erro ao fazer login!',
        }),
      );
    }
  };
};

export const restoreToken = () => {
  return async (dispatch) => {
    let userToken;
    try {
      userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        const result = await getCurrentUserInfo();
        dispatch(
          userLogged({
            token: result.idToken,
            userId: result.user.id,
            email: result.user.email,
            name: result.user.name,
          }),
        );
        return;
      }
    } catch (e) {
      userToken = null;
    }
    dispatch(restoredToken(userToken));
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

export const restoredToken = (token) => {
  return {
    type: RESTORE_TOKEN,
    payload: token,
  };
};
